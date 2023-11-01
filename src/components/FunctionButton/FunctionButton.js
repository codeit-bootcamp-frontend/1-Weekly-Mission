import './FunctionButton.css';

function FunctionButton({ onClick }) {
  return (
    <div className="function-button-Wrapper">
      <button className="share-button" onClick={onClick}>
        공유
      </button>
      <button className="name-button" onClick={onClick}>
        이름 변경
      </button>
      <button className="delete-button" onClick={onClick}>
        삭제
      </button>
    </div>
  );
}

export default FunctionButton;
