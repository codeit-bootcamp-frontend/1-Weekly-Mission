import React from "react";
import close from "src/assets/images/close.png";
import styles from "src/components/Search/Search.module.css";
import styled from "styled-components";

function Search({ value, searchResult }: SearchProps) {
  const handleResult = (e: React.ChangeEvent<HTMLInputElement>) => {
    searchResult(e.target.value);
  };
  const handleDelete = () => {
    searchResult("");
  };
  return (
    <StyledWrapper>
      <input
        className={styles.searchInput}
        placeholder={"링크를 검색해 보세요."}
        onChange={handleResult}
        value={value}
      />
      {value.length > 0 && (
        <StyledDeleteButton $imgsrc={close.src} onClick={handleDelete} />
      )}
    </StyledWrapper>
  );
}

export default Search;

const StyledWrapper = styled.div`
  position: relative;
`;

const StyledDeleteButton = styled.button<{ $imgsrc: string }>`
  position: absolute;
  width: 24px;
  height: 24px;
  background-image: url(${(props) => props.$imgsrc});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  top: 12px;
  right: 16px;
`;
