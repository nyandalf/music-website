import styles from "./NotesExerciseList.module.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useCookies } from "react-cookie";
import Spinner from "../Spinner";
import QuizProgress from "../QuizProgress";
import QuizRecord from "../QuizRecord";
import axios from "axios";

function IntervalsExerciseList() {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const response = await axios.get("http://localhost:3001/questions");
        const data = await response.data[0].questions;
        setQuestions(
          data.filter((question) => question.id > 2000 && question.id < 3000)
        );
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    fetchQuestions();
  }, []);
  return (
    <div className={styles.container}>
      <p>Intervals</p>
      <QuizProgress idRange={[2000, 3000]} totalQuestions={questions.length} />
      <div className={styles.section}>
        {isLoading ? (
          <Spinner />
        ) : (
          <ul>
            {questions.map((question) => (
              <li>
                <p>{question.description}</p>
                <QuizRecord quizId={question.id} />
                <Link to={`${question.id}`} k>
                  <button>Go to exercise</button>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default IntervalsExerciseList;
