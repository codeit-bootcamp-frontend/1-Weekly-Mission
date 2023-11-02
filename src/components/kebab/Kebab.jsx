import styled from "styled-components";
const Kebab = styled.div`
  display: flex;
  flex-direction: column;
  width: 10rem;
  height: 6.2rem;
  background: var(--gray-light-gray-00, #fff);
  box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.1);
  color: var(--gray-light-gray-100, #333236);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  position: absolute;
  right: 5rem;
  @media (min-width: 768px) {
    right: -6rem;
    top: 3rem;
    z-index: 9999;
  }
`;

export default Kebab;
