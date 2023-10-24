import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as Searchbar } from "../assets/searchbar.svg";
import { getfoldersData } from "../api/folder";
import ImageList from "../components/ImageList";
import "./LandingPage.css";
const LandingResponsive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 5px solid red;
  /* width: 80%; */
`;

const ResponiveSearchBar = styled.div``;

export default function LandingPage() {
  const [items, setItems] = useState([]);

  // const handleCardData = async () => {
  //   const { folder } = await getfoldersData();
  //   const { links } = folder;
  //   setItems(links);
  // };

  useEffect(() => {
    async function fetchingFolder() {
      setItems([]);
      const { folder } = await getfoldersData();
      const { links } = folder;
      if (!isLoading) {
        setItems(links);
      }
    }
    let isLoading = false;
    fetchingFolder();
    return () => {
      isLoading = true;
    };
  }, []);

  // useEffect(() => {
  //   handleCardData();
  // }, []);

  return (
    <LandingResponsive>
      <Searchbar className="search-bar" />
      <ImageList items={items} />
    </LandingResponsive>
  );
}
