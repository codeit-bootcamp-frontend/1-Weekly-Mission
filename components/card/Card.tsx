import styles from "./Card.module.css";

interface CardProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export default function Card({ onClick, children }: CardProps) {
  return (
    <div className={styles.container} onClick={onClick}>
      {children}
    </div>
  );
}
