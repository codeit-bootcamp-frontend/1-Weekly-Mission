import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';

import Navigator from 'components/Navigator';
import Folder from 'components/Folder';
import Footer from 'components/Footer';

import './styles/main.scss';

TimeAgo.addDefaultLocale(en);

function App() {
  return (
    <>
      <Navigator />
      <Folder />
      <Footer />
    </>
  );
}

export default App;
