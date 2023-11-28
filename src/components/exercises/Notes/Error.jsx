import styles from "./Error.module.css";

function Error() {
  return (
    <p className={styles.error}>
      <span>💥</span> There was an error fetching questions.
    </p>
  );
}

export default Error;
