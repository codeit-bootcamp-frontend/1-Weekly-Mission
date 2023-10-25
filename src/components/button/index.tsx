import { Link } from "react-router-dom";
import styles from "styles/modules/button.module.css";

interface Props {
  content: string;
  link: string;
}

function Button({ content, link }: Props) {
  return (
    <div className={styles.wrapper}>
      <Link to={link} className={styles.text}>
        {content}
      </Link>
    </div>
  );
}

export default Button;
