import { Outlet, useLocation } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./Exercises.module.css";
import Cards from "../components/exercises/Cards";
import ExerciseNav from "../components/exercises/ExerciseNav";

function Exercises() {
  const location = useLocation();
  const { pathname } = location;
  const isOneSubPath = pathname.split("/").length === 2;
  return (
    <main className={styles.exercises}>
      <PageNav />
      <section>
        <ExerciseNav />
        <Outlet />
        {isOneSubPath && <Cards />}
      </section>
    </main>
  );
}

export default Exercises;
