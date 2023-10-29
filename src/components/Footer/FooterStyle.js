import styled from "styled-components";
import colors from "../../style/colors";
export const FooterContainer = styled.footer`
  display: flex;
  height: 17.5rem;
  padding-top: 120px;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
`;

export const Frame = styled.div`
  display: flex;
  height: 10rem;
  padding: 2rem 6.5rem 4rem 6.5rem;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  align-self: stretch;


  background : ${colors.julgeBlack};
`;

export const FooterInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
  font-family: Arial;
  font-size: 1rem;
  font-weight: 400;
`;

export const Codeit2023 = styled.div`
  color: #676767;
  text-align: center;
`;

export const ExtraInfo = styled.div`
  display: flex;
  width: 11rem;
  align-items: flex-start;
  gap: 1.875rem;
  justify-content: center;
`;

export const Link = styled.a`
  color: #cfcfcf;
  text-decoration: none;
`;

export const SnsIcons = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
`;

export const SnsIcon = styled.img`
  width: 1.25rem;
  height: 1.25rem;
`;
