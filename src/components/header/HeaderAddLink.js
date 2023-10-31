import "./Header.css";

const HeaderAddLink = () => {
  return (
    <header className="add_link_wrapper">
      <form className="add_link_form">
        <input
          id="url"
          name="url"
          type="url"
          placeholder="링크를 추가해 보세요."
        />
        <button className="add_link_button">추가하기</button>
      </form>
    </header>
  );
};

export default HeaderAddLink;
