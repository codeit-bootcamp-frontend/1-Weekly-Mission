import css from "./LinkButton.module.css";
import Link from "next/link";

interface Props {
  url: string;
  type: string;
  text: string;
}
export function LinkButton({ url, type, text }: Props) {
  return (
    <Link href={url} className={css[type]}>
      {text}
    </Link>
  );
}
