import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import styles from "./PageNav.module.css";
import { useCookies } from "react-cookie";

function PageNav() {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
  };
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/lessons">Lessons</NavLink>
        </li>
        <li>
          <NavLink to="/exercises">Exercises</NavLink>
        </li>
        {!cookies.access_token ? (
          <>
            <li>
              <NavLink to="/signup" className={styles.ctaLink}>
                Signup
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className={styles.ctaLink}>
                Login
              </NavLink>
            </li>
          </>
        ) : (
          <li>
            <button onClick={logout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default PageNav;
