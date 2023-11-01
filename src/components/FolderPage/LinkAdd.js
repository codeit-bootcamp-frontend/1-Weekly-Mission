import "./LinkAdd.css";

function LinkAdd() {
  return (
    <div className="wrapper">
      <div className="linkAddInputContainer">
        <input
          className="linkAddInput"
          type="text"
          placeholder="🔗  링크를 추가해 보세요"
        ></input>
        <button className="linkAddBtn">추가하기</button>
      </div>
    </div>
  );
}

export default LinkAdd;
