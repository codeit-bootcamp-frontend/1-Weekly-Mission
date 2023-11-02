import './LinkAdd.css';

function LinkAdd({ onClick }) {
  return (
    <div className="intro-Wrapper">
      <input className="linkadd-input" placeholder="링크를 추가해 보세요" />
      <button className="add-button" onClick={onClick} value="add">
        추가하기
      </button>
    </div>
  );
}

export default LinkAdd;
