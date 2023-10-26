import React from "react";
import SkeletonStructure from "./SkeletonStructure";

export default function ItemSkeleton({ type }) {
  return (
    <div className="skeleton-wrapper">
      <SkeletonStructure type="image" />
      <SkeletonStructure type="avatar" />
      <SkeletonStructure type="title" />
    </div>
  );
}
