import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
import PageNav from "../components/PageNav";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />
      <section>
        <h1>A fun way to learn music</h1>
        <h2>
          Note[something] provides lessons, exercises, and interactive tools
          that help you learn music. Learn the skills essential for
          understanding music, reading music, and playing an instrument.
        </h2>
        <Link to="/lessons" className="cta">
          Get Started!
        </Link>
      </section>
    </main>
  );
}
