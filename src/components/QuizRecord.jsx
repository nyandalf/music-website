import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import styles from "./QuizRecord.module.css";

function QuizRecord({ quizId }) {
  const [quizzes, setQuizzes] = useState([]);
  const [cookies] = useCookies(["access_token"]);
  let quizAttempts = quizzes.filter((item) => Number(item.quizId) === quizId);
  const bestAttempt = quizAttempts.reduce((best, current) => {
    // If current has a higher score, or if scores are equal but current has less time taken
    if (
      !best ||
      current.score > best.score ||
      (current.score === best.score && current.timeTaken < best.timeTaken)
    ) {
      return current;
    }
    // If the current attempt doesn't meet the criteria, keep the current best attempt
    return best;
  }, null);

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

  return <div></div>;
}

export default QuizRecord;
