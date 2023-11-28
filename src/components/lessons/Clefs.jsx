import { Notation, Midi } from "react-abc";
import styles from "./Notes.module.css";

function Clefs() {
  const abcNotation = "X:1\nM:4/4 \nK:C \nG8 C8|";
  return (
    <div className={styles.notes}>
      <h1>Clefs</h1>
      <p>
        A clef is a symbol at the beginning of the staff that specifies the
        pitch of the notes on the staff. Different clefs are used, each with its
        own note as a starting point, so you can write low and high notes using
        the fewest possible ledger lines, thus making the notes easier to read.
      </p>
      <h2>
        <strong>1. Treble clef</strong>
      </h2>
      <p>
        The treble clef (also called the G clef) indicates that the note G above
        middle C falls on the second line of the staff. The treble clef curls
        around the line where G falls:
      </p>
      <div className={styles.container}>
        <Notation notation={abcNotation} />
      </div>
      <p>
        Below, the notes in the treble clef are compared to the notes on the
        piano. Notice the positions of the notes C and G on the staff.
        Remembering the positions of C and G make it easier to read the other
        notes on the staff:
      </p>
      <div className={styles.container}>
        <img src="/Treble.svg" alt="" srcset="" />
      </div>
      <p>
        The treble clef is useful for writing notes above middle C. The treble
        clef is used in song books and for high-pitched instruments such as
        guitar, violin, flute, clarinet, saxophone, and trumpet.
      </p>
      <h2>
        <strong>2.Bass Clef</strong>
      </h2>
      <p>
        The bass clef (also called the F clef) indicates that the note F below
        middle C falls on the fourth line of the staff. The bass clef's two dots
        surround the line where F falls:
      </p>
      <div className={styles.container}>
        <Notation notation={abcNotation} />
      </div>
      <p>
        Below, the notes in the bass clef are compared to the notes on the
        piano. Notice the positions of the notes C and F on the staff.
        Remembering the positions of C and F make it easier to read the other
        notes on the staff:
      </p>
      <div className={styles.container}>
        <img src="/Bass.svg" alt="" srcset="" />
      </div>
      <p>
        The bass clef is useful for writing notes below middle C. The clef is
        used for low-pitched instruments such as bass guitar, double bass,
        cello, bassoon, trombone, and tuba.
      </p>
      <h2>
        <strong>3. Grand Staff</strong>
      </h2>
      <p>
        The grand staff is a combination of two staves with the treble clef in
        the upper staff and the bass clef in the lower staff. The staves are
        connected by a vertical line and a brace at the left side:
      </p>
      <div className={styles.container}>
        <Notation notation={abcNotation} />
      </div>
      <p>
        Middle C falls between the two staves and is written on the first ledger
        line below the upper staff or the first ledger line of the lowermost
        staff. Notice the symmetrical position of the different versions of the
        note C. Remembering their positions make it easier to read the other
        notes on the staff:
      </p>
      <div className={styles.container}>
        <Notation notation={abcNotation} />
      </div>
      <p>
        Below, the notes of the grand staff are compared to the notes on the
        piano. The notes located around middle C can be written in both the
        upper and lower staff using one or more ledger lines:
      </p>
      <div className={styles.container}>
        <img src="/Grand.svg" alt="" srcset="" />
      </div>
    </div>
  );
}

export default Clefs;
