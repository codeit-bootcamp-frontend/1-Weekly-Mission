import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

const Main = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          "https://bootcamp-api.codeit.kr/api/sample/folder"
        );
        setInfo(res.data.folder.links);
        console.log(info);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="TotalContainer">
      <div className="Container">
        <div className="Grid">
          {info.map((data) => (
            <Card
              createdAt={data.createdAt}
              description={data.description}
              imageSource={data.imageSource}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
