import './App.css';
import { useCallback, useEffect, useState } from 'react';
import { getSample } from './api';
import Navigation from './components/Nav/Navigation';
import useCatch from './hooks/useCatch';
import CardList from './components/Main/Card';

function App() {
  const [sampleLoading, sampleError, getSampleCatch] = useCatch(getSample);
  const [links, setLinks] = useState(false);

  const loadData = useCallback(async (option) => {
    const res = await getSampleCatch(option);
    if (!res) return;
    const { folder: { links } } = res;

    setLinks(links);
    console.log(links);
  }, [getSampleCatch])

  useEffect(() => {
    loadData('folder');
  }, [loadData])

  return (
    <>

      <Navigation />
      {/* <Header /> */}
      {/* <Main /> */}

      <CardList links={links} />
      {/* <Footer /> */}
    </>

  );
}

export default App;
