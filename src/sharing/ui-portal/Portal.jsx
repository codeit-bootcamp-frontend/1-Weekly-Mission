import { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

export const Portal = ({ children, container }) => {
  const [mountNode, setMountNode] = useState(null);

  useLayoutEffect(() => {
    setMountNode(container || document.body);
  }, [container]);

  return mountNode ? createPortal(children, mountNode) : mountNode;
};
