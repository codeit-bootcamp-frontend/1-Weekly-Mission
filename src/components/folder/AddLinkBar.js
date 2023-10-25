import '../../styles/loginBtn.css';
import '../../styles/addLinkBar.css';

function AddLinkBar() {
  return (
    <>
      <form className="add_link_container">
        <div className="add_link_input_wrapper">
          <input className="add_link_input" placeholder="링크를 추가해 보세요" />
          <button className="blue_btn add_btn">추가하기</button>
        </div>
      </form>
    </>
  );
}

export default AddLinkBar;
