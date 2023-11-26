import React from "react";
import "./Skeleton.css";
export default function SkeletonStructure({ type }) {
  const classes = `skeleton ${type}`;
  return <div className={classes}></div>;
}
