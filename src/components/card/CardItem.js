import * as style from "./CardItemStyle";

import logo from "assets/logo.svg";
import { getCreatedDate, getDiffTime } from "common/utils/dateUtils";

export default function CardItem({ link }) {
  const { description, imageSource, createdAt } = link;
  const { yyyy, mm, dd } = getCreatedDate(createdAt);

  return (
    <style.Wrapper>
      <style.Container>
        <style.CardImage src={imageSource ? imageSource : logo} isimageurl={imageSource} />
      </style.Container>
      <style.CardInfo>
        <style.TimeDiff>{getDiffTime(createdAt)}</style.TimeDiff>
        <style.Description>{description}</style.Description>
        <style.CreatedAt>
          {yyyy}. {mm}. {dd}
        </style.CreatedAt>
      </style.CardInfo>
    </style.Wrapper>
  );
}
