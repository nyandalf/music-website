import styles from "./LessonCard.module.css";
import { Link } from "react-router-dom";

function LessonCard({ lesson }) {
  console.log(lesson);
  return (
    <Link to={lesson.route} className={styles.card}>
      <div className={styles.cardImage}>
        <img
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80"
          alt={`${lesson.name}`}
        />
      </div>
      <div className={styles.cardContent}>
        <h1 className={styles.cardTitle}>{lesson.name}</h1>
        <div className={styles.cardInfo}>
          <p className={styles.textMedium}>{lesson.description}</p>
        </div>
      </div>
    </Link>
  );
}

export default LessonCard;
