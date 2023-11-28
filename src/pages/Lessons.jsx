// Uses the same styles as Product
import { Outlet, useLocation } from "react-router-dom";
import PageNav from "../components/PageNav";
import LessonNav from "../components/lessons/LessonNav";
import styles from "./Lessons.module.css";
import Cards from "../components/lessons/Cards";

export default function Lessons() {
  const location = useLocation();
  const { pathname } = location;
  const isOneSubPath = pathname.split("/").length === 2;
  return (
    <main className={styles.lessons}>
      <PageNav />
      <section>
        <LessonNav />
        <Outlet />
        {isOneSubPath && <Cards />}
      </section>
    </main>
  );
}
