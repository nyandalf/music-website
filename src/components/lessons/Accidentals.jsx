import styles from "./Notes.module.css";

function Accidentals() {
  return (
    <div className={styles.notes}>
      <h1>Accidentals</h1>
      <p>
        An accidental is a symbol in music notation that raises or lowers a
        natural note by one or two half steps. The accidental changes the pitch,
        so that the note is either higher or lower than the original natural
        note. Accidentals are written in front of the notes, but in text,
        accidentals are written after the note names.
      </p>
      <h2>
        <strong>1. Different types of accidentals</strong>
      </h2>
      <p>There are five different accidentals:</p>
      <p>
        ♯ A sharp raises a note by a half step. Instead of the original note,
        you should play the note that is a half step above (on the right of the
        piano).
      </p>
      <p>
        ♭ A flat lowers a note by a half step. Instead of the original note, you
        should play the note that is a half step below (on the left of the
        piano).
      </p>
      <p>
        &#x1D12A; A double-sharp raises a note by two half steps. Instead of the
        original note, you should play the note that is two half steps above (on
        the right of the piano).
      </p>
      <p>
        ♭♭ A double-flat lowers a note by two half steps. Instead of the
        original note, you should play the note that is two half steps below (on
        the left of the piano).
      </p>
      <p>♮ A natural cancels the effect of another accidental.</p>
      <h2>
        <strong>2. Accidental notes</strong>
      </h2>
      <p>
        A note with a sharp (♯) is played a half step above the original note.
        The seven sharp notes are C♯ (pronounced "C-sharp"), D♯, E♯, F♯, G♯, A♯,
        and B♯:
      </p>
      <p>
        A note with a flat (♭) is played a half step below the original note.
        The seven flat notes are C♭ (pronounced "C-flat"), D♭, E♭, F♭, G♭, A♭,
        and B♭:
      </p>
      <p>
        The same concept also applies to double-sharps (&#x1D12A;) and
        double-flats (♭♭)
      </p>
      <img src="/Accidentals.gif" alt="" />
    </div>
  );
}

export default Accidentals;
