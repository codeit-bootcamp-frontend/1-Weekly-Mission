import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Not Found | Linkbrary</title>
      </Helmet>
      <HeadStyle>이런 페이지는 없어요.. 😭</HeadStyle>
    </>
  );
}

export default NotFoundPage;

const HeadStyle = styled.h1`
  font-size: 3.6rem;
`;
