import styled, { keyframes } from "styled-components"
const S = {};

S.Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  width: 34rem;
  padding-left: 0;
  
  @media screen and (min-width: 768px) {
    width: 68rem;
  }

  @media screen and (min-width: 1200px) {
    width: 106rem;
  }
  `

S.Li = styled.li`
  display: flex;
  padding: 0.6rem 1rem;
  background-color: var(--White);
  color: var(--Black);
  border: 0.1px solid var(--Primary);
  border-radius: 0.5rem;
  font-size: 1.4rem;
  
  &:hover,
  &.active {
    background-color: var(--Primary);
    color: var(--White);
  }
`

S.BaseButton = styled.button`
    display: flex;
    align-items: center;
    background-color: var(--White);
    white-space: nowrap;
    border: none;
`

S.ButtonAdd = styled(S.BaseButton)`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 0.2rem;
    height: 3rem;
    color: var(--Primary);
  }
`

S.ButtonControl = styled(S.BaseButton)`
  gap: 0.5rem;
  color: var(--Gray4);
  font-size: 1.4rem;
  font-weight: 600;
`

S.scrollDown = keyframes`
  50% {
    bottom: 11rem;
  }
`

S.ButtonFloat = styled(S.BaseButton)`
  animation: ${S.scrollDown} 1.3s ease-in-out infinite;
  position: fixed;
  z-index: 2;
  bottom: 10.1rem;
  padding: 0.8rem 2.4rem;
  border-radius: 2rem;
  gap: 0.3rem;
  background-color: var(--Primary);
  color: var(--White);
  font-size: 1.6rem;
  font-weight: 500;

  &:hover {
    background-color: var(--Red);
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`

S.Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 1rem;
  width: 34rem;

  @media screen and (min-width: 768px) {
    width: 68rem;
    flex-wrap: nowrap;
  }

  @media screen and (min-width: 1200px) {
    width: 106rem;
  }
`

S.DivControl = styled.div`
  display: flex;
  ${({ title }) => title === "전체" && `display: none;`}
  gap: 1.2rem;
`

S.Img = styled.img`
  width: 1.8rem;
`

S.H1 = styled.h1`
  font-size: 2.4rem;
  font-weight: 600;
  width: 34rem;
  padding-left: 0;
  
  @media screen and (min-width: 768px) {
    width: 68rem;
  }

  @media screen and (min-width: 1200px) {
    width: 106rem;
  }
`

S.Empty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30rem;
  font-size: 1.6rem;
  line-height: 2.4rem;
`

export default S