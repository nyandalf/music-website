import { BrowserRouter, Route, Routes } from "react-router-dom";

import Lessons from "./pages/Lessons";
import Exercises from "./pages/Exercises";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import Notes from "./components/lessons/Notes";
import TheStaff from "./components/lessons/TheStaff";
import Clefs from "./components/lessons/Clefs";
import Accidentals from "./components/lessons/Accidentals";
import Intervals from "./components/lessons/Intervals";
import Chords from "./components/lessons/Chords";
import Scales from "./components/lessons/Scales";
import Keys from "./components/lessons/Keys";
import NotesExercise from "./components/exercises/Notes/NotesExercise";
import NotesExerciseList from "./components/exercises/NotesExerciseList";
import IntervalsExerciseList from "./components/exercises/IntervalsExerciseList";
import ChordsExerciseList from "./components/exercises/ChordsExerciseList";
import ScalesExerciseList from "./components/exercises/ScalesExerciseList";
import KeysExerciseList from "./components/exercises/KeysExerciseList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          {/* Index is the default route  */}
          <Route path="lessons" element={<Lessons />}>
            <Route path="notes" element={<Notes />} />
            <Route path="thestaff" element={<TheStaff />} />
            <Route path="clefs" element={<Clefs />} />
            <Route path="accidentals" element={<Accidentals />} />
            <Route path="intervals" element={<Intervals />} />
            <Route path="chords" element={<Chords />} />
            <Route path="scales" element={<Scales />} />
            <Route path="keys" element={<Keys />} />
          </Route>
          <Route path="exercises" element={<Exercises />}>
            <Route path="notes" element={<NotesExerciseList />} />
            <Route path="notes/:id" element={<NotesExercise />} />
            <Route path="intervals" element={<IntervalsExerciseList />} />
            <Route path="intervals/:id" element={<NotesExercise />} />
            <Route path="chords" element={<ChordsExerciseList />} />
            <Route path="chords/:id" element={<NotesExercise />} />
            <Route path="scales" element={<ScalesExerciseList />} />
            <Route path="scales/:id" element={<NotesExercise />} />
            <Route path="keys" element={<KeysExerciseList />} />
            <Route path="keys/:id" element={<NotesExercise />} />
          </Route>
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
