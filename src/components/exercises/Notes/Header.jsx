import styles from "./Header.module.css";

function Header({ children }) {
  return (
    <div className={styles.header}>
      <h1>{children}</h1>
    </div>
  );
}

export default Header;
