import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as Searchbar } from "../assets/searchbar.svg";
import { getCardPics } from "../api";
import ImageList from "../components/ImageList";

const ResponiveSearchBar = styled.div`
  border: 5px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 3.2rem;
  row-gap: 10rem;
  /* tablet */
  @media (min-width: 768px) {
    height: 9.5rem;
  }
  /* descktop*/
  @media (min-width: 1200px) {
    padding: 0 20rem;
    height: 9.5rem;
  }
`;

export default function LandingPage() {
  const [items, setItems] = useState([]);
  const handleCardData = async () => {
    const { folder } = await getCardPics();
    const { links } = folder;
    setItems(links);
  };

  useEffect(() => {
    handleCardData();
  }, []);

  return (
    <div>
      <ResponiveSearchBar>
        <Searchbar />
      </ResponiveSearchBar>
      <ImageList items={items} />
    </div>
  );
}
