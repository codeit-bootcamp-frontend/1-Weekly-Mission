import styled from "styled-components";
import CardImage from "./CardImage";
import CardTime from "./CardTime";
import Kebab from "./Kebab";
import CardContent from "./CardContent";
import CardDate from "./CardDate";
import { getTimeDiff, formatDate } from "../../utils/getTime";

import noImg from "../../image/noimg.svg";

const Card = ({ item }) => {
  const {
    id,
    createdAt,
    created_at,
    url,
    description,
    imageSource,
    image_source,
  } = item;
  const get_time = getTimeDiff(createdAt || created_at);
  const get_date = formatDate(createdAt || created_at);

  return (
    <Wrapper key={id}>
      <Image>
        <CardImage src={imageSource || image_source || noImg} />
      </Image>
      <Description>
        <TimeWrapper>
          <CardTime set_time={get_time} />
          <Kebab link={url} />
        </TimeWrapper>
        <CardContent url={url}>{description}</CardContent>
        <CardDate set_date={get_date} />
      </Description>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 34rem;
  height: 33.4rem;
  flex-shrink: 0;
  border-radius: 1.5rem;
  box-shadow: 0 0.5rem 2.5rem 0 rgba(0, 0, 0, 0.08);
`;

const Image = styled.div`
  height: 20rem;
  position: relative;
  border-radius: 1.5rem 1.5rem 0 0;
  overflow: hidden;
`;

const Description = styled.div`
  display: flex;
  width: 34rem;
  padding: 1.5rem 2rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

const TimeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
`;

export default Card;
