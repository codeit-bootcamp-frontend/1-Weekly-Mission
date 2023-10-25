import { useState, useEffect, useCallback } from "react";
import useAsync from "./hooks/useAsync";
import { getFolder } from "./api/apiUrl";
import Footer from "./components/js/Footer";
import Header from "./components/js/Header";
import Main from "./components/js/Main";

function App() {
  const [personalFolder, setPersonalFolder] = useState({});
  const [loadingError, getFolderAsync] = useAsync(getFolder);

  const handleLoad = useCallback(async () => {
    const folderResult = await getFolderAsync();
    if (!folderResult) return;

    const { folder } = folderResult;
    setPersonalFolder({ ...folder });
    console.log(folder);
  }, [getFolderAsync]);

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  return (
    <div className="App">
      <Header />
      <Main personalFolder={personalFolder} loadingError={loadingError} />
      <Footer />
    </div>
  );
}

export default App;
