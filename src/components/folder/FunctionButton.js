import shareImg from "../../image/share.svg";
import penImg from "../../image/pen.svg";
import deleteImg from "../../image/delete.svg";

const FunctionButton = () => {
  return (
    <div className="function_buttons">
      <button className="function_button">
        <img className="function_button_img" src={shareImg} alt="공유 버튼" />
        <span className="function_button_msg">공유</span>
      </button>
      <button className="function_button">
        <img
          className="function_button_img"
          src={penImg}
          alt="이름 변경 버튼"
        />
        <span className="function_button_msg">이름 변경</span>
      </button>
      <button className="function_button">
        <img className="function_button_img" src={deleteImg} alt="삭제 버튼" />
        <span className="function_button_msg">삭제</span>
      </button>
    </div>
  );
};

export default FunctionButton;
