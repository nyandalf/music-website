import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import styles from "./QuizProgress.module.css";

function filterUniqueAndCondition(array, property, condition1, condition2) {
  return array
    .filter((item, index, self) => {
      return self.findIndex((i) => i[property] === item[property]) === index;
    })
    .filter(
      (item) => item[property] > condition1 && item[property] < condition2
    );
}

function QuizProgress({ idRange, totalQuestions }) {
  const [quizzes, setQuizzes] = useState([]);
  const [cookies] = useCookies(["access_token"]);
  let finishedQuestions = filterUniqueAndCondition(
    quizzes,
    "quizId",
    idRange[0],
    idRange[1]
  );
  useEffect(() => {
    function getItemFromLocalStorage() {
      const storedValue = localStorage.getItem("finishedQuizzes");
      // If a value is found, update the state
      if (storedValue) {
        setQuizzes(JSON.parse(storedValue));
      }
    }
    getItemFromLocalStorage();
  }, []);

  return (
    <div>
      {cookies.access_token ? (
        <p className={styles.progress}>
          Progress: {finishedQuestions.length}/{totalQuestions}
        </p>
      ) : (
        <p>You can login to track your progress</p>
      )}
    </div>
  );
}

export default QuizProgress;
