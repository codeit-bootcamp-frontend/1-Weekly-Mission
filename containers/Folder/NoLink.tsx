import React from "react";
import styled from "styled-components";

const NoLink = () => {
  return (
    <StyledNoLinkBox>
      <StyledNoLinkInnerBox>
        <StyledNoLinkParagraph>저장된 링크가 없습니다</StyledNoLinkParagraph>
      </StyledNoLinkInnerBox>
    </StyledNoLinkBox>
  );
};

export default NoLink;

const StyledNoLinkBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.9rem;

  @media (min-width: 768px) and (max-width: 1199px) {
    margin-bottom: 50rem;
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 40rem;
  }
`;

const StyledNoLinkInnerBox = styled.div`
  display: flex;
  width: 100%;
  height: 10rem;
  padding: 4.1rem 0 3.5rem 0;
  justify-content: center;
  align-items: center;
`;
const StyledNoLinkParagraph = styled.p`
  color: #000;
  text-align: center;

  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.4rem; /* 150% */
`;
