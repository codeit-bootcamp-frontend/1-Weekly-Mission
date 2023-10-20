import "./App.css";
import getUserFolder from "./utils/api";
import { useEffect, useState } from "react";
import CardComponent from "./components/CardComponent";

function App() {
  const [state, setState] = useState([]);

  async function handleList() {
    const { links } = await getUserFolder();
    setState(links);
  }

  useEffect(() => {
    handleList();
  }, []);

  return (
    <>
      <ul>
        {state.map((cardInfo) => {
          return <CardComponent cardInfo={cardInfo} key={cardInfo.id} />;
        })}
      </ul>
    </>
  );
}

export default App;
