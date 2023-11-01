import styled from "styled-components";
import { device } from "../../components/styles";
import { Wrapper } from "../../components/common/commonStyledComponents";

export const SharedWrapper = styled(Wrapper)`
  padding-top: 9.4rem;
`;

export const ContentContainer = styled.div`
  margin: 2rem auto 6rem;
  margin: ${(props) =>
    props.$page === "folder" ? "6rem auto 9rem" : "2rem auto 6rem"};
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: center;
  justify-content: center;

  #userProfile {
    border-radius: 4.7rem;
    width: 6rem;
    height: 6rem;
    margin-bottom: 1.2rem;
  }
  #userName {
    color: #000;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.4rem;
    margin-bottom: 2rem;
  }

  #folderName {
    color: #000;
    font-size: 4rem;
    font-weight: 600;
  }
`;

export const FolderContentContainer = styled(ContentContainer)`
  margin: 4rem auto 6rem;
  gap: 4rem;
`;

export const CardContainer = styled.div`
  gap: 4rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(3, 1fr);
  @media all and ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media all and ${device.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;
