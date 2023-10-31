import styled, { css, keyframes } from "styled-components"
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

S.DivEmpty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30rem;
  font-size: 1.6rem;
  line-height: 2.4rem;
`

S.HeaderSearch = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.4rem 3.2rem 4rem 3.2rem;
  background-color: var(--Gray1);
`

S.InputWrapper = styled.div`
  pointer-events: none;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 32rem;
  height: 5.4rem;

  @media screen and (min-width: 768px) {
    width: 66rem;
  }
  @media screen and (min-width: 1200px) {
    width: 104rem;
  }
`

S.Input = styled.input`
  width: 34rem;
  padding: 0.8rem 1rem 0.8rem 2.8rem;
  border: 0.1rem solid var(--Primary);
  border-radius: 1.5rem;
  font-size: 1.4rem;
  line-height: 3.7rem;

  &:focus {
    outline: 0.1rem solid var(--Primary);
  }
  @media screen and (min-width: 768px) {
    width: 68rem;
  }
  @media screen and (min-width: 1200px) {
    width: 106rem;
  }
`

S.InputImg = styled.img`
  width: 1.6rem;
  height: 1.6rem;
`

S.InputButton = styled.button`
  pointer-events: all;
  padding: 1rem 1.6rem;
  border: 0;
  border-radius: 0.8rem;
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--Gray1);
  background-image: linear-gradient(90deg, #6d6afe, #6ae3fe);
`

S.NavBg = styled.div`
  position: absolute;
  background-color: var(--Gray1);
  width: 100%;
  height: 7rem;
`

S.Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "logo sign";
  align-items: center;
  position: ${({ page }) => page === 'folder' ? `relative` : `sticky`};
  top: 0;
  z-index: 2;
  background-color: var(--Gray1-80);
  padding: 1.6rem 3.2rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: calc(50vw - 40rem) 1fr 1fr calc(50vw - 40rem);
    grid-template-areas: ". logo sign .";
  }

  @media screen and (min-width: 1200px) {
    padding: 2rem 20rem;
    grid-template-columns: calc(50vw - 96rem) 1fr 1fr calc(50vw - 96rem);
    grid-template-areas: ". logo sign .";
  }
`

S.SignButton = styled.a`
  width: 8.5rem;
  grid-area: sign;
  justify-self: end;
  padding: 1rem 2rem;
  border-radius: 0.8rem;
  background-image: linear-gradient(90deg, #6d6afe, #6ae3fe);
  color: var(--White);
  text-decoration: none;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    padding: 1.2rem 1.6rem;
    font-size: 1.8rem;
    width: 11rem;
  }
`

S.DivProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: sign;
  justify-self: end;
`

S.SpanProfile = styled.span`
  display: none;
  margin-left: 1rem;

@media screen and (min-width: 768px) {
    display: block;
    color: var(--Gray5);
    font-size: 1.4rem;
    font-weight: 400;
  }
`

S.ImgProfile = styled.img`
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 50%;
`

S.ImgLogo = styled.img`
  width: 10rem;
  height: auto;

  @media screen and (min-width: 768px) {
    width: 13rem;
  }
`

S.Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;
  padding: 2rem 0;

  @media screen and (min-width: 768px) {
    gap: 2.4rem;
    padding: 4rem 3.2rem;
  }
`

S.ImgSearch = styled.img`
  position: absolute;
  top: 1.5rem;
  left: 1rem;
  width: 1.6rem;
  height: auto;
`

S.InputSearch = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background-color: var(--Gray1-80);
`

S.DivSearch = styled.div`
  position: relative;
  width: 34rem;
  padding: 1.3rem 1.6rem 1.3rem 3.2rem;
  background-color: var(--Gray1-80);
  border-radius: 1rem;

  &:focus-within {
  outline: 0.1rem solid var(--Gray5);
  }

  @media screen and (min-width: 768px) {
    width: 70.5rem;
  }

  @media screen and (min-width: 1200px) {
    width: 106rem;
  }
`

S.DivCardList = styled.div`
  display: grid;
  grid-template-columns: 34rem;
  justify-content: center;
  gap: 2rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: 34rem 34rem;
    row-gap: 2.5rem;
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: 34rem 34rem 34rem;
    column-gap: 2rem;
    row-gap: 2.5rem;
  }
`

S.ACard = styled.a`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 34rem;
  height: 34rem;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 0.5rem 2.4rem 0 rgba(0, 0, 0, 0.08);
  color: var(--Black);
  background-color: var(--White);
  
  &:hover {
  transform: scale(110%);
  transition: all 0.2s ease-in;
  z-index: 1;
  }
`

S.DivImgCard = styled.div`
  height: 20.5rem;
  margin: 0 auto;
`

S.ImgCard = styled.img`
  width: 34rem;
  height: 100%;
  object-fit: cover;
`

S.DivTextCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 13.5rem;
  padding: 1.5rem 2rem;
  gap: 1rem;
  background-color: var(--White);
`

S.DivTimeDiff = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  color: var(--Gray5);
`

S.H3 = styled.h3`
  font-size: 1.4rem;
`

S.ButtonStar = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
`

S.Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f6ff;
  padding: 1rem 0 4rem;
`

S.DivUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`

S.ImgUser = styled.img`
  width: 5rem;
  height: 5rem;
  @media screen and (min-width: 768px) {
    width: 5.6rem;
    height: 5.6rem;
  }
`

S.PUser = styled.p`
  color: var(--Black);
  font-size: 1.4rem;
`

S.H1User = styled.h1`
  font-size: 3.2rem;
  font-weight: 600;
`

S.Footer = styled.footer`
  display: grid;
  grid-template: 1fr 1fr / 1fr 1fr;
  grid-template-areas:
    "info sns"
    "copy .";
  row-gap: 6rem;
  margin-top: 4rem;
  padding: 3.2rem;
  background: var(--Black);

  @media screen and (min-width: 768px) {
    grid-template: 1fr / 1fr 1fr 1fr;
    grid-template-areas: "copy info sns";
    padding: 3.2rem 10rem 11.2rem;
  }

  @media screen and (min-width: 1200px) {
    grid-template: 1fr / calc(50vw - 96rem) 1fr 1fr 1fr calc(50vw - 96rem);
    grid-template-areas: ". copy info sns .";
    padding: 3.2rem 10rem 11.2rem;
  }
`

const divFooter = css`
  display: flex;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.6rem;
  font-weight: 400;
  color: var(--Gray5);
`

S.DivCopy = styled.div`
  ${divFooter};
  align-self: center;
  grid-area: copy;
`

S.DivInfo = styled.div`
  ${divFooter};
  grid-area: info;
  gap: 3rem;

  & a {
    color: var(--Gray3);
  }
`

S.DivSns = styled.div`
  ${divFooter};
  gap: 1.2rem;
  justify-self: end;
  grid-area: sns;
`

export default S