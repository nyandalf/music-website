import styles from "./Cards.module.css";
import ExerciseCard from "./ExerciseCard";
import exercises from "./exercises.json";

function Cards() {
  return (
    <div className={styles.cards}>
      {exercises.exercises.map((exercise) => (
        <ExerciseCard exercise={exercise} />
      ))}
    </div>
  );
}

export default Cards;
