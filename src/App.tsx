import Nav from './components/Nav';
import Footer from './components/Footer';
import getData from './services/api';
import { useEffect, useState, useCallback, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

interface User {
  image_source?: string;
  email?: string;
}

function App() {
  const [user, setUser] = useState<User>({});
  const [footerView, setFooterView] = useState<boolean>(false);
  const urlPath = useLocation().pathname;
  const footerRef = useRef(null);

  const getUserData = useCallback(async () => {
    const { data } = await getData('users/1');
    setUser(data[0]);
  }, []);

  useEffect(() => {
    getUserData();
  }, [getUserData]);

  const isFooter = useCallback((entries: any) => {
    const target = entries[0];
    if (!target.isIntersecting) {
      setFooterView(false);
      console.log('푸터 안보인다');
    } else {
      setFooterView(true);
      console.log('푸터 보인다');
    }
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(isFooter);
    if (footerRef.current) {
      io.observe(footerRef.current);
    }
  }, [isFooter]);

  return (
    <Container className='App'>
      <div>
        <Nav user={user} urlPath={urlPath} />
        <Outlet context={{ urlPath, footerView }} />
      </div>
      <Footer ref={footerRef} />
    </Container>
  );
}

export default App;
