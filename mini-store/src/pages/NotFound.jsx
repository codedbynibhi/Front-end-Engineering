import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="empty-state">
      <h1 className="big-404">404</h1>
      <p className="empty">Oops! The page you are looking for doesn't exist.</p>
      <Link to="/" className="btn btn-primary">
        Go to Home
      </Link>
    </section>
  );
}
