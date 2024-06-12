import { useEffect, useState } from "react";
import { MainTitle } from "../components/MainTitle";
import api from "../api";
import toast from "react-hot-toast";
import { Loader } from "../components/Loader";
import { Link } from "react-router-dom";

export const Home = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      const response = await api.get("/notes/");
      if (response.status === 200) {
        setLoading(false);
        setNotes(response.data);
        toast.success("Notes fetched successfully");
      }
    } catch (error) {
      setError(error);
      toast.error(`Something went wrong with ${error.message}`);
      setLoading(false);
    }
  };

  const deleteNote = async (id) => {
    try {
      setLoading(true);
      const response = await api.delete(`/notes/${id}`);
      if (response.status === 204) {
        setLoading(false);
        setNotes(notes.filter((note) => note.id !== id));
        toast.success("Note deleted successfully");
      }
    } catch (error) {
      setError(error);
      toast.error(`Something went wrong with ${error.message}`);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <MainTitle text="Notes" />
      <div className="col-8 mx-auto">
        <div className="card">
          <ul className="list-group list-group-flush">
            {notes.length > 0 ? (
              notes.map((note) => (
                <li
                  className="list-group-item d-flex justify-content-between align-items-center"
                  key={note.id}
                  style={{ cursor: "pointer" }}
                >
                  <Link
                    to={`/notes/${note.id}`}
                    style={{ textDecoration: "none", color: "#6c757d" }}
                  >
                    {note.title}
                  </Link>

                  <button
                    className="float-end btn btn-danger btn-sm"
                    onClick={() => deleteNote(note.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-trash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                      <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                    </svg>
                  </button>
                </li>
              ))
            ) : (
              <li className="list-group-item d-flex justify-content-between align-items-center">
                No items yet!
                <Link to="/create-note" className="btn btn-success btn-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-folder-plus me-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="m.5 3 .04.87a2 2 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14H9v-1H2.826a1 1 0 0 1-.995-.91l-.637-7A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09L14.54 8h1.005l.256-2.819A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2m5.672-1a1 1 0 0 1 .707.293L7.586 3H2.19q-.362.002-.683.12L1.5 2.98a1 1 0 0 1 1-.98z" />
                    <path d="M13.5 9a.5.5 0 0 1 .5.5V11h1.5a.5.5 0 1 1 0 1H14v1.5a.5.5 0 1 1-1 0V12h-1.5a.5.5 0 0 1 0-1H13V9.5a.5.5 0 0 1 .5-.5" />
                  </svg>
                  Create note
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};
