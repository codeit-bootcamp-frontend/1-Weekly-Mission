import styled from 'styled-components'
import SearchImage from '../../assets/Search.png'
export const SearchBarContainer = styled.div`
  gap: 8px;
`

export const SearchInput = styled.input`
  display: flex;
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  background: #f5f5f5;
  border: none;
  background-repeat: no-repeat;
  background-image: url(${SearchImage});
  background-position: 17px 19px;
  padding-left: 45px;
`
