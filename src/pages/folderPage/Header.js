import React, { useEffect, useState } from "react";
import { getFolder } from "../../api/api";
import "../../styles/landing.css";
import Search from "../../components/Search/Search";
import Cards from "../../components/Cards/Cards";
import AddLink from "../../components/addLink/AddLink";

const Header = () => {
  const [fullData, setFullData] = useState([]);
  const getFolderOwner = async () => {
    const temp = await getFolder();
    setFullData(temp?.folder?.links);
  };

  useEffect(() => {
    getFolderOwner();
  }, []);

  return (
    <>
      <header style={{ padding: "6rem 0 9rem 0" }}>
        <AddLink />
      </header>
      <Search />
      {fullData && <Cards fullData={fullData} />}
    </>
  );
};

export default Header;
