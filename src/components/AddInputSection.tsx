import React from "react";
import linkImg from "../img/svg/link.svg";

interface AddInputSectionType {
  handleListClick: (
    event: React.MouseEvent<HTMLButtonElement>,
    title: string,
    btn: string,
    item?: string | null
  ) => void;
  newLink: string;
  setNewLink: React.Dispatch<React.SetStateAction<string>>;
}

const AddInputSection = ({
  handleListClick,
  newLink,
  setNewLink,
}: AddInputSectionType) => {
  const onAddInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setNewLink(value);
  };

  return (
    <div className="section-title section-title-first">
      <div className="add-link">
        <img src={linkImg} alt="링크추가이미지" />
        <input
          name="addLink"
          value={newLink}
          type="text"
          onChange={onAddInputChange}
          placeholder="링크를 추가해 보세요"
        />
        <button
          type="button"
          onClick={(event) =>
            handleListClick(event, "폴더에 추가", "폴더에 추가", newLink)
          }
        >
          추가하기
        </button>
      </div>
    </div>
  );
};

export default AddInputSection;
