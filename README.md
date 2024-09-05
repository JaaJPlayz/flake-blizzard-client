# 🚀 Nix-Flakes React Client

🌟 Overview

Welcome to the Nix-Flakes React Client project! This project showcases how Nix, Nix Flakes, and NixOS can be used to create a stable and reliable development environment. The client-side application is built with React, CSS Modules, TypeScript, and Vite.
🎯 Project Purpose

The primary goal of this project is to highlight the benefits of using Nix and its ecosystem (including Nix Flakes and NixOS) to achieve consistent and reproducible development environments. The website you will build with this project will render a page demonstrating these advantages.
✨ Features

    React: 🌐 Modern JavaScript library for building user interfaces.
    CSS Modules: 🎨 Scoped and modular CSS to avoid conflicts.
    TypeScript: 📜 Superset of JavaScript adding static types.
    Vite: ⚡ Fast build tool and development server for a smooth development experience.
    Nix Flakes: 🧩 Provides a reproducible and declarative way to manage dependencies.

🚀 Getting Started

To get started with the project, follow these steps:
🛠️ Prerequisites

    Nix: Ensure you have Nix installed on your system. Follow the official Nix installation guide if needed.
    Nix Flakes: Enable Nix Flakes by adding experimental-features = nix-command flakes to your Nix configuration.
    Node.js 22: This project uses Node.js version 22, managed by Nix.

📥 Clone the Repository

```
git clone git@github.com:JaaJPlayz/flake-blizzard-client.git
cd nix-flakes-react-client
```

📦 Install Dependencies

To install dependencies using Nix Flakes, use the following command:

```
nix develop
```

This command will set up the development environment with the correct Node.js version and project dependencies.
🚀 Start the Development Server

Run the following command to start the development server using Vite:

```
npm run dev
```

The development server will start, and you can view your application at http://localhost:3000.
🏗️ Build for Production

To create a production build of the project, use:

```
npm run build
```

The production build will be output to the dist directory.
📁 Project Structure

    src/: Contains the source code for the project.
        components/: React components.
        styles/: CSS Modules.
        App.tsx: Main application component.
        index.tsx: Entry point of the React application.
    vite.config.ts: Vite configuration file.
    tsconfig.json: TypeScript configuration file.
    package.json: Project metadata and scripts.

💡 Contribution

Contributions to this project are welcome! If you have suggestions or improvements, please fork the repository and submit a pull request.
📝 License

This project is licensed under the MIT License. See the LICENSE file for more details.
📧 Contact

For any questions or issues, please open an issue on the GitHub repository or contact the maintainer at hiagoaugustofcunha@gmail.com
