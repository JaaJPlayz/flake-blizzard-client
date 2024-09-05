import React from "react";
import styles from "./styles/nix_page.module.css"; // Import the CSS Module

const NixInfoPage: React.FC = () => {
  return (
    <div className={styles.nixInfoPage}>
      <header className={styles.header}>
        <h1>Why Use Nix Ecosystem?</h1>
      </header>
      <section className={styles.section}>
        <h2>Nix Package Manager</h2>
        <ul>
          <li>
            <strong>Reproducibility:</strong> Ensures that builds are consistent
            across different systems and environments.
          </li>
          <li>
            <strong>Isolation:</strong> Packages are isolated from each other,
            preventing dependency conflicts.
          </li>
          <li>
            <strong>Declarative Configuration:</strong> Allows you to declare
            the exact environment configuration, making setups easy to
            reproduce.
          </li>
          <li>
            <strong>Rollbacks:</strong> Easily rollback to previous versions of
            packages or configurations if something goes wrong.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Nix Flakes</h2>
        <ul>
          <li>
            <strong>Improved Dependency Management:</strong> Flakes make it
            easier to handle dependencies and ensure reproducibility across
            different environments.
          </li>
          <li>
            <strong>Version Pinning:</strong> Simplifies version pinning of
            dependencies and system configurations.
          </li>
          <li>
            <strong>Modularity:</strong> Encourages modularity by allowing you
            to define reusable configurations and dependencies.
          </li>
          <li>
            <strong>Consistency:</strong> Ensures consistent environments across
            development, CI/CD, and production.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Home Manager</h2>
        <ul>
          <li>
            <strong>Personal Configuration:</strong> Manages user-specific
            configurations such as dotfiles and application settings in a
            declarative way.
          </li>
          <li>
            <strong>Seamless Integration:</strong> Integrates well with NixOS,
            allowing you to manage both system and user configurations from a
            single place.
          </li>
          <li>
            <strong>Portability:</strong> Easily transfer your configuration
            between different machines by using the same Home Manager
            configuration.
          </li>
          <li>
            <strong>Consistent Environments:</strong> Ensures that your
            development environment is consistent across different machines and
            setups.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>NixOS</h2>
        <ul>
          <li>
            <strong>Declarative System Configuration:</strong> The entire system
            configuration is defined in a single file, making it easy to manage
            and reproduce.
          </li>
          <li>
            <strong>Atomic Upgrades:</strong> Updates are atomic, meaning you
            can roll back to a previous state if something goes wrong during an
            upgrade.
          </li>
          <li>
            <strong>System Reliability:</strong> Ensures a reliable and
            consistent system setup with built-in rollback capabilities and easy
            configuration management.
          </li>
          <li>
            <strong>Customizability:</strong> Highly customizable to fit your
            specific needs, whether it's for development, production, or
            anything in between.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default NixInfoPage;
