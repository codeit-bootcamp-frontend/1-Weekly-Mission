import { useState } from "react";
import styled from "styled-components";
import kebab from "../../image/kebab.svg";

const Kebab = ({ id }) => {
  // 케밥 버튼 누르면 한개만 뜨게하고싶다..
  const [openPopoverId, setOpenPopoverId] = useState(null);

  const togglePopover = (id) => {
    setOpenPopoverId((prevId) => (prevId !== id ? id : null));
  };

  return (
    <KebabContainer>
      <ToggleKebab
        className="toggle_kebab"
        src={kebab}
        alt="kebab button"
        onClick={() => togglePopover(id)}
      />
      {openPopoverId === id && (
        <Popover>
          <Button>삭제하기</Button>
          <Button>폴더에 추가</Button>
        </Popover>
      )}
    </KebabContainer>
  );
};

const KebabContainer = styled.div`
  position: relative;
`;

const ToggleKebab = styled.img`
  cursor: pointer;
`;

const Popover = styled.div`
  display: block;
  position: absolute;
  top: 20px;
  left: 0;
  background: var(--gray-light-gray-00, #fff);
  box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.1);
  border: none;
`;

const Button = styled.button`
  display: block;
  width: 100%;
  padding: 7px 12px;
  border: none;
  background: transparent;
  cursor: pointer;

  &:hover {
    background: var(--linkbrary-gray-10, #e7effb);
    color: var(--linkbrary-primary-color, #6d6afe);
  }
`;

export default Kebab;
