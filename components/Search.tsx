import React from "react";
import Image from "next/image";
import styled from "styled-components";

function Search() {
  return (
    <S_Search>
      <Container>
        <Icon src="/images/search.svg" width={16} height={16} alt="" />
        <Input placeholder="링크를 검색해 보세요" />
      </Container>
    </S_Search>
  );
}

export default Search;

const S_Search = styled.div`
  width: 100%;
  max-width: 106rem;
  background-color: #f5f5f5;
  border-radius: 1rem;
  margin: 4rem auto;
  padding: 1.5rem 1.6rem;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled(Image)`
  margin-right: 1rem;
`;

const Input = styled.input`
  border: none;
  outline: none;
  background: transparent;
`;
