import { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

const ModalPortal = ({ children, container }) => {
  const [mountNode, setMountNode] = useState(null);
  const el = document.getElementById("modal"); // 독립 공간

  useLayoutEffect(() => {
    setMountNode(container || el);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [container]);

  return mountNode ? createPortal(children, mountNode) : mountNode;
};

export default ModalPortal;
