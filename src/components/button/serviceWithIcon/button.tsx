import styles from "styles/modules/serviceWithIcon.module.css";

interface Props {
  img: string;
  title: string;
}

function Button({ img, title }: Props) {
  return (
    <div className={styles.wrapper}>
      <img src={img} alt={title} className={styles.icon} />
      <span className={styles.title}>{title}</span>
    </div>
  );
}

export default Button;
