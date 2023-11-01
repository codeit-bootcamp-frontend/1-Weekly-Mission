import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: auto;
  height: 10rem;
  padding: 4.1rem 0px 3.5rem 0px;
  justify-content: center;
  align-items: center;
  gap: 4rem;

  p {
    text-align: center;
    font-size: 1.6rem;
    line-height: 2.4rem; /* 150% */
  }
`;
// 화면 크기보다 콘텐츠 크기가 작을 경우 푸터가 화면 최화단으로 위치하도록 만들고 싶었는데 실패했습니다...
// const Div = styled.div`
// display: flex;
// flex-direction: column;
// justify-content: space-between;
// align-items: center;
// align-self: stretch;
// `

// const Empty = styled.div`
//   justify-content: space-between;
//   flex: 1;
// `

const EmptyLinkScreen = ({ children }) => {
  return (
    <>
      <Container>
        <p>{children}</p>
      </Container>
      {/* <Div>
      <Empty />  
    </Div> */}
    </>
  );
};

export default EmptyLinkScreen;
