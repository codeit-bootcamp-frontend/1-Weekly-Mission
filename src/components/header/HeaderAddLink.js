import { useState } from "react";
import "./Header.css";
import AddLinkModal from "../modal/AddLinkModal";

const HeaderAddLink = () => {
  const [link, setLink] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleAddLink = (event) => {
    event.preventDefault();
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="add_link_wrapper">
      <form className="add_link_form" onSubmit={handleAddLink}>
        <input
          id="url"
          name="url"
          type="url"
          placeholder="링크를 추가해 보세요."
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <button type="submit" className="add_link_button">
          추가하기
        </button>
      </form>

      <AddLinkModal isOpen={showModal} closeModal={closeModal} link={link} />
    </div>
  );
};

export default HeaderAddLink;
