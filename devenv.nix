{ pkgs, ... }:
{
  # https://devenv.sh/packages/
  packages = [
    pkgs.git
    pkgs.coreutils
    pkgs.openssh
    pkgs.rsync
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
