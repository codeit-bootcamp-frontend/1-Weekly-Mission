import styled from "styled-components";

interface IProps {
  children: string;
  onClick: (e: React.MouseEvent) => void;
  type: "red" | "default";
}

const DefaultBtn = ({ children, onClick, type }: IProps) => {
  return (
    <DefaultBtnContainer onClick={onClick} type={type}>
      {children}
    </DefaultBtnContainer>
  );
};

export default DefaultBtn;

export const DefaultBtnContainer = styled.button<{ type: string }>`
  border-radius: 0.8rem;
  background: ${(props) =>
    props.type === "red"
      ? "var(--red)"
      : "linear-gradient(91deg, var(--primary) 0.12%, #6ae3fe 101.84%)"};
  color: #f5f5f5;
  padding: 1.6rem 2rem;
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 2.2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
