import styles from "./Notes.module.css";
import { BasicPiano } from "../piano/Piano";

function Notes() {
  return (
    <div className={styles.notes}>
      <h1>Notes</h1>
      <p>
        In classical and popular music, especially from the Western world, there
        are twelve different notes. Seven of these notes are called the natural
        notes and they are represented by the white keys on the piano. The black
        keys on the piano represent the remaining five notes.
      </p>

      <h2>
        <strong>1. Natural Notes</strong>
      </h2>
      <p>
        The natural notes are named after the first seven letters of the
        alphabet. Their names are A, B, C, D, E, F, and G. The names of the
        notes are always capitalized. The piano is a helpful aid because it
        provides a visual overview of the notes. Below is a section of piano
        keys labeled with their corresponding notes. The starting point is
        usually based on the note C. This is also the case on the piano
      </p>
      <p>Click on the piano to listen to the notes.</p>
      <BasicPiano />
      <br />
      <p>
        The black keys are arranged in alternating groups of two and three. The
        note C is always on the white key to the left of the group of two black
        keys. Each note is in several places on the piano; the further to the
        right a note is located, the higher it is, and the further to the left,
        the lower it is.
      </p>
      <h2>
        <strong>2. Middle C</strong>
      </h2>
      <p>
        The middlemost C on the piano is called middle C. On a standard piano
        with 88 keys, middle C is the fourth C from the left.{" "}
      </p>
      <p>
        In the piano below, it is the note tied to <strong>"I"</strong> on the
        keyboard. Press <strong>"I"</strong> or Click on the piano to hear the
        note:
      </p>
      <BasicPiano />
      <br />
      <p>
        Middle C is an essential reference point. The specific high or low
        version of a note you play is important, and using middle C as the
        reference point, makes it easier to play the right version of the note.
      </p>
      <h2>
        <strong>3. Octaves</strong>
      </h2>
      <p>
        A standard piano with 88 keys has seven to eight versions of each note.
        The distance from any note to the nearest lower or higher version of the
        same note is called an octave:
      </p>
      <p>
        In the piano below, it is the distance from <strong>"Q"</strong> to{" "}
        <strong>"I"</strong> on the keyboard, which are both C. Press the
        shortcut keys or click on the piano to hear the note:
      </p>
      <BasicPiano />
      <br />
      <p>
        Usually, a note is referred to with the same name, regardless of whether
        it is low or high. However, there is a system for naming low and high
        notes that can be used if you need to distinguish between them. In this
        system, a number is added after the name of the note corresponding to
        the octave number in which the note falls.
      </p>
      <p>
        Each octave, starting from the note C, has a number. The octave of the
        lowest C on the piano has number 1, while the octave of the highest C
        has number 8. All notes from C up to the next octave have the same
        number (e.g., C1, D1, E1, F1, G1, A1 og B1). These are the most common
        octaves and their numbers:
      </p>
      <p>TO ADD TABLE</p>
      <h2>
        <strong>4. Half steps and whole steps</strong>
      </h2>
      <p>
        The distance between each of the twelve different notes is called a half
        step, or, a semitone. That is, the distance from any white or black key
        on the piano to the key immediately to its right or left, is a half
        step.
      </p>
      <p>
        The distance between the natural notes E and F and the natural notes B
        and C is a half step (1), while the distance between all other keys is
        two half steps (2):
      </p>
      <BasicPiano />
      <br />
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2
      </p>
      <p>
        The distance of two half steps is also called a whole step or a whole
        tone.
      </p>
    </div>
  );
}

export default Notes;
