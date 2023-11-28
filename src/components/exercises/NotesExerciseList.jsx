import styles from "./NotesExerciseList.module.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useCookies } from "react-cookie";
import Spinner from "../Spinner";
import QuizProgress from "../QuizProgress";
import QuizRecord from "../QuizRecord";

function NotesExerciseList() {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const trebleQuestions = questions?.filter(
    (question) => question.clef === "treble"
  );
  const bassQuestions = questions?.filter(
    (question) => question.clef === "bass"
  );
  useEffect(() => {
    async function fetchQuestions() {
      setIsLoading(true);
      try {
        const response = await fetch(`http://localhost:9000/questions`);
        const data = await response.json();
        setQuestions(data.filter((question) => question.id < 2000));
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
      <p>Treble Clef</p>
      <QuizProgress idRange={[0, 2000]} totalQuestions={questions.length} />
      <div className={styles.section}>
        {isLoading ? (
          <Spinner />
        ) : (
          <ul>
            {trebleQuestions.map((question) => (
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
      <p>Bass Clef</p>
      <div className={styles.section}>
        {isLoading ? (
          <Spinner />
        ) : (
          <ul>
            {bassQuestions.map((question) => (
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

export default NotesExerciseList;
