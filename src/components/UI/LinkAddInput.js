import styled from 'styled-components';
import linkIcon from '../../assets/link_icon.svg';
import { useState } from 'react';
import ModalBox from '../modal/ModalBox';

function LinkAddInput({ selectedFolder }) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handelClick = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputElement = e.target.elements.url; // URL 입력 필드 선택
    const url = inputElement.value; // 입력된 URL 값
    const urlPattern = /^(https?:\/\/)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%+._~#?&//=]*)$/;

    if (!urlPattern.test(url)) {
      alert('유효한 URL 형식이 아닙니다.');
    } else {
      handelClick();
    }
    inputElement.value = '';
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <div>
          <img src={linkIcon} alt="링크 추가 아이콘" />
          <Input name="url" type="text" autoComplete="on" required placeholder="링크를 추가해 보세요"></Input>
        </div>
        <Button>추가하기</Button>
      </Form>
      {isModalVisible && <ModalBox modal="폴더 추가" closeModal={handelClick} selectedFolder={selectedFolder} />}
    </>
  );
}

export default LinkAddInput;

const Form = styled.form`
  padding: 1.6rem 2rem;
  background: var(--white);
  display: flex;
  width: 80rem;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
  border: 0.1rem solid var(--primary);
  border-radius: 1.5rem;

  div {
    display: flex;
    gap: 0.8rem;
  }

  @media (max-width: 864px) {
    width: calc(100vw - 6.4rem);
  }
  @media (max-width: 779px) {
    padding: 0.8rem 1rem;
  }
`;

const Input = styled.input`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  line-height: 2.4rem; /* 150% */
  font-size: 1.6rem;
  border: none;
  width: 60rem;
  -webkit-box-shadow: 0 0 0 1000px white inset;
  box-shadow: 0 0 0 1000px white inset; // 자동완성 시 생성되는 배경색 동일하게 지정

  &:focus {
    outline: none;
  }

  @media (max-width: 1124px) {
    width: calc(55vw);
  }

  @media (max-width: 779px) {
    font-size: 1.4rem;
    width: calc(43vw);
  }
`;

const Button = styled.button`
  display: flex;
  padding: 1rem 1.6rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 0.8rem;
  background: var(--graBlueToSkyBlue);
  color: var(--grayLight);
  font-size: 1.4rem;
  font-weight: 600;
  border: 0;
`;
