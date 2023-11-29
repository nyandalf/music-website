import PageNav from "../components/PageNav";
import styles from "./Signup.module.css";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [_, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3001/auth/login",
        {
          username,
          password,
        },
        {
          validateStatus: (status) => status < 500, // Resolve only if the status code is less than 500
        }
      );
      if (res.status === 400) {
        setError(res.data.message);
        console.log(res.data.message);
        console.log(error);
      } else {
        setCookies("access_token", res.data.token);
        window.localStorage.setItem("userID", res.data.userID);
        window.localStorage.setItem("username", res.data.username);
        window.localStorage.setItem(
          "finishedQuizzes",
          JSON.stringify(res.data.finishedQuizzes)
        );
        navigate(-1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className={styles.login}>
      <PageNav />
      <form className={styles.form} onSubmit={onSubmit}>
        <div className={styles.row}>
          <label htmlFor="username">Username</label>
          <input
            type="test"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </main>
  );
}
