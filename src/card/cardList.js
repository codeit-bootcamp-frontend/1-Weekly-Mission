import Card from "./card";
import { Fragment } from "react";
import "./card.css";

const CardList = ({ items }) => {
  return (
    <div className="card_wrapper">
      {items.map((item) => {
        return (
          <Fragment key={item.id}>
            <Card item={item} />
          </Fragment>
        );
      })}
    </div>
  );
};

export default CardList;
