import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
import { ReactComponent as Searchbar } from "../assets/images/searchbar.svg";
import ImageList from "../components/imageList/ImageList";
import ItemSkeleton from "../components/skeleton/ItemSkeleton";
import "./LandingPage.css";

export default function LandingPage({ data, isLoading }) {
  return (
    <div>
      <Searchbar />
      {!isLoading ? (
        <ImageList items={data} isLoading={isLoading} />
      ) : (
        <ItemSkeleton />
      )}
    </div>
  );
}
