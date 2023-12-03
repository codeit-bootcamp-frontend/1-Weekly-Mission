import styled from "styled-components";

function AddLinkBar() {
  return (
    <StyledWrapper>
      <span>🔗</span>
      <StyledInput type="text" placeholder="링크를 추가해 보세요" />
      <StyledAddBtn>추가하기</StyledAddBtn>
    </StyledWrapper>
  );
}

export default AddLinkBar;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5.5rem;
  padding: 0 1.5rem;
  border-radius: 1.2rem;
  border: 1px solid rgba(109, 106, 254, 1);
  background-color: ${({ theme }) => theme.color.white};
`;

const StyledInput = styled.input`
  all: unset;
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 1.2rem;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  margin-left: 1rem;
`;

const StyledAddBtn = styled.button`
  all: unset;
  width: 6rem;
  padding: 0.9rem 1.2rem;
  border-radius: 0.8rem;
  text-align: center;
  color: ${({ theme }) => theme.color.white};
  font-size: 1.2rem;
  background: linear-gradient(90.99deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  cursor: pointer;
`;
