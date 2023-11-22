import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="page-not-found">
      <div>
        <p className="notfound-text">🚫 Page not Found</p>
        <Link to="/" replace>
          &larr; Go back
        </Link>
      </div>
    </div>
  );
}
