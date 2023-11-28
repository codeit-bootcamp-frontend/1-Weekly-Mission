import styles from "./SnsSign.module.scss";
import { ReactComponent as GoogleIcon } from "src/assets/icons/google-sign-icon.svg";
import { ReactComponent as KakaoIcon } from "src/assets/icons/kakao-sign-icon.svg";

function SnsSign({ label = "" }) {
  return (
    <div className={styles["container"]}>
      <div className={styles["text-container"]}>{label}</div>
      <div className={styles["sns-container"]}>
        <button>
          <GoogleIcon />
        </button>
        <button>
          <KakaoIcon />
        </button>
      </div>
    </div>
  );
}

export default SnsSign;
