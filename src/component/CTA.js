import styles from "../assets/css/CTA.module.css";

function CTA({ href, children }) {
  return (
    <button className={styles.cta} href={href}>
      {children}
    </button>
  );
}

export default CTA;
