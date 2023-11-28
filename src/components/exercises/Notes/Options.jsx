import { useState } from "react";
import styles from "./Options.module.css";

function Options({
  shuffledQuestions,
  questionCount,
  options,
  index,
  type,
  hasAnswered,
  dispatch,
}) {
  const [clicked, setClicked] = useState(false);
  const correctAnswer = shuffledQuestions.some(
    (item) => typeof item === "object"
  )
    ? shuffledQuestions[index]?.answer
    : shuffledQuestions[index]?.toUpperCase();

  return (
    <div
      className={`${
        options.length < 21 ? styles.containerRow : styles.containerGrid
      }`}
    >
      {options.map((option) => (
        <div className={styles.item}>
          <button
            className={`${styles.btn} ${
              hasAnswered
                ? correctAnswer.replace(/,/g, "") === option
                  ? styles["correct"]
                  : styles["wrong"]
                : ""
            } ${type === "chordQuality" && styles["chord"]} ${
              type === "scale" && styles["chord"]
            } ${type === "key" && styles["key"]}`}
            onClick={(e) => {
              if (!clicked) setClicked(true);
              if (index < questionCount - 1) {
                dispatch({ type: "newAnswer", payload: option });
                setTimeout(() => {
                  dispatch({ type: "nextQuestion" });
                  setClicked(false);
                }, 500);
                clearTimeout();
                //Short delay to show the correct answer before moving on
              }
              if (index === questionCount - 1) {
                dispatch({ type: "newAnswer", payload: option });
                setTimeout(() => {
                  dispatch({ type: "finish" });
                  setClicked(false);
                }, 500);
                clearTimeout();
              }
            }}
            disabled={clicked}
          >
            {option.includes("^")
              ? option.substring(1) + "♯"
              : option.includes("_")
              ? option.substring(1) + "♭"
              : option.includes("#")
              ? option[0] + option.slice(1).toLowerCase().replace(/#/g, "♯")
              : option.includes("b")
              ? option[0] + option.slice(1).toLowerCase().replace(/b/g, "♭")
              : option.charAt(0).toUpperCase() + option.slice(1).toLowerCase()}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Options;
