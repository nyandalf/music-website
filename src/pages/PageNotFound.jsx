import styles from "./PageNotFound.module.css";

export default function PageNotFound() {
  return (
    <div className={styles.container}>
      <div>
        <h1>Page not found</h1>
        <p>The page you're looking for doesn't seem to exist</p>
      </div>
      <img src="/wojak.png" alt="" />
    </div>
  );
}
