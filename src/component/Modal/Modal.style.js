import styled from "styled-components";

export const BackGround = styled.div`
  z-index: 9000;
  position: fixed;
  height: 100%;
  width: 100%;
  left: 0;
  top: -${window.scrollY}px;
  text-align: center;
  background: rgba(0, 0, 0, 0.4);
  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.08);
`;
export const Container = styled.div`
  z-index: 9700;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 360px;
  padding: 32px 40px;
  gap: 24px;
  border-radius: 15px;
  border: 1px solid #ccd5e3;
  background: #fff;
  color: #373740;

  img {
    position: absolute;
    top: 16px;
    right: 16px;
    cursor: pointer;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  width: 100%;
`;

export const Input = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px 15px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid #6d6afe;
  background: #fff;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 24px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 20px;
  width: 100%;
  border: none;
  border-radius: 8px;
  color: #f5f5f5;
  font-size: 1.6rem;
  font-weight: 600;
`;
