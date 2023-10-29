import styled from "styled-components";
import { ReactComponent as addIcon } from "../../images/add.svg";
import DeviceSizes from "../../utils/DeviceSizes";

const AddIcon = styled(addIcon)`
  width: 1.6rem;
  height: 1.6rem;
`;

const StyledDiv = styled.div`
  color: #6d6afe;
  font-size: 1.6rem;
  font-weight: 500;
  display: flex;
  padding: 0.8rem 0;
  align-items: center;
  letter-spacing: -0.03rem;
  gap: 0.4rem;
  cursor: pointer;
  ${AddIcon} {
    path {
      fill: #6d6afe;
    }
  }
  ${DeviceSizes.mobile} {
    position: sticky;
    left: 50%;
    transform: translateX(-50%);
    padding: 0.8rem 2.4rem;
    width: 12.9rem;
    border-radius: 2rem;
    color: #fff;
    border: 0.1rem solid var(--linkbrary-white, #fff);
    background: var(--linkbrary-primary-color, #6d6afe);
    z-index: 1;
    bottom: 10.1rem;
    grid-area: addFolderButton;

    ${AddIcon} {
      path {
        fill: #e7effb;
      }
    }
  }
`;
const AddFolderButton = () => {
  return (
    <StyledDiv>
      폴더 추가 <AddIcon />
    </StyledDiv>
  );
};
export default AddFolderButton;
