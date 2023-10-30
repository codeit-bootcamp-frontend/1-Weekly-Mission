import sharedImg from "../images/editbutton-shared.svg";
import editImg from "../images/editbutton-edit.svg";
import deleteImg from "../images/editbutton-delete.svg";

function EditButton({ item }) {
  const editButtonList = {
    img: {
      shared: sharedImg,
      edit: editImg,
      delete: deleteImg,
    },
    text: {
      shared: "공유",
      edit: "이름 변경",
      delete: "삭제",
    },
  };

  const imgSrc = editButtonList.img[item];
  const buttonText = editButtonList.text[item];

  return (
    <div className="editButtonContainer">
      <img src={imgSrc} alt={item} />
      <p>{buttonText}</p>
    </div>
  );
}

export default EditButton;
