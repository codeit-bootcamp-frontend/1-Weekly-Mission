import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';

import Navigator from './Components/Navigator';
import Folder from './Components/Folder';
import Footer from './Components/Footer';

import './scss/main.scss';

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
