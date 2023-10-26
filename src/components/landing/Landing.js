import React from "react";
import "react-loading-skeleton/dist/skeleton.css";

import ImageList from "../imageList/ImageList";
import ItemSkeleton from "../skeleton/ItemSkeleton";

export default function Landing({ data, isLoading }) {
  return (
    <div>
      {!isLoading ? (
        <ImageList items={data} isLoading={isLoading} />
      ) : (
        <ItemSkeleton />
      )}
    </div>
  );
}
