import { useEffect, useReducer } from "react";
import Header from "./Header";
import Loader from "./Loader";
import Main from "./Main";
import StartScreen from "./StartScreen";
import Question from "./Question";
import FinishedScreen from "./FinishedScreen";
import Timer from "./Timer";
import { useParams } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import axios from "axios";

const initialState = {
  questions: [],
  status: "loading", //"loading", "error", "ready", "active", "finished" instead of individual boolean states
  index: 0,
  shuffledQuestions: [],
  shuffledRootNotes: [],
  answers: [],
  points: 0,
  highscore: 0,
  hasAnswered: false,
  secondsCount: 0,
  record: null,
};

function shuffleAndEnlargeArray(existingArray, newSize) {
  // Shuffle the existing array using the Fisher-Yates algorithm.
  if (existingArray) {
    const shuffledArray = [...existingArray];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }

    // Calculate the number of times to duplicate elements.
    const originalSize = shuffledArray.length;
    // const duplicationCount = Math.ceil(newSize / originalSize);

    // Create the enlarged array with random element duplications.
    const enlargedArray = [];
    for (let i = 0; i < newSize; i++) {
      const element = shuffledArray[i % originalSize];
      enlargedArray.push(element);
    }
    return enlargedArray;
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    // Swap array[i] and array[j]
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function addRandomLetter(bigArray, smallArray) {
  return bigArray.map((element) => {
    const randomIndex = Math.floor(Math.random() * smallArray.length);
    const randomLetter = smallArray[randomIndex];
    return randomLetter + element;
    //Adds random letter in front of elements in a big array. The letters are determined by the small array.
  });
}

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return {
        ...state,
        status: "active",
      };
    case "addQuestions":
      return {
        ...state,
        shuffledQuestions: action.payload,
      };
    case "addRootNotes":
      return {
        ...state,
        shuffledRootNotes: action.payload,
      };
    case "newAnswer":
      let correctAnswer = state.shuffledQuestions.some(
        (item) => typeof item === "object"
      )
        ? state.shuffledQuestions[state.index].answer
        : state.shuffledQuestions[state.index];
      if (!correctAnswer.includes("b")) {
        correctAnswer = correctAnswer.replace(/,/g, "").toUpperCase();
      } //This condition is to check answers in flat key signatures since I need the small b.

      return {
        ...state,
        answers: [...state.answers, action.payload],
        hasAnswered: true,
        points:
          action.payload === correctAnswer ? state.points + 1 : state.points,
      };
    case "nextQuestion":
      return { ...state, index: state.index + 1, hasAnswered: false };
    case "finish":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
        record:
          state.record === null
            ? state.secondsCount
            : state.secondsCount < state.record
            ? state.secondsCount
            : state.record,
      };
    case "restart":
      shuffleArray(state.shuffledQuestions);
      return {
        ...state,
        status: "ready",
        index: 0,
        shuffledQuestions: state.shuffledQuestions,
        answers: [],
        points: 0,
        hasAnswered: false,
        secondsCount: 0,
      };
    case "tick":
      return {
        ...state,
        secondsCount: state.secondsCount + 1,
      };
    default:
      throw new Error("Action unknown");
  }
}

function NotesExercise() {
  const [
    {
      questions,
      status,
      index,
      shuffledQuestions,
      shuffledRootNotes,
      answers,
      points,
      highscore,
      hasAnswered,
      secondsCount,
      record,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  const { id } = useParams();
  const accidentals = ["^", "_", ""];
  const accidental_sharp = ["^"];
  const accidental_flat = ["_"];
  let rootNotes = ["C", "D", "E", "F", "G"];
  shuffleArray(rootNotes);

  const maxPossiblePoints = questions?.questionCount;

  useEffect(() => {
    // async function fetchQuestions() {
    //   try {
    //     const response = await fetch(`http://localhost:9000/questions/${id}`);
    //     const data = await response.json();
    //     dispatch({ type: "dataReceived", payload: data });
    //   } catch (err) {
    //     console.log(err.message);
    //     dispatch({ type: "dataFailed" });
    //   }
    // }
    async function fetchQuestions() {
      try {
        const response = await axios.get("http://localhost:3001/questions");
        const data = await response.data[0].questions;
        const dataById = await data.find((item) => item.id === Number(id));
        dispatch({ type: "dataReceived", payload: dataById });
      } catch (err) {
        console.log(err.message);
        dispatch({ type: "dataFailed" });
      }
    }
    fetchQuestions();
  }, [id]);

  useEffect(
    function () {
      let shuffledQuestionPool = shuffleAndEnlargeArray(
        questions?.questionPool,
        questions?.questionCount
      );
      let shuffledRootNotes = shuffleAndEnlargeArray(
        rootNotes,
        questions?.questionCount
      );

      if (questions.type === "accidentals_sharp") {
        shuffledQuestionPool = addRandomLetter(
          shuffledQuestionPool,
          accidental_sharp
        );
      } else if (questions.type === "accidentals_flat") {
        shuffledQuestionPool = addRandomLetter(
          shuffledQuestionPool,
          accidental_flat
        );
      } else if (questions.type === "all_notes") {
        shuffledQuestionPool = addRandomLetter(
          shuffledQuestionPool,
          accidentals
        );
      }
      dispatch({
        type: "addQuestions",
        payload: shuffledQuestionPool,
      });
      dispatch({ type: "addRootNotes", payload: shuffledRootNotes });
    },
    [questions]
  );

  return (
    <Main>
      {status === "loading" && <Loader />}
      {status === "ready" && (
        <StartScreen
          questionCount={questions.questionCount}
          description={questions.description}
          dispatch={dispatch}
        />
      )}
      {status === "active" && (
        <>
          <Header>
            {questions.id < 2000
              ? "What is the note name?"
              : questions.id < 3000
              ? "What is the interval?"
              : questions.id < 4000
              ? "What is the chord?"
              : questions.id < 5000
              ? "What is the scale?"
              : shuffledQuestions[index].key === "major"
              ? "What major key is this?"
              : "What minor key is this?"}
          </Header>
          <ProgressBar
            shuffledQuestions={shuffledQuestions}
            questionCount={questions.questionCount}
            index={index}
            hasAnswered={hasAnswered}
            answers={answers}
          />
          <Question
            shuffledQuestions={shuffledQuestions}
            shuffledRootNotes={shuffledRootNotes}
            questionCount={questions.questionCount}
            options={questions.options}
            index={index}
            type={questions.type}
            clef={questions.clef}
            hasAnswered={hasAnswered}
            dispatch={dispatch}
          />
          <Timer dispatch={dispatch} secondsCount={secondsCount} />
        </>
      )}
      {status === "finished" && (
        <FinishedScreen
          dispatch={dispatch}
          points={points}
          maxPossiblePoints={maxPossiblePoints}
          highscore={highscore}
          secondsCount={secondsCount}
          record={record}
        />
      )}
    </Main>
  );
}

export default NotesExercise;
