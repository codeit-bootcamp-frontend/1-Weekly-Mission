import styled from 'styled-components';

function EmptyCardList() {

  return (
    <EmptyCardListStyle>저장된 링크가 없습니다</EmptyCardListStyle>
  );
}

export default EmptyCardList;

const EmptyCardListStyle = styled.div`
  display: flex;
  height: 10rem;
  padding: 0 9.75rem 0 9.85rem;
  justify-content: center;
  align-items: center;
  color: #000;
  text-align: center;

  font-family: Pretendard, sans-serif;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
