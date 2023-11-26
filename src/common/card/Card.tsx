import styles from "./Card.module.css";

interface CardProps {
  // div태그에서 onClick를 사용하기 때문에 HTMLDivElement로 주어야 한다. c
  onClick: React.MouseEventHandler<HTMLDivElement>;
  children: React.ReactNode;
}

export default function Card({ onClick, children }: CardProps): JSX.Element {
  return (
    <div className={styles.container} onClick={onClick}>
      {children}
    </div>
  );
}
