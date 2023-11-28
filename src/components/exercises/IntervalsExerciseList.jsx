import styles from "./NotesExerciseList.module.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Spinner from "../Spinner";
import QuizProgress from "../QuizProgress";

function IntervalsExerciseList() {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchQuestions() {
      setIsLoading(true);
      try {
        const response = await fetch(`http://localhost:9000/questions`);
        const data = await response.json();
        setQuestions(
          data.filter((question) => question.id > 2000 && question.id < 3000)
        );
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
      } finally {
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
