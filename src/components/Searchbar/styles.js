import styled from "styled-components"

const SearchbarBox = styled.div`
  display: flex;
  width: 106rem;
  padding: 1.5rem 1.6rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 1rem;
  background: #f5f5f5;
  transition: 0.5s;

  @media screen and (max-width: 1124px) {
    width: 70.4rem;
  }

  @media screen and (max-width: 767px) {
    width: 32.5rem;
  }
`

const SearchbarInnerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
`

const SearchbarInput = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  color: var(--Text, #666);
  width: 100%;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 2.4rem;

  &:active,
  focus {
    border: none;
    outline: none;
  }
`

const SearchbarDeleteBox = styled.div`
  cursor: pointer;
`

export { SearchbarBox, SearchbarInnerBox, SearchbarInput, SearchbarDeleteBox }
