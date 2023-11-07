import { Routes, Route } from 'react-router-dom';
import './styles/reset.css';
import styles from './styles/App.module.css';
import Layout from './components/Layout.js';
import Folder from './pages/Folder.js';
import Shared from './pages/Shared.js';
import { AccountContext } from './context/AccountContext.js';
import { useFetch } from './hooks/useFetch.js';

function App() {
  const { data: userData } = useFetch('users/1', 1);
  if (!userData) return;

  return (
    <AccountContext.Provider value={{ account: userData.data[0] }}>
      <div className={styles.container}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/shared' element={<Shared />} />
            <Route path='/folder' element={<Folder />}>
              <Route index element={<Folder />} />
              <Route path=':folderId' element={<Folder />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </AccountContext.Provider>
  );
}

export default App;
