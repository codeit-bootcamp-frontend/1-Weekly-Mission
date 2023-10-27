import './FunctionButton.css';

function FunctionButton() {
  return (
    <div className="function-button-Wrapper">
      <button className="share-button">공유</button>
      <button className="name-button">이름 변경</button>
      <button className="delete-button">삭제</button>
    </div>
  );
}

export default FunctionButton;
