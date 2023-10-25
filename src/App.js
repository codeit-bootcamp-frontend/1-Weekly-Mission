import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import getFolderData from './services/api';
import { useEffect, useState, useCallback } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

function App() {
  const [user, setUser] = useState({});

  const getData = useCallback(async () => {
    const { data } = await getFolderData('users/1');
    setUser(data[0]);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <Container className='App'>
      <div>
        <Nav user={user} />
        <Outlet />
      </div>
      <Footer />
    </Container>
  );
}

export default App;
