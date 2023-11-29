import React, { useRef, useState } from "react";
import styles from "./DataListItem.module.css";
import Card from "@/components/card/Card";
import { getElapsedTime, parseDatestring } from "@/utils/caltime";
import Kebab from "@/public/images/kebab.png";

export default function DataListItem({ item }) {
  const [open, setOpen] = useState(false);
  const { id, url, title, image_source, description, created_at } = item;
  const targetData = parseDatestring(created_at);
  const { year, month, day } = targetData;
  const diffTime = getElapsedTime(created_at);
  const imageRef = useRef();

  return (
    <>
      <Card>
        <div className={styles.container}>
          <a href={url}>
            <img
              className={styles.card__image}
              src={image_source}
              alt={title}
            />
          </a>
          <div className={styles.sub__container}>
            <p>{diffTime}</p>
            <img
              ref={imageRef}
              src={Kebab}
              alt="kebab"
              className={styles.kebab}
              onClick={(e) => {
                e.stopPropagation();
                setOpen(!open);
              }}
            />

            {open && <DropDown linkUrl={url} />}
          </div>
          <div className={styles.bottom}>
            <p>{description}</p>
            <p>
              {year}. {month}. {day}
            </p>
          </div>
        </div>
      </Card>
    </>
  );
}
