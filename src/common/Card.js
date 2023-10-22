import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 500px;
  height: 400px;
  font-size: 1.5rem;
  font-weight: bold;
  row-gap: 2rem;
  border-radius: 10px;
  width: 100%;

  /* tablet */
  @media (min-width: 768px) and (max-width: 1123px) {
    /* width: 100%; */
  }

  /* tablet2 */
  @media (min-width: 1124px) {
    /* width: 100%; */
  }

  /* descktop*/
  @media (min-width: 1200px) {
    width: 80%;
  }
`;
export default function Card({ onClickFunc, children }) {
  return <CardContainer onClick={onClickFunc}>{children}</CardContainer>;
}
