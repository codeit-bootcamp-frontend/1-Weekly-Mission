import { useState, useEffect, ReactNode } from "react";

interface Props {
  isLoading: boolean;
  fallback: ReactNode;
  children: ReactNode;
}

const Loadable = ({ isLoading, fallback, children }: Props) => {
  return isLoading ? (fallback as JSX.Element) : (children as JSX.Element);
};

export default Loadable;
