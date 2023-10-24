import React, { useState, useEffect } from "react";

import { ReactComponent as Searchbar } from "../assets/imgs/searchbar.svg";
import { getfoldersData } from "../api/folder";
import ImageList from "../components/imageList/ImageList";
import "./LandingPage.css";

export default function LandingPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchingFolder() {
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

  console.log(items);
  return (
    <div>
      <Searchbar />
      <ImageList items={items} />
    </div>
  );
}
