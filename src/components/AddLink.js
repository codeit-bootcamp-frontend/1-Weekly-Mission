import "./AddLink.css";

function AddLink() {
  return (
    <form className="link-add-form">
      <label className="link-add-label">
        <input
          className="link-add"
          placeholder="링크를 추가해 보세요"
          name="addLinkName"
        />
        <a className="link-add-button" href="/">
          추가하기
        </a>
        {/*추후 Link로 변경*/}
      </label>
    </form>
  );
}

export default AddLink;
