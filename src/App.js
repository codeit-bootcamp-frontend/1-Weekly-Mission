import Footer from './components/Footer';
import Header from './components/Header';
import Intro from './components/Intro';
import Main from './components/Main';

function App() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <Main />
      </main>
      <Footer />
    </>
  );
}

export default App;
