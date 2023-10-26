import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
import { ReactComponent as Searchbar } from "../../assets/images/searchbar.svg";
import ImageList from "../imageList/ImageList";
import ItemSkeleton from "../skeleton/ItemSkeleton";

export default function Landing({ data, isLoading }) {
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
