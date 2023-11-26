import styled from 'styled-components';

function AddLink() {
  return (
    <>
      <Container>
        <div className="input-container">
          <AddBox>
            <img src="/assets/image/linkIcon.svg" alt="링크 아이콘" />
            <Input placeholder="링크를 추가해 보세요" />
            <Cta>추가하기</Cta>
          </AddBox>
        </div>
      </Container>
    </>
  );
}

export default AddLink;

const Container = styled.div`
  display: flex;
  padding: 6rem 32rem 9rem 32rem;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  background-color: var(--background, #f0f6ff);
`;

const AddBox = styled.div`
  display: flex;
  width: 80rem;
  padding: 1.6rem 2rem;
  justify-content: space-between;
  align-items: center;
  gap: 1.2rem;
  border-radius: 15px;
  border: 1px solid var(--primary, #6d6afe);
  background: var(--white, #fff);
`;

const Input = styled.input`
  flex-grow: 1;
  color: var(--gray60, #9fa6b2);
  font-size: 1.6rem;
  line-height: 2.4rem;
  border: none;
`;

const Cta = styled.button`
  display: flex;
  flex-direction: flex-start;
  width: 8rem;
  padding: 1rem 1.6rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 0.8rem;
  background: var(--gra-purpleblue-to-skyblue, linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%));
  color: #f5f5f5;
`;
