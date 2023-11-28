import styles from "./LessonNav.module.css";
import { NavLink } from "react-router-dom";

function LessonNav() {
  return (
    <div className={styles.sidebar}>
      <h1>Lessons</h1>
      <ul>
        <h2>Pitch</h2>
        <NavLink to="notes">
          <li>Notes</li>
        </NavLink>
        <NavLink to="thestaff">
          <li>The Staff</li>
        </NavLink>
        <NavLink to="clefs">
          <li>Clefs</li>
        </NavLink>
        <NavLink to="accidentals">
          <li>Accidentals</li>
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
          <li>Keys</li>
        </NavLink>
      </ul>
    </div>
  );
}

export default LessonNav;
