import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import getSample from "./api";
import { useEffect, useState } from "react";

function App() {
  const [folder, setFolder] = useState({});

  const getSampleFolder = async () => {
    try {
      let result = await getSample("folder");
      setFolder(result.folder);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const { name, owner, links } = folder;

  // useEffect(() => getSampleFolder('folder'), [folder]);

  useEffect(() => {
    const fetchData = async () => {
      await getSampleFolder("folder");
    };

    fetchData();
  }, []); // 이펙트가 컴포넌트가 마운트될 때 한 번만 실행됨을 나타냅니다.

  return (
    <>
      <Nav />
      <Header name={name} owner={owner} />
      <Main links={links} />
      <Footer />
    </>
  );
}

export default App;
