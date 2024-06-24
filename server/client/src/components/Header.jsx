import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">
            <Link
              to="/"
              className="d-inline-flex link-body-emphasis text-decoration-none"
            >
              Note App
            </Link>
          </div>
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/" className="nav-link px-2 link-secondary">
                Notes
              </Link>
            </li>
            <li>
              <Link to="/create-note" className="nav-link px-2 link-secondary">
                Create note
              </Link>
            </li>
          </ul>
          <div class="col-md-3 text-end">
            <Link to="/login" class="btn btn-outline-primary me-2">
              Login
            </Link>
            <Link to="/register" class="btn btn-primary">
              Sign-up
            </Link>
          </div>
        </header>
      </div>
    </>
  );
};
