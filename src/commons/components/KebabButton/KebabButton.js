import styles from "./KebabButton.module.scss";
import { ReactComponent as Kebab } from "assets/images/kebab.svg";
import Popover from "@mui/material/Popover";
import { useState } from "react";

function KebabMenu() {
  return (
    <div className={styles["kebab-menu"]}>
      <button className={styles["button"]}>삭제하기</button>
      <div className={styles["spacing-div"]}></div>
      <button className={styles["button"]}>폴더에 추가</button>
    </div>
  );
}

function KebabButton() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <button className={styles["kebab-button"]} onClick={handleClick}>
        <Kebab />
      </button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <KebabMenu />
      </Popover>
    </>
  );
}

export default KebabButton;
