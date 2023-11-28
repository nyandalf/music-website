import { useEffect } from "react";
import styles from "./Timer.module.css";

function Timer({ dispatch, secondsCount }) {
  const minutes = Math.floor(secondsCount / 60);
  const seconds = secondsCount % 60;
  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);
    return function () {
      clearInterval(id);
    };
    //Clear timer when component is gone. Works by assigning it to an ID and passing it in clearInterval()
  }, [dispatch]);
  return (
    <div className={styles.timer}>
      {minutes}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}

export default Timer;
