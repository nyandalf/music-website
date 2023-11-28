import Options from "./Options";
import styles from "./Question.module.css";
import { Notation } from "react-abc";

const majorKeys = [
  //C Major
  ["C", "D", "E", "F", "G", "A", "B", "c"],
  //C-sharp Major
  ["^C", "^D", "^E", "^F", "^G", "^A", "^B", "^c"],
  //D-flat Major
  ["_D", "_E", "F", "_G", "_A", "_B", "c", "_d"],
  //D major
  ["D", "E", "^F", "G", "A", "B", "^c", "d"],
  //D# major
  ["^D", "^E", "^^F", "^G", "^A", "^B", "^^c", "^d"],
  //Eb major
  ["_E", "F", "G", "_A", "_B", "c", "d", "_e"],
  //E major
  ["E", "^F", "^G", "A", "B", "^c", "^d", "e"],
  //F major
  ["F", "G", "A", "_B", "c", "d", "e", "f"],
  //F# major
  ["^F", "^G", "^A", "B", "^c", "^d", "^e", "^f"],
  //Gb major
  ["_G", "_A", "_B", "_c", "_d", "_e", "f", "_g"],
  //G major
  ["G", "A", "B", "c", "d", "e", "^f", "g"],
  //G# major
  ["^G", "^A", "^B", "^c", "^d", "^e", "^^f", "^g"],
  //Ab major
  ["_A", "_B", "c", "d", "_e", "f", "g", "_a"],
  //A major
  ["A", "B", "^c", "d", "e", "^f", "^g", "a"],
  //A# major
  ["^A", "^B", "^^c", "^d", "^e", "^^f", "^^g", "^a"],
  //Bb major
  ["_B", "c", "d", "_e", "f", "g", "a", "_b"],
  //B major
  ["B", "^c", "^d", "e", "^f", "^g", "^a", "b"],
  //Cb major
  ["_C", "_D", "_E", "_F", "_G", "_A", "_B", "_c"],
];

function incrementLetter(letter, incrementBy) {
  // Convert the letter to its character code
  const charCode = letter.charCodeAt(0);
  // Increment the character code by the specified number and handle the wrap-around
  let newCharCode = charCode + incrementBy;

  // Check if the result is within the range of 'A' to 'G'
  if (newCharCode > 71) {
    // Wrap around to stay within the range
    newCharCode = ((newCharCode - 65) % 7) + 65;
    if (newCharCode <= 66) {
      //To account for B which is still in the same octave so we'll only move up an octave(lowercase) when it's greater than B
      const newLetter = String.fromCharCode(newCharCode);
      return newLetter;
    } else {
      const newLetter = String.fromCharCode(newCharCode).toLowerCase();
      return newLetter;
    }
  }
  // Convert the new character code back to a letter
  const newLetter = String.fromCharCode(newCharCode);
  return newLetter;
}

function firstIndexArrayNumber(letter, arrayOfArrays) {
  // Check if the letter is at the first index of any array
  for (let i = 0; i < arrayOfArrays.length; i++) {
    if (arrayOfArrays[i][0] === letter) {
      return i;
    }
  }
  // Return -1 if the letter is not at the first index of any array
  return -1;
}

function manipulateCharacterFlatten(character) {
  //We'll be flatting the middle note for a minor chord which means removing a sharp "^" or adding a flat "_" to the note.
  if (character.includes("^")) {
    //Remove a ^
    return character.slice(1);
  } else {
    // Add a _ otherwise
    return "_" + character;
  }
}

function chordGenerator(question) {
  if (question.answer === "MAJ") {
    let index = firstIndexArrayNumber(question.notes[0], majorKeys);
    let chord = [majorKeys[index][0], majorKeys[index][2], majorKeys[index][4]];
    console.log(chord);
    return chord;
  }
  if (question.answer === "MIN") {
    let index = firstIndexArrayNumber(question.notes[0], majorKeys);
    let middleNote = manipulateCharacterFlatten(majorKeys[index][2]);
    let chord = [majorKeys[index][0], middleNote, majorKeys[index][4]];
    console.log(chord);
    return chord;
  }
}

function scaleGenerator(question) {
  if (question.answer === "MAJ") {
    let index = firstIndexArrayNumber(question.notes[0], majorKeys);
    let scale = [
      majorKeys[index][0],
      majorKeys[index][1],
      majorKeys[index][2],
      majorKeys[index][3],
      majorKeys[index][4],
      majorKeys[index][5],
      majorKeys[index][6],
      majorKeys[index][7],
    ];
    return scale;
  } else if (question.answer === "MIN") {
    let index = firstIndexArrayNumber(question.notes[0], majorKeys);
    let degree3 = manipulateCharacterFlatten(majorKeys[index][2]);
    let degree6 = manipulateCharacterFlatten(majorKeys[index][5]);
    let degree7 = manipulateCharacterFlatten(majorKeys[index][6]);
    let scale = [
      majorKeys[index][0],
      majorKeys[index][1],
      degree3,
      majorKeys[index][3],
      majorKeys[index][4],
      degree6,
      degree7,
      majorKeys[index][7],
    ];
    return scale;
  }
}

function Question({
  shuffledQuestions,
  shuffledRootNotes,
  questionCount,
  options,
  index,
  type,
  clef,
  hasAnswered,
  dispatch,
}) {
  let notation;
  let rootNote;
  let middleNote;
  let upperNote;
  let scale;
  let chord;
  if (type === "interval") {
    rootNote = shuffledRootNotes[index];
    upperNote = incrementLetter(rootNote, Number(shuffledQuestions[index] - 1));
    notation = `X:1\nM:4/4 \nK:C \n [${rootNote}8${upperNote}8]|`;
  } else if (type === "intervalQuality") {
    rootNote = shuffledQuestions[index].notes[0];
    upperNote = shuffledQuestions[index].notes[1];
    notation = `X:1\nM:4/4 \nK:C \n [${rootNote}8${upperNote}8]|`;
  } else if (type === "chordQuality") {
    chord = chordGenerator(shuffledQuestions[index]);
    notation = `X:1\nM:4/4 \nK:C \n [${chord[0]}8${chord[1]}8${chord[2]}8]|`;
    // rootNote = shuffledQuestions[index].notes[0];
    // middleNote = shuffledQuestions[index].notes[1];
    // upperNote = shuffledQuestions[index].notes[2];
    // notation = `X:1\nM:4/4 \nK:C \n [${rootNote}8${middleNote}8${upperNote}8]|`;
  } else if (type === "scale") {
    scale = scaleGenerator(shuffledQuestions[index]);
    notation = `X:1\nM:4/4 \nK:C \n L:1/8 \n ${scale[0]}${scale[1]}${scale[2]}${scale[3]}${scale[4]}${scale[5]}${scale[6]}${scale[7]}|`;
  } else if (type === "key") {
    notation = `X:1\nM:4/4 \nK:${shuffledQuestions[index].answer} \n |`;
  } else if (clef === "treble" && type !== "interval") {
    notation = `X:1\nM:4/4 \nK:C \n ${shuffledQuestions[index]}8|`;
  } else if (clef === "bass") {
    notation = `X:1\nM:4/4 \nK:C clef=bass \n ${shuffledQuestions[index]}8|`;
  }

  return (
    <div className={styles.questions}>
      <div
        className={`${styles.container} ${type === "scale" && styles["scale"]}`}
      >
        <Notation notation={notation} />
      </div>
      <Options
        shuffledQuestions={shuffledQuestions}
        questionCount={questionCount}
        options={options}
        index={index}
        type={type}
        hasAnswered={hasAnswered}
        dispatch={dispatch}
      />
    </div>
  );
}

export default Question;
