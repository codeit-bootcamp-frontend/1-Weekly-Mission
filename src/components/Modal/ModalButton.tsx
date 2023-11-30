import styled from "styled-components";

function ModalButton({ content }: ContentProps) {
  return <Button content={content}>{content}</Button>;
}

export { CloseButton, ModalButton };

const Button = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 20px;
  border-radius: 8px;
  background: ${(props) =>
    props.content === "삭제하기"
      ? "var(--red)"
      : "linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)"};
  color: #fff;
  font-size: 1.6rem;
  font-weight: 600;
`;

const CloseButton = styled.button<{ $imgsrc: string }>`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: transparent;
  background-image: url(${(props) => props.$imgsrc});
  background-repeat: no-repeat;
`;
