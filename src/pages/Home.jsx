import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// 임시적으로 제작
function Home() {
  return (
    <Container>
      <Link to="/">
        <Button>Home</Button>
      </Link>

      <Button>
        <Link to="/shared">Share</Link>
      </Button>
      <Button>
        <Link to="/folder">Folder</Link>
      </Button>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10rem auto;
  min-height: 70vh;
  gap: 10rem;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30rem;
  height: 10rem;
  background-color: navy;
  color: white;
  border-radius: 10px;
  font-size: 5rem;
`;
