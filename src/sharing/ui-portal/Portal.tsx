import { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: React.ReactNode;
  container?: HTMLElement;
}

export const Portal = ({ children, container }: PortalProps) => {
  const [mountNode, setMountNode] = useState<HTMLElement | null>(null);

  useLayoutEffect(() => {
    setMountNode(container || document.body);
  }, [container]);

  return mountNode ? createPortal(children, mountNode) : null;
};
