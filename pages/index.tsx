import styled from 'styled-components';

export default function Home() {
  return (
    <>
      <Button>
        <p>button</p>
      </Button>
    </>
  );
}

const Button = styled.button`
  width: 200px;
  height: 50px;
  background-color: ${props => props.theme.color['primary']};
  border: none;
`;
