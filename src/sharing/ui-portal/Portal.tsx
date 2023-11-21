import { ReactNode, useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children?: ReactNode;
  container?: HTMLButtonElement | null;
}

export const Portal = ({ children, container }: PortalProps) => {
  const [mountNode, setMountNode] = useState<HTMLElement | null>(null);

  useLayoutEffect(() => {
    setMountNode(container || document.body);
  }, [container]);

  return mountNode ? createPortal(children, mountNode) : mountNode;
};
