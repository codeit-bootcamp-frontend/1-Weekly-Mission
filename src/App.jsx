import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';
import GlobalStyle from 'styles/GlobalStyle';
import Navigator from 'components/Navigator';
import Folder from 'components/Folder';
import Footer from 'components/Footer';

TimeAgo.addDefaultLocale(en);

function App() {
  return (
    <>
      <GlobalStyle />
      <Navigator />
      <Folder />
      <Footer />
    </>
  );
}

export default App;
