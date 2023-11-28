import styles from "./Cards.module.css";
import lessons from "./lessons.json";
import LessonCard from "./LessonCard";

function Cards() {
  return (
    <div className={styles.cards}>
      {lessons.lessons.map((lesson) => (
        <LessonCard lesson={lesson} />
      ))}
    </div>
  );
}

export default Cards;
