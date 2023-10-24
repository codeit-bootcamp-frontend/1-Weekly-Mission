import React from "react";
import styled from "styled-components";
import Card from "../common/Card";
import "./ImageList.css";
import { changeDateFormat, compareNowAndAfter } from "../utils";

const ResponiveImageContainer = styled.div`
  border: 5px solid blue;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 5rem;
  padding: 0 3.2rem;

  /* tablet1 */
  @media (min-width: 768px) and (max-width: 1123px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 3.2rem;
    column-gap: 2.5rem;
  }

  /* tablet2 */
  @media (min-width: 1124px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 0 3.2rem;
    column-gap: 2.5rem;
  }

  /* descktop*/
  @media (min-width: 1200px) {
    padding: 0 20rem;
    padding: 6rem 20rem 10rem;

    grid-template-columns: repeat(3, 1fr);
  }
`;

function ImageListItem({ item }) {
  const { createdAt, url, title, description, imageSource } = item;
  const currentData = changeDateFormat(new Date());
  const targetData = changeDateFormat(createdAt);
  //const result = compareNowAndAfter(currentData, targetData);
  const { year, month, day } = targetData;

  const navgiateToPage = (url) => {
    window.location.href = `${url}`;
  };

  return (
    <>
      <Card onClickFunc={() => navgiateToPage(url)}>
        <img
          className="card-image"
          src={imageSource}
          alt={title}
          // width="100%"
          // height="250"
        />
        <p>시간계산함수만들어야함 </p>
        <p>{description}</p>
        <p>
          {year}. {month}. {day}
        </p>
      </Card>
    </>
  );
}

export default function ImageList({ items }) {
  return (
    <ul>
      <ResponiveImageContainer>
        {items.map((item) => (
          <li key={item.id}>
            <ImageListItem item={item} />
          </li>
        ))}
      </ResponiveImageContainer>
    </ul>
  );
}
