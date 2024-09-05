{
  description = "A very basic flake";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
  };

  outputs = { self, nixpkgs }:
    let
      system = "x86_64-linux";
      pkgs = import nixpkgs { system = system; };
    in
    {
      devShell.${system} = pkgs.mkShell {
        buildInputs = [
          pkgs.nodejs_22
          pkgs.git
        ];

        # Optional shell hook
        shellHook = ''
          echo "Hello, client shellHook!"
        '';
      };

      defaultDevShell.${system} = self.devShell.${system};
    };
}
