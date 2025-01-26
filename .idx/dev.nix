{pkgs}: {
  channel = "stable-24.05";
  packages = [
    pkgs.nodejs_20
    pkgs.bun
    pkgs.pnpm
  ];
  idx.extensions = [
    
  ];
  idx.previews = {
    previews = {
      web = {
        command = [
          "npm"
          "run"
          "dev"
          "build"
          "--port"
          "$PORT"
          "--hostname"
          "3000"
        ];
        manager = "web";
      };
    };
  };
}