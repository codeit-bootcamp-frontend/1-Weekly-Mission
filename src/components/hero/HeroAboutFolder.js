import styled from "styled-components";
import LinkIcon from "assets/link.svg";
import Button from "components/button/Button";

// export const Container = styled.div`
//   padding: 3.75rem 20rem;
// `;

export const Wrapper = styled.div`
  padding: 1.5rem 2rem;
  position: relative;
  max-width: 55rem;
  width: 100%;
  margin: auto;
`;

export const Icon = styled.img`
  position: absolute;
  top: 50%;
  left: 3.5rem;
  transform: translate(-50%, -50%);
`;

export const Input = styled.input`
  padding: 1rem 2.5rem;
  width: 100%;
  background: var(--color-white);
  border: 1px solid var(--color-primary);
  border-radius: 1rem;
  line-height: 1.5rem;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(-50%, -50%);
`;

export default function FolderHero() {
  return (
    <Wrapper>
      <Icon src={LinkIcon} alt="link" />
      <Input type="text" placeholder="링크를 추가해 보세요" />
      <ButtonContainer>
        <Button size="small" label="추가하기" />
      </ButtonContainer>
    </Wrapper>
  );
}
