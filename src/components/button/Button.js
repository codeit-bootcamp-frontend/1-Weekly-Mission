import React from "react";
import styled from "styled-components";
//
const BaseButton = styled.button`
  background: #fff;
  border: none;
  border: 1px solid var(--primary);
  border-radius: 4px;
  height: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export default function Button({ children, className }) {
  return <BaseButton className={className}>{children}</BaseButton>;
}
