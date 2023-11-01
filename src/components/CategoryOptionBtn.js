import "./CategoryOptionBtn.css";
// btnData

function CategoryOptionBtn({ btnData }) {
  return (
    <div className="folder-option-box">
      <button className="folder-option-btn">
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
