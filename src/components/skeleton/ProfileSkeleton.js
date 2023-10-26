import React, { useContext } from "react";
import SkeletonStructure from "./SkeletonStructure";
import LocaleContext from "../../contexts/LocaleContext";
export default function ProfileSkeleton({ type }) {
  // const locale = useContext(LocaleContext);
  // console.log(locale);
  return (
    <div className="skeleton-wrapper">
      <SkeletonStructure type="image" />
      <SkeletonStructure type="avatar" />
      <SkeletonStructure type="title" />
    </div>
  );
}
