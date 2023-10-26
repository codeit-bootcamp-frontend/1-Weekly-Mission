import styled from "styled-components"

const NavBox = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 9.4rem;
  background-color: var(--linkbrary-bg);
  padding: 0 20rem;
  z-index: 2;

  @media (min-width: 768px) and (max-width: 1199px) {
    padding: 0;
  }

  @media screen and (max-width: 767px) {
    padding: 0;
  }
`

const NavInnerBox = styled.div`
  width: 152rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) and (max-width: 1199px) {
    width: 79.9rem;
    padding: 0 min(3.2rem);
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 0 min(3.2rem);
  }
`

const ProfileBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`

const ProfileImage = styled.img`
  width: 2.8rem;
  border-radius: 100%;
`

const ProfileCollapseParagraph = styled.p`
  color: var(--linkbrary-gray-100, #373740);
  margin-left: 0.6rem;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 0;

  @media screen and (max-width: 767px) {
    display: none;
  }
`

const NavLogoImage = styled.img`
  @media screen and (max-width: 767px) {
    width: 8.9rem;
  }
`

export {
  NavBox,
  NavInnerBox,
  ProfileBox,
  ProfileImage,
  ProfileCollapseParagraph,
  NavLogoImage,
}
