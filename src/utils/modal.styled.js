import styled, { keyframes } from "styled-components";

export const S = {};

S.DivModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #00000040;
`

S.DivModalContents = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 3.2rem 4rem;
  background-color: var(--White);
  border-radius: 1.5rem;
`

S.DivModalText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;

  h1 {
    font-size: 2rem;
    font-weight: 700;
  }

  p {
    font-size: 1.4rem;
    font-weight: 400;
    color: var(--Gray4);
  }
`

S.ButtonSubmit = styled.button`
  width: 28rem;
  padding: 1.6rem 2rem;
  border-radius: 0.8rem;
  ${({ color }) => color ? `background-color: var(--Red)` : `background-image: linear-gradient(90deg, #6D6AFE, #6AE3FE)`};
  color: var(--White);
  font-size: 1.6rem;
  font-weight: 600;
`

S.ButtonClose = styled.button`
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
`

S.InputSubmit = styled.input`
  width: 28rem;
  padding: 1.8rem 1.5rem;
  border: 0.1rem solid var(--Gray3);
  border-radius: 0.8rem;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 150%;

  &:focus {
    border: 0.1rem solid var(--Primary);
    outline: none;
  }
`

S.SnsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 3.2rem;
`

S.Sns = function ({ src, alt, text, onClick }) {
  return (
    <button onClick={onClick}>
      <img src={src} alt={alt} />
      <p>{text}</p>
    </button>
  )
}

S.UlModal = styled.ul`
  padding-left: 0;

  li {
    display: flex;
  }

  button {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    padding: 0.8rem;
    border-radius: 0.8rem;
  }

  img {
    display: none;
  }

  button:hover,
  button:focus {
    background-color: var(--Gray1);
    color: var(--Primary);
  }

  button:focus img {
    width: 1.4rem;
    margin-right: 1rem;
    display: flex;
    justify-self: end;
  }

  h2 {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 150%;
  }
  
  p {
    margin-left: 0.8rem;
    font-size: 1.4rem;
    color: var(--Gray4);
  }
`

S.CopyWrapper = styled.div`
  display: none;

  &.active {
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  }
`

const desolve = keyframes`
  100% {
    opacity: 0;
  }
`

S.CopyContent = styled.div`
  padding: 1.2rem 1.8rem;
  color: var(--White);
  font-size: 1.6rem;
  background-color: var(--Gray5);
  border-radius: 0.8rem;
  animation: ${desolve} 2s ease-in;
`