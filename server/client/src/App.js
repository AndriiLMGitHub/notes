import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { CreateNote } from "./pages/CreateNote";
import { Wrapper } from "./pages/Wrapper";
import { NoteDetail } from "./pages/NoteDetail";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Wrapper />}>
          <Route path="/" element={<Home />} />
          <Route path="/create-note" element={<CreateNote />} />
          <Route path="/notes/:id/" element={<NoteDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
