import { useEffect } from "react";
import styles from "./TextWobble.module.css";

function TextWobble({ text }) {
  return (
    <div>
      <p className={styles["wiggle-text"]}>{text}</p>
    </div>
  );
}

export default TextWobble;
