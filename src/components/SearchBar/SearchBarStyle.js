import styled from "styled-components";
import SearchImage from "../../assets/Search.png";
export const SearchBarContainer = styled.div`
  position: relative;
  gap: 8px;
`;

export const SearchIcon = styled.div`
  position: absolute;
  left: 8px;
  top: 15px;
`;

export const SearchInput = styled.input`
  display: flex;
  width: 1000px;
  height: 20px;
  padding: 14px;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 10px;
  background: #f5f5f5;
  border: none;
  background-repeat: no-repeat;
  background-image: url(${SearchImage});
  background-position: 15px 15px;
  padding-left: 45px;
`;
