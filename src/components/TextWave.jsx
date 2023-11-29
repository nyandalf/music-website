import styles from "./TextWave.module.css";
function TextWave({ text }) {
  const textArray = text.split("");
  return (
    <div className={styles.wave} style={{ whiteSpace: "pre" }}>
      {textArray.map((letter, index) => (
        <span style={{ "--i": index }}>{letter}</span>
      ))}
      {/* <span style={{ "--i": "1" }}>L</span>
      <span style={{ "--i": "2" }}>o</span>
      <span style={{ "--i": "3" }}>a</span>
      <span style={{ "--i": "4" }}>d</span>
      <span style={{ "--i": "5" }}>i</span>
      <span style={{ "--i": "6" }}>n</span>
      <span style={{ "--i": "7" }}>g</span>
      <span style={{ "--i": "8" }}>.</span>
      <span style={{ "--i": "9" }}>.</span>
      <span style={{ "--i": "10" }}>.</span> */}
    </div>
  );
}

export default TextWave;
