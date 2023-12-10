import styled from "styled-components";
import LogoImage from "@/public/images/logo.svg";
import Link from "next/link";

interface MemberTopProps {
  text1: string;
  text2: string;
}

const MemberTop = ({ text1, text2 }: MemberTopProps) => {
  const redirectAddress =
    text1 === "이미 회원이신가요?" ? "/signin" : "/signup";

  return (
    <StyledMemberTopBox>
      <LogoImage />
      <StyledMemberTopInnerBox>
        <p>{text1}</p>
        <StyledMemberTopLink href={redirectAddress}>
          {text2}
        </StyledMemberTopLink>
      </StyledMemberTopInnerBox>
    </StyledMemberTopBox>
  );
};

export default MemberTop;

const StyledMemberTopBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const StyledMemberTopInnerBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  align-items: center;

  p:nth-child(1) {
    color: var(--black);
    /* Linkbrary/body1-regular */
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
  }
`;

const StyledMemberTopLink = styled(Link)`
  color: var(--linkbrary-primary-color);
  /* Linkbrary/body 1-semibold */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  &:hover {
    text-decoration: underline;
  }
`;
