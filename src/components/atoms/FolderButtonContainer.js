import styled from "styled-components";
import DeviceSizes from "../../utils/DeviceSizes";

const FolderButtonContainer = styled.div`
  display: grid;
  align-items: start;
  justify-content: space-between;
  grid-template-columns: 1fr auto;

  ${DeviceSizes.mobile} {
    display: contents;
  }
`;

export default FolderButtonContainer;
