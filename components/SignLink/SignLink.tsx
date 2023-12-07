import Link from "next/link";
import styles from "./SignLink.module.css";
import { ReactNode } from "react";

interface Props {
  to: string;
  subtitle: string;
  children: ReactNode;
}

function SignLink({ to, subtitle, children }: Props) {
  return (
    <div className={styles.subtitle}>
      <p>{subtitle}</p>
      <Link className={styles.textLink} href={to} title={to}>
        {children}
      </Link>
    </div>
  );
}

export default SignLink;
