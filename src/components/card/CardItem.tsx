import Image from "next/image";
import { MouseEvent, useEffect, useState } from "react";
import { mutate } from "swr";
import classNames from "classnames";
import styles from "./Card.module.css";

import KebabMenu from "@/components/Kebabmenu";
import ToggleButton from "@/components/button/ToggleButton";
import FilledStarIcon from "@/components/ui/icons/FilledStarIcon";
import StarIcon from "@/components/ui/icons/Star";

import { getCreatedDate, getDiffTime } from "@/common/utils/dateUtils";
import { LinkData } from "@/types/link";
import { DOMAIN_URL } from "@/common/constants";

interface CardItemProps {
  link: LinkData;
}

export default function CardItem({ link }: CardItemProps) {
  const [accessToken, setAccessToken] = useState<string | null>();
  const [imageUrl, setImageUrl] = useState(link.image_source);

  const { description, image_source, created_at } = link;
  const { yyyy, mm, dd } = getCreatedDate(created_at);

  const cardStyle = classNames(styles.default, { [styles["card-image"]]: image_source });

  const handleImageError = () => {
    setImageUrl("/images/logo.svg");
  };

  const fetcher = async (url: string) => {
    if (accessToken) {
      return await fetch(`${DOMAIN_URL}${url}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({ favorite: !link.favorite }),
      }).then(() => mutate("/links"));
    }
  };

  const toggleLiked = async (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    try {
      const result = await fetcher(`/links/${link.id}`);
      console.log(result); // error
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("accessToken") !== null) {
      setAccessToken(localStorage.getItem("accessToken"));
    }
  }, [accessToken]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles["card-container"]}>
          <Image
            src={imageUrl}
            alt="link"
            className={cardStyle}
            fill
            onError={handleImageError}
            priority
          />
        </div>
        <div className={styles.liked}>
          <ToggleButton
            toggle={link.favorite}
            onToggle={toggleLiked}
            onIcon={<FilledStarIcon />}
            offIcon={<StarIcon />}
          />
        </div>
      </div>
      <div className={styles["card-info"]}>
        <div className={styles.info}>
          {getDiffTime(created_at)}
          <KebabMenu link={link} />
        </div>
        <p className={styles.description}>{description}</p>
        <p className={styles.createAt}>
          {yyyy}. {mm}. {dd}
        </p>
      </div>
    </div>
  );
}
