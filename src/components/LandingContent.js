import styled from 'styled-components';

export default function LandingContent({ data }) {
  return <Title gradient={data.gradient}>{data.title}를저장하세요</Title>;
}

const Title = styled.div`
  font-size: 48px;
  font-weight: 700;
  span {
    background: ${({ gradient }) => gradient};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
