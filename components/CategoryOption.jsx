import CategoryOptionBtn from "./CategoryOptionBtn";
import shareImg from "../assets/images/share.svg";
import changNameImg from "../assets/images/pen.svg";
import deleteImg from "../assets/images/Group 36.svg";
import styles from "styles/CategoryOption.module.css";

const BTN_DATA = [
  {
    id: "1",
    name: "공유",
    imgSrc: shareImg,
  },
  {
    id: "2",
    name: "이름 변경",
    imgSrc: changNameImg,
  },
  {
    id: "3",
    name: "삭제",
    imgSrc: deleteImg,
  },
];

function CategoryOption({ selectedFolder, onClick }) {
  return (
    <div className={styles.categoryOption}>
      <h1 className={styles.categoryOptionTitle}>{selectedFolder || "전체"}</h1>
      <div className={styles.categoryOptionBtns}>
        {selectedFolder &&
          selectedFolder !== "전체" &&
          BTN_DATA.map((btn) => (
            <CategoryOptionBtn btnData={btn} key={btn.id} onClick={onClick} />
          ))}
      </div>
    </div>
  );
}

export default CategoryOption;
