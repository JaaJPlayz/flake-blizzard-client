import styles from "./styles/navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img
          src="https://static-00.iconduck.com/assets.00/nixos-icon-2048x1776-8czr8nir.png"
          alt="nixos-logo"
        />
        <h1>Flake Blizzard</h1>
      </div>
    </nav>
  );
}

export default Navbar;
