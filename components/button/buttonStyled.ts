import { device } from "@/styles/globalStyle";
import styled from "styled-components";

export const ButtonContainer = styled.button<{ type: string }>`
  border-radius: 0.8rem;
  background: ${(props) =>
    props.type === "secondary"
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

export const AddFloatingBtnContainer = styled.div`
  display: none;

  @media all and (${device.mobile}) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.8rem 2.4rem;
    border-radius: 2rem;
    border: 1px solid #fff;
    background: var(--primary);
    width: fit-content;
    height: 3.7rem;
    box-sizing: border-box;
    gap: 0.4rem;
    position: fixed;
    z-index: 5;
    bottom: 10.1rem;
    margin: 0 auto;
    left: 50%;
    transform: translate(-50%, 0);
    cursor: pointer;

    .floatingBtnTitle {
      color: var(--gray10);
      text-align: center;
      font-size: 1.6rem;
      font-weight: 500;
      letter-spacing: -0.3px;
    }
  }
`;
