import Link from "next/link";
import Input from "src/components/Input/Input";
import { INPUT_TYPE } from "src/constants/input";
import { styled } from "styled-components";

export default function Home() {
  return (
    <>
      <Input
        type={INPUT_TYPE.password.type}
        placeholder={INPUT_TYPE.password.placeholder}
        errorMsg={INPUT_TYPE.password.errorMsg}
      />
      <Link href={"/folder"}>
        <StyledButton>🗂️ 폴더 페이지 이동</StyledButton>
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
