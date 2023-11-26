import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  src: any;
  alt: string;
  children: ReactNode;
  onClick: () => void;
}

function OptionBtn({ src, alt, children, onClick }: Props): JSX.Element {
  return (
    <Div>
      <Img src={src} alt={alt} />
      <Btn onClick={onClick}>{children}</Btn>
    </Div>
  );
}

export default OptionBtn;

const Div = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;
`;

const Img = styled.img`
  width: 1.8rem;
  height: 1.8rem;
`;

const Btn = styled.button`
  color: var(--gray60);
  font-size: 1.4rem;
  font-weight: 600;
`;
