import styled from "styled-components";

function RedWarningBtn({ children = "", width = "auto", margin = 0 }) {
  const BtnStyle = styled.button`
    display: flex;
    width: ${width};
    padding: 16px 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin: ${margin};
    border-radius: 8px;
    background: #ff5b56;
    border: none;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
  `;
  return <BtnStyle>{children}</BtnStyle>;
}

export default RedWarningBtn;
