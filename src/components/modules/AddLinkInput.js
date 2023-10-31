import React, { useState } from "react";
import styled from "styled-components";
import Button from "../atoms/Button";
import linkIcon from "../../images/link.png";
import DeviceSizes from "../../utils/DeviceSizes";

const StyledDiv = styled.div`
  background-color: var(--linkbrary-zircon);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6rem 3.2rem 9rem 3.2rem;
  gap: 2rem;
  ${DeviceSizes.mobile} {
    padding: 2.4rem 3.2rem 4rem 3.2rem;
  }
`;

const StyledForm = styled.form`
  position: relative;
  width: 100%;
  max-width: 80rem;
  & img {
    position: absolute;
    left: 2rem;
    bottom: 50%;
    transform: translateY(50%);
    cursor: pointer;
    ${DeviceSizes.mobile} {
      left: 1rem;
      width: 1.6rem;
      height: 1.6rem;
    }
  }

  ${Button} {
    position: absolute;
    padding: 1rem 1.55rem;
    width: 8rem;
    right: 2rem;
    bottom: 50%;
    transform: translateY(50%);
    cursor: pointer;
    height: 3.7rem;
    font-size: 1.4rem;
    font-weight: 600;
    ${DeviceSizes.mobile} {
      right: 1rem;
    }
  }
`;

const StyledAddLinkInput = styled.input`
  width: 100%;
  height: 6.9rem;
  padding: 1.6rem 10.5rem 1.6rem 4.5rem;
  border: 0.1rem solid var(--linkbrary-primary-color);
  outline: var(--linkbrary-primary-color);
  background: var(--linkbrary-white);
  border-radius: 0.8rem;
  font-size: 1.6rem;
  ${DeviceSizes.mobile} {
    height: 5.3rem;
    font-size: 1.4rem;
    padding: 0.8rem 9.5rem 0.8rem 3.4rem;
  }
`;

const AddLinkInput = () => {
  const [addLinkValue, setAddLinkValue] = useState("");
  const handleInputChange = (e) => setAddLinkValue(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("추가:", addLinkValue);
    setAddLinkValue("");
  };

  return (
    <StyledDiv>
      <StyledForm onSubmit={handleSubmit}>
        <img src={linkIcon} alt="링크 아이콘" />
        <StyledAddLinkInput placeholder="링크를 추가해 보세요" onChange={handleInputChange} value={addLinkValue} />
        <Button>추가하기</Button>
      </StyledForm>
    </StyledDiv>
  );
};

export default AddLinkInput;
