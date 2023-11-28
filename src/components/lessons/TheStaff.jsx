import { Notation, Midi } from "react-abc";
import styles from "./Notes.module.css";

function TheStaff() {
  //   const abcNotation = "X:1\nM:4/4 \nK:G\n|:GABc dedB";
  const abcNotation =
    "X:1\nK:clef=none\n xy! xy! xy! xy! xy! xy! xy! xy! xy! xy! xy!";

  return (
    <div className={styles.notes}>
      <h1>The Staff</h1>
      <p>
        A staff (also called a stave) is a collection of five horizontal lines
        used for music notation. Notes can be written on the lines and in
        between the spaces. The plural form of both staff and stave is staves.
      </p>
      <h2>
        <strong>1. Staff positions</strong>
      </h2>
      <p>A staff consists of five horizontal lines and four spaces:</p>
      <div className={styles.container}>
        <Notation notation={abcNotation} />
      </div>
      <p>
        Notes can be written on the lines and in between the spaces. When a note
        is written on a line, the line passes through the center of the note and
        when a note is written in a space, the note fills the entire space:
      </p>
      <p>
        Each note on the staff represents a natural note. The higher a note is
        located, the higher the pitch, and the lower a note is located, the
        lower the pitch.
      </p>
      <p>
        Notes are read from left to right. That is, the notes on the left are
        played before the notes on the right. Notes written above each other are
        played at the same time:
      </p>
      <h2>
        <strong>2. Ledger lines</strong>
      </h2>
      <p>
        Notes can be written above and below the staff using ledger lines.
        Ledger lines are short lines that extend the staff when notes are too
        high or low to write on the staff itself:
      </p>
      <p>
        You can use as many ledger lines as you need. Notes located just above
        and below the staff are written without ledger lines.
      </p>
      <h2>
        <strong>3. Lines and spaces</strong>
      </h2>
      <p>
        The lines and spaces of the staff are counted from bottom to top. For
        example, the 1st line is the bottom line, while the 5th line is the top
        line:
      </p>
      <img src="/MusicStaffNumbers.png" alt="" srcset="" />
    </div>
  );
}

export default TheStaff;
