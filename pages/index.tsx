import Link from "next/link";
import { styled } from "styled-components";

export default function Home() {
  return (
    <>
      <Link href={"/signin"}>
        <StyledButton>🔑 로그인 페이지</StyledButton>
      </Link>
      <Link href={"/folder"}>
        <StyledButton>🗂️ 폴더 페이지</StyledButton>
      </Link>
    </>
  );
}

const StyledButton = styled.button`
  display: flex;
  margin: 0 auto;
  margin-top: 100px;
  border: 1px solid transparent;
  border-radius: 10px;
  background-color: #6d6afe;
  font-size: 20px;
  color: #fff;
`;
