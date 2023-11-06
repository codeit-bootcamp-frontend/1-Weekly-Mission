import "./CategoryOptionBtn.css";
// btnData

function CategoryOptionBtn({ btnData, onClick }) {
  function handleCategoryOption() {
    switch (btnData.name) {
      case "공유":
        onClick([true, "3"]);
        break;
      case "이름 변경":
        onClick([true, "2"]);
        break;
      case "삭제":
        onClick([true, "4"]);
        break;
      default:
        alert("잘못된 접근입니다.");
    }
  }
  return (
    <div className="folder-option-box">
      <button onClick={handleCategoryOption} className="folder-option-btn">
        <img
          className="folder-option-btn-img"
          src={btnData.imgSrc}
          alt={`${btnData.name} 이미지`}
        />
        {btnData.name}
      </button>
    </div>
  );
}

export default CategoryOptionBtn;
