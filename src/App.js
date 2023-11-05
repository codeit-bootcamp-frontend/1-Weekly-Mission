import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/reset.css';
import styles from './styles/App.module.css';
import Layout from './components/Layout.js';
import Folder from './pages/Folder.js';
import Shared from './pages/Shared.js';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/shared' element={<Shared />} />
            <Route path='/folder' element={<Folder />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
