import "../css/banner.css";
import { useState, useEffect } from "react";
import { getSampleData } from "../api";

function Banner() {
  const [hasData, setHasData] = useState(false);
  const [sampleData, setSampleData] = useState();

  const load = async () => {
    let result;
    try {
      result = await getSampleData();
      result = result.folder;
      setHasData(true);
      setSampleData(result);
    } catch (error) {
      setHasData(false);
      return;
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <>
      {hasData && (
        <div className="bannerContainer">
          <div className="bannerProfile">
            <img
              src={sampleData.owner.profileImageSource}
              id="profileImg"
              alt="Profile Img"
            />
            <p>@{sampleData.owner.name}</p>
          </div>
          <p>{sampleData.name}</p>
        </div>
      )}
    </>
  );
}

export default Banner;
