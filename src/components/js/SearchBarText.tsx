import styled from "styled-components";

function SearchBarText ({value}:any) {
  return(<Wrapper><SearchValue>{value}</SearchValue><Text>(으)로 검색한 결과입니다.</Text></Wrapper>)
}

export default SearchBarText;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 31px;
`;

const SearchValue = styled.div`
  color:#373740;
  font-family: Pretendard;
  font-size: 3.2rem;
  font-weight: 600;
  letter-spacing: -0.2px;
`;

const Text = styled.div`
  color:#9FA6B2;
  font-family: Pretendard;
  font-size: 3.2rem;
  font-weight: 600;
  letter-spacing: -0.2px;
`;