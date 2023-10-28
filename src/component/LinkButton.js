import css from "./LinkButton.module.css";

export function LinkButton({ type, text }) {
  return <a className={css[type]}>{text}</a>;
}
