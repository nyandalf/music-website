import { useNavigate } from "react-router-dom";
import styles from "./FinishedScreen.module.css";

function FinishedScreen({
  dispatch,
  points,
  maxPossiblePoints,
  highscore,
  secondsCount,
  record,
}) {
  const percentage = (points / maxPossiblePoints) * 100;
  const navigate = useNavigate();
  // const minutes = Math.floor(secondsCount / 60);
  // const seconds = secondsCount % 60;

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🥈";
  if (percentage >= 60 && percentage < 80) emoji = "🥉";
  if (percentage < 60) emoji = "💩";
  if (percentage === 0) emoji = "💀";
  return (
    <div className={styles.container}>
      <p className={styles.results}>
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
        {maxPossiblePoints} ({Math.ceil(percentage)})%
      </p>
      <p className={styles.highscore}>Highscore: {highscore} points</p>
      <p>
        Time elapsed: {Math.floor(secondsCount / 60)}:
        {secondsCount % 60 < 10 && "0"}
        {secondsCount % 60}
      </p>
      <p>
        Fastest Record: {Math.floor(record / 60)}:{record % 60 < 10 && "0"}
        {record % 60}
      </p>
      <div className={styles.buttonGroup}>
        <button onClick={() => dispatch({ type: "restart" })}>Restart</button>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
}

export default FinishedScreen;
