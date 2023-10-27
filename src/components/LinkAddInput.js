import styled from "styled-components";
import linkIcon from '../assets/link_icon.svg'

const LinkAddInput = () => {

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
  `

  const Input = styled.input`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    line-height: 2.4rem; /* 150% */
    font-size: 1.6rem;
    border: none;

    &:focus {
      outline: none;
    }
  `

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
  `


  return (
    <Form>
      <div>
        <img src={linkIcon}/>
        <Input
          name="searchKeyword" 
          type="text"  //  X자 삭제 버튼 없애기 위해 일단 text로 설정 
          autoComplete="on"
          required placeholder="링크를 추가해 보세요">
        </Input>
      </div>
      <Button>추가하기</Button>
    </Form>
  )
}

export default LinkAddInput;