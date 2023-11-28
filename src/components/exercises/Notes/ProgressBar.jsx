import React, { useState } from "react";
import styles from "./ProgressBar.module.css";

function ProgressBar({
  shuffledQuestions,
  questionCount,
  index,
  hasAnswered,
  answers,
}) {
  function compareArrays(arr1, arr2) {
    // Check if both arrays have the same length
    // if (arr1.length !== arr2.length) {
    //   return [];
    // }

    // Compare elements at each index and create an array of booleans
    const matches = arr2.map((element, index) => element === arr1[index]);

    return matches;
  }
  let result = [];
  if (answers.length !== 0) {
    shuffledQuestions = shuffledQuestions.some(
      (item) => typeof item === "object"
    )
      ? shuffledQuestions.map((element) => element.answer) //Extract answers and put it into the same array
      : shuffledQuestions.map((element) =>
          element.replace(/,/g, "").toUpperCase()
        );
    result = compareArrays(shuffledQuestions, answers);
  }
  const colorsMap = {
    true: "correct",
    false: "wrong",
    undefined: "",
  };

  return (
    <div className={styles.container}>
      {/* <ul className={styles.realList}>
        {result.length !== 0 && (
          <ul className={styles.fakeList}>
            {[...Array(questionCount)].map((_, arrIndex) => (
              <li
                key={arrIndex}
                className={`${arrIndex < index ? styles["active"] : ""}`}
              >
                {arrIndex + 1}
              </li>
            ))}
          </ul>
        )}
        {result.map((result, i) => (
          <li className={`${result ? styles["correct"] : styles["wrong"]} `}>
            {i + 1}
          </li>
        ))}
      </ul> FAKE SOLUTION USING TWO LISTS THAT OVERLAP */}

      <ul className={styles.realList}>
        {shuffledQuestions.map((question, index) => (
          <li key={index} className={`${styles[colorsMap[result[index]]]}`}>
            {/* {index + 1} */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProgressBar;
