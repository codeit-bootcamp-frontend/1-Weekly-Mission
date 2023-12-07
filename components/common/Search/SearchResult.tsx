import { DEVICE_SIZE } from '@/styles/DeviceSize';
import styled from 'styled-components';

interface Props {
  keyword: string;
}

function SearchResult({ keyword }: Props) {
  return (
    <Result>
      <Black>{keyword}</Black>(으)로 검색한 결과입니다.
    </Result>
  );
}

export default SearchResult;

const Black = styled.span`
  color: black;
  font-size: 32px;
  font-weight: 600;
  letter-spacing: -0.2px;

  @media (max-width: ${DEVICE_SIZE.mobile}) {
    font-size: 24px;
  }
`;

const Result = styled.div`
  padding-top: 40px;

  color: var(--gray-60);
  font-size: 32px;
  font-weight: 600;
  letter-spacing: -0.2px;

  @media (max-width: ${DEVICE_SIZE.mobile}) {
    font-size: 24px;
  }
`;
