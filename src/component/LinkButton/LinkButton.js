import css from "./LinkButton.module.css";
import { Link } from "react-router-dom";
export function LinkButton({ url, type, text }) {
  return (
    <Link to={url} className={css[type]}>
      {text}
    </Link>
  );
}
