import { Notation, Midi } from "react-abc";
import styles from "./Notes.module.css";

function Intervals() {
  const notation1a = "X:1\nM:4/4 \nK:C \n[F8 A8] D8 B8 F8 |";
  const notation1b =
    "X:1\nM:4/4 \nK:C \n[C8 G8] [C8 D8] | \nw: consonant dissonant \nw: interval interval";
  const notation3 = "X:1\nM:4/4 \nK:C \n[E8 G8] [E8 ^G8] |";
  return (
    <div className={styles.notes}>
      <h1>Intevals</h1>
      <p>
        An interval is the distance between two notes. Almost all music is
        created by using notes at different distances and thus different sizes
        of intervals. The notes in an interval may be played simultaneously,
        which is the case in chords, or played successively, which is the case
        in melodies.
      </p>
      <h2>
        <strong>1. Types of Intervals</strong>
      </h2>
      <p>
        Intervals can be harmonic or melodic. When the notes are played
        simultaneously, it is a harmonic interval. When the notes are played in
        sequence, it is a melodic interval. Melodic intervals can be ascending
        or descending:
      </p>
      <div className={styles.container}>
        <Notation notation={notation1a} />
      </div>
      <p>
        Intervals can be consonant or dissonant. If the notes sound pleasant and
        relaxed, the interval is a consonant interval. If the notes sound
        unpleasant and tense, the interval is a dissonant interval:
      </p>
      <div className={styles.container}>
        <Notation notation={notation1b} />
      </div>
      <h2>
        <strong>2. Interval numbers</strong>
      </h2>
      <p>
        The intervals are named after the number of degrees between the notes.
        It is the number of degrees alone, and not the specific notes that
        determine the numbers. The table below lists the interval names and
        degrees.
      </p>
      <p>INSERT TABLE HERE</p>
      <p>
        The list continues with the ninth, tenth, eleventh, twelfth, thirteenth,
        fourteenth, and fifteenth intervals, but they are rarely used.
      </p>
      <p>
        To find the number of an interval, count the number of degrees between
        the notes, including both notes. Each natural note (C, D, E, F, G, A,
        and B) with or without accidental represents a degree. Each line and
        space on the staff also represent a degree.{" "}
      </p>
      <p>
        For example, there are five degrees between the notes D and A,
        therefore, it is a fifth. There are three degrees between the notes E♭
        and C, therefore it is a third:
      </p>
      <h2>
        <strong>3. Interval qualities</strong>
      </h2>
      <p>
        The exact distance between the notes in an interval with the same number
        may vary. An example is the two different versions of a third found
        below. They have the same number, but the first third is a half step
        smaller than the second third:
      </p>
      <div className={styles.container}>
        <Notation notation={notation3} />
      </div>
      <p>
        To specify the exact distance between the notes in an interval, a
        quality is added to the interval number. There are five different
        interval qualities:
      </p>
      <ul>
        <li>Perfect intervals</li>
        <li>Minor intervals</li>
        <li>Major intervals</li>
        <li>Diminished intervals</li>
        <li>Augmented intervals</li>
      </ul>
      <p>
        As a general rule, the intervals unison, fourth, fifth, and octave are
        only found in one quality. They are always perfect. As a general rule,
        the second, third, sixth, and seventh are found in two qualities. They
        are either minor or major. In rare cases, all intervals can be
        diminished and augmented
      </p>
    </div>
  );
}

export default Intervals;
