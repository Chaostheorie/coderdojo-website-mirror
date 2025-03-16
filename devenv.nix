{ pkgs, ... }:
{
  # https://devenv.sh/packages/
  packages = [
    pkgs.git
    # tools for deployment
    pkgs.coreutils
    pkgs.openssh
    pkgs.rsync
    # tools for minify
    pkgs.mozjpeg # jpegtran
    pkgs.nodePackages.svgo
    pkgs.pngquant
  ];

  # https://devenv.sh/languages/
  languages = {
    javascript = {
      enable = true;
      pnpm.enable = true;
      pnpm.install.enable = true;
    };
    typescript.enable = true;
  };

  cachix.enable = false;

  # https://devenv.sh/git-hooks/
  git-hooks.hooks.prettier.enable = true;

  # See full reference at https://devenv.sh/reference/options/
}
