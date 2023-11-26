import React from "react";

import ImageList from "../imagelist/ImageList";

export default function Landing({ data, isLoading }) {
  return (
    <div>{!isLoading && <ImageList items={data} isLoading={isLoading} />}</div>
  );
}
