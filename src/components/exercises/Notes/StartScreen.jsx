import styles from "./StartScreen.module.css";

function StartScreen({ questionCount, description = "Exercise", dispatch }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.top}>{description}</h1>
      <div className={styles.btm}>
        <p>There are {questionCount} questions in this exercise.</p>
      </div>
      <button
        className={styles.btm}
        onClick={() => dispatch({ type: "start" })}
      >
        Start
      </button>
    </div>
  );
}

export default StartScreen;
