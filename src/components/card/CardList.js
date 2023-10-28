import Card from "./Card";
import { Fragment } from "react";
import "./Card.css";

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
