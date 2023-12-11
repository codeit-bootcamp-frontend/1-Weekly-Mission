import Image from "next/image";
import styles from "styles/CategoryOptionBtn.module.css";

function CategoryOptionBtn({ btnData, onClick }) {
  function handleCategoryOption() {
    switch (btnData.name) {
      case "공유":
        onClick({
          show: true,
          modalTitle: "폴더 추가",
        });
        break;
      case "이름 변경":
        onClick({
          show: true,
          modalTitle: "폴더 이름 변경",
        });
        break;
      case "삭제":
        onClick({
          show: true,
          modalTitle: "폴더 삭제",
        });
        break;
      default:
        alert("잘못된 접근입니다.");
    }
  }
  return (
    <div className={styles.folderOptionBox}>
      <button onClick={handleCategoryOption} className={styles.folderOptionBtn}>
        <Image src={btnData.imgSrc} alt={`${btnData.name} 이미지`} />
        {btnData.name}
      </button>
    </div>
  );
}

export default CategoryOptionBtn;
