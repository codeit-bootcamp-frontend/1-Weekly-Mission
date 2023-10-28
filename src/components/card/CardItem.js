import * as style from "./CardItemStyle";

import logo from "assets/logo.svg";
import Star from "components/icon/Star";
import kebabIcon from "assets/kebab.svg";

import { getCreatedDate, getDiffTime } from "common/utils/dateUtils";

export default function CardItem({ link }) {
  const { description, image_source: imageSource, created_at: createdAt } = link;
  const { yyyy, mm, dd } = getCreatedDate(createdAt);

  return (
    <style.Wrapper>
      <style.Container>
        <style.CardImage src={imageSource ? imageSource : logo} isimageurl={imageSource} />
        <style.Icon>
          <Star />
        </style.Icon>
      </style.Container>
      <style.CardInfo>
        <style.Info>
          {getDiffTime(createdAt)}
          <img src={kebabIcon} />
        </style.Info>
        <style.Description>{description}</style.Description>
        <style.CreatedAt>
          {yyyy}. {mm}. {dd}
        </style.CreatedAt>
      </style.CardInfo>
    </style.Wrapper>
  );
}
