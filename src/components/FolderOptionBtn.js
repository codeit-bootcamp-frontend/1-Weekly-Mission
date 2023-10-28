import "./FolderOptionBtn.css";

function FolderOptionBtn({ btnData }) {
  return (
    <div className="folder-option-btn">
      <a>
        <img
          className="folder-option-btn-img"
          src={btnData.imgSrc}
          alt={`${btnData.name} 이미지`}
        />
        {btnData.name}
      </a>
    </div>
  );
}

export default FolderOptionBtn;
