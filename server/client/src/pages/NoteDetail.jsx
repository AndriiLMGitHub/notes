import { Link, useParams } from "react-router-dom";
import { MainTitle } from "../components/MainTitle";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import api from "../api";

export const NoteDetail = () => {
  const [note, setNote] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  const detailNote = async (id) => {
    try {
      setLoading(true);
      const response = await api.get(`/notes/${id}`);
      if (response.status === 200) {
        setNote(response.data);
        setLoading(false);
        toast.success("Note fetched successfully");
      }
    } catch (error) {
      setError(error);
      toast.error(`Something went wrong with ${error.message}`);
      setLoading(false);
    }
  };

  useEffect(() => {
    detailNote(id);
  }, []);

  return (
    <>
      <div class="px-4 py-5 my-5 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="96"
          height="96"
          fill="currentColor"
          className="bi bi-ticket-detailed"
          viewBox="0 0 16 16"
        >
          <path d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M5 7a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2z" />
          <path d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a.5.5 0 0 1 .5-.5 1.5 1.5 0 1 0 0-3A.5.5 0 0 1 0 6zM1.5 4a.5.5 0 0 0-.5.5v1.05a2.5 2.5 0 0 1 0 4.9v1.05a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-1.05a2.5 2.5 0 0 1 0-4.9V4.5a.5.5 0 0 0-.5-.5z" />
        </svg>
        <MainTitle text="Detail" />
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">{note.title}</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link to="/" className="btn btn-primary px-4 gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-house-check me-2"
                viewBox="0 0 16 16"
              >
                <path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.708L8 2.207l-5 5V13.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 2 13.5V8.207l-.646.647a.5.5 0 1 1-.708-.708z" />
                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.707l.547.547 1.17-1.951a.5.5 0 1 1 .858.514" />
              </svg>
              Get home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
