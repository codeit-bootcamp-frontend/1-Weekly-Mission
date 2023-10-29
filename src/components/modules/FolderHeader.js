import React from "react";
import styled from "styled-components";
import DeviceSizes from "../../utils/DeviceSizes";

const StyledDiv = styled.div`
  background-color: var(--linkbrary-zircon);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 3.2rem 6rem 3.2rem;
  gap: 2rem;
  ${DeviceSizes.tablet} {
    gap: 2.4rem;
  }
`;

const FolderHeader = ({ children }) => {
  return <StyledDiv>{children}</StyledDiv>;
};

export default FolderHeader;
