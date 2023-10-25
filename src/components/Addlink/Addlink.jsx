import Button from "../Button/Button";
import IMAGES from "../../assets/images";

import styles from "./Addlink.module.css";

const Addlink = () => {
  return (
    <div className={styles.addlinkBox}>
      <div className={styles.addlinkInput}>
        <div className={styles.addlinkInnerInput}>
          <img className={styles.addlinkImage} src={IMAGES.link} alt="Link" />
          <div className={styles.addlinkContent}></div>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Addlink;
