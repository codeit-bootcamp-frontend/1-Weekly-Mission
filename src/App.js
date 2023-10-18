import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Intro from './components/Intro';
import Main from './components/Main';
import RequestData from './services/api';

function App() {
  const [id, setId] = useState();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [img, setImg] = useState('');

  const loginInfo = async () => {
    const result = await RequestData();
    const { id, name, email, profileImageSource } = result;
    setId(id);
    setName(name);
    setEmail(email);
    setImg(profileImageSource);
  };

  useEffect(() => {
    loginInfo();
  }, []);

  return (
    <>
      <Header id={id} email={email} />
      <main>
        <Intro name={name} img={img} />
        <Main />
        {}
      </main>
      <Footer />
    </>
  );
}

export default App;
