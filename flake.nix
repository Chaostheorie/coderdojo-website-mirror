{
  inputs = {
    # nixpkgs and system wrapper
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-24.11";
    pre-commit-hooks = {
      url = "github:cachix/git-hooks.nix";
      inputs.nixpkgs.follows = "nixpkgs";
    };
    utils.url = "github:numtide/flake-utils";
  };

  outputs =
    {
      nixpkgs,
      utils,
      self,
      pre-commit-hooks,
      ...
    }:
    utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = import nixpkgs { inherit system; };
      in
      {
        packages = rec {
          red = website.override { domain = "coderdojo.red"; };
          blue = website.override { domain = "coderdojo.blue"; };

          website = pkgs.callPackage (
            {
              buildNpmPackage,
              importNpmLock,
              lib,
              fd,
              mozjpeg,
              svgo,
              pngquant,
              html-minifier,
              domain ? "coderdojo.red",
            }:
            let
              src = lib.fileset.toSource {
                root = ./.;
                fileset = lib.fileset.intersection (lib.fileset.fileFilter (
                  file: !file.hasExt "nix" && file.name != ".gitlab-ci.yml"
                ) ./.) (lib.fileset.fromSource (lib.cleanSource ./.));
              };
            in
            buildNpmPackage {
              inherit src;

              pname = "${domain}-pages";
              version = "unstable-${
                if self ? "dirtyShortRev" then
                  self.dirtyShortRev
                else if self ? "shortRev" then
                  self.shortRev
                else
                  "unknown"
              }";

              enableParallelBuilding = true;
              npmDeps = importNpmLock { npmRoot = src; };
              npmConfigHook = importNpmLock.npmConfigHook;

              nativeBuildInputs = [
                mozjpeg # jpegtran
                svgo
                pngquant
                html-minifier
                fd
              ];

              preBuild = ''
                export ${lib.strings.toShellVar "PRODUCTION" 1}
                export ${lib.strings.toShellVar "DOMAIN" domain}
              '';

              postBuild = ''
                # optimize JPEGs
                fd -e jpg -e jpeg -x jpegtran -copy none -optimize -progressive -outfile {} {}
                # optimize PNGs
                pngquant --force --skip-if-larger --speed 1 --strip --quality 60-90 build/**/*.png
                # optimize SVGs
                svgo build/**/*.svg
                # minify HTML
                fd -e html --no-ignore -x html-minifier --minify-css true --case-sensitive --use-short-doctype {} -o {}
              '';

              installPhase = ''
                runHook preInstall
                cp -pr --reflink=auto build $out/
                runHook postInstall
              '';
            }
          ) { inherit (pkgs.nodePackages) svgo; };
        };

        checks.pre-commit-check = pre-commit-hooks.lib.${system}.run {
          src = ./.;
          hooks = {
            prettier = {
              enable = true;
              settings = {
                binPath = "./node_modules/.bin/prettier";
                cache = true;
                check = true;
                list-different = false;
                configPath = "prettier.config.cjs";
                ignore-path = [
                  "./.gitignore"
                  "./.prettierignore"
                ];
              };
            };
            eslint = {
              enable = true;
              excludes = [ "./.gitignore" ];
              settings = {
                binPath = "./node_modules/.bin/eslint";
                extensions = "\.(js|svelte|ts)$";
              };
            };
            nixfmt-rfc-style.enable = true;
          };
        };

        devShells = {
          ci = pkgs.mkShell {
            packages = [
              pkgs.gnumake
              pkgs.rsync
              pkgs.coreutils-full
              pkgs.nix
              pkgs.openssh
            ];
          };
          default = pkgs.mkShell {
            packages = [
              pkgs.nodejs
              pkgs.nix
              pkgs.clolcat
              pkgs.nixfmt-rfc-style
              pkgs.npm-lockfile-fix
            ] ++ self.checks.${system}.pre-commit-check.enabledPackages;

            shellHook = ''
              echo "Configuring devshell: Updating NPM deps" | clolcat
              npm i --frozen-lockfile &> /dev/null
              echo "Configuring devshell: Setting up pre-commit hooks" | clolcat
              ${self.checks.${system}.pre-commit-check.shellHook}
            '';
          };
        };
      }
    );
}
