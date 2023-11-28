import styles from "./ExerciseNav.module.css";
import { NavLink } from "react-router-dom";

function ExerciseNav() {
  return (
    <div className={styles.sidebar}>
      <NavLink to="/exercises">
        <h1>Exercises</h1>
      </NavLink>
      <ul>
        <h2>Basics</h2>
        <NavLink to="notes">
          <li>Notes</li>
        </NavLink>
        <NavLink to="thestaff">
          <li>Rhythms</li>
        </NavLink>
      </ul>
      <div className={styles.strip}></div>
      <ul>
        <h2>Structure</h2>
        <NavLink to="intervals">
          <li>Intervals</li>
        </NavLink>
        <NavLink to="chords">
          <li>Chords</li>
        </NavLink>
        <NavLink to="scales">
          <li>Scales</li>
        </NavLink>
        <NavLink to="keys">
          <li>Key signatures</li>
        </NavLink>
      </ul>
    </div>
  );
}

export default ExerciseNav;
