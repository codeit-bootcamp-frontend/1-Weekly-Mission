import { ReactNode, useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

type PortalProps = {
  children: ReactNode;
  container?: Element | DocumentFragment | null;
};

export const Portal = ({ children, container }: PortalProps) => {
  const [mountNode, setMountNode] = useState<Element | DocumentFragment | null>(null);

  useLayoutEffect(() => {
    setMountNode(container || document.body);
  }, [container]);

  return mountNode ? createPortal(children, mountNode) : mountNode;
};
