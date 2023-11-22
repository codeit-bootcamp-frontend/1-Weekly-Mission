import styled from "styled-components";
import getFolderTagListData from "../../utils/getFolderTagListData";
import { useEffect, useState } from "react";
import AddLinkToFolder from "../../modals/contents/AddLinkToFolder";
import DeleteLink from "../../modals/contents/DeleteLink";

const OptionBtnStyle = styled.button`
  width: 100px;
  padding: 7px 12px;
  color: #333236;
  border: none;
  background: #fff;
  box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.1);
  &:active {
    background: #e7effb;
    color: #6d6afe;
  }
`;

const OptionBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  position: absolute;
  bottom: 6px;
  left: 108px;
  visibility: ${({ isActive }) => (isActive ? "visible" : "hidden")};
`;

function AddFolderOptionBtn({ children, isFloatingBtnActive = false }) {
  const [isOpen, setOpen] = useState("");
  const [isActive, setIsActive] = useState(isFloatingBtnActive);
  const handleClick = (selectedIcon) => {
    console.log("click");
    setOpen(selectedIcon);
    setIsActive(false);
  };
  const changeOpenState = (openState) => setOpen(openState);
  const TagDataList = getFolderTagListData();

  useEffect(() => {
    setIsActive((prev) => !prev);
  }, [isFloatingBtnActive]);

  return (
    <div>
      <OptionBtnContainer isActive={isActive}>
        {children.map((child) => (
          <OptionBtnStyle onClick={() => handleClick(child)}>
            {child}
          </OptionBtnStyle>
        ))}
      </OptionBtnContainer>
      <DeleteLink
        isOpen={isOpen === children[0]} // children[0]: "삭제하기"
        changeOpenState={changeOpenState}
        link=""
      />
      <AddLinkToFolder
        isOpen={isOpen === children[1]} // children[1]: "폴더에 추가"
        changeOpenState={changeOpenState}
        TagListData={TagDataList}
      />
    </div>
  );
}
export default AddFolderOptionBtn;
