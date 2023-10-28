import React from "react";
import styled from "styled-components";

const BaseButton = styled.button`
  background: #fff;
  border: none;
  border: 1px solid var(--primary);
  border-radius: 4px;
  height: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
  @media (min-width: 768px) {
  }

  /* table2 */
  @media (min-width: 1124px) {
  }

  /* descktop*/
  @media (min-width: 1200px) {
  }
`;

export default function Button({ children, className, name, onClickFunc }) {
  return (
    <BaseButton name={name} className={className} onClick={onClickFunc}>
      {children}
    </BaseButton>
  );
}
