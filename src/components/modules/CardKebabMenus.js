import styled from "styled-components";
import DeviceSizes from "../../utils/DeviceSizes";

const SelectMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  position: absolute;
  align-items: flex-start;
  background: var(--gray-light-gray-00, #fff);
  box-shadow: 0rem 0.2rem 0.8rem 0rem rgba(51, 50, 54, 0.1);
  top: 100%;
  right: -7.4rem;
  font-size: 1.4rem;
  z-index: 1;
  cursor: pointer;
  opacity: ${({ open }) => (open ? "1" : "0")};
  transform: ${({ open }) => (open ? "scale(1)" : "scale(0.8)")};
  pointer-events: ${({ open }) => (open ? "auto" : "none")};
  transition: opacity 0.3s ease, transform 0.3s ease;
  ${DeviceSizes.mobile} {
    right: 0;
  }
  & div {
    display: flex;
    padding: 0.7rem 1.2rem;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;
    align-self: stretch;
    &:hover {
      background: var(--linkbrary-gray-10, #e7effb);
      color: var(--linkbrary-primary-color, #6d6afe);
    }
  }
`;

const CardKebabMenus = ({ isOpen }) => {
  return (
    <>
      <SelectMenu open={isOpen}>
        <div>삭제하기</div>
        <div>폴더에추가</div>
      </SelectMenu>
    </>
  );
};

export default CardKebabMenus;
