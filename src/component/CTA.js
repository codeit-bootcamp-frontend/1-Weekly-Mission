import styles from "../assets/css/CTA.module.css";

function CTA({ href, children }) {
  return (
    <a className={styles.cta} href={href}>
      {children}
    </a>
  );
}

export default CTA;
