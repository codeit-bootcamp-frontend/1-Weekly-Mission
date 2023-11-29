import styled from "styled-components";
import noImg from "../../image/noimg.svg";
import { formatDate, getTimeDiff } from "../../utils/getTime";
import CardContent from "./CardContent";
import CardDate from "./CardDate";
import CardImage from "./CardImage";
import CardTime from "./CardTime";
import Kebab from "./Kebab";

interface ItemProps {
  item: {
    id: number;
    createdAt?: string;
    created_at?: string;
    url: string;
    title: string;
    description: string;
    imageSource?: string;
    image_source?: string;
  };
}

const Card = ({ item }: ItemProps) => {
  const { id, createdAt, created_at, url, title, description, imageSource, image_source } = item;
  const get_time = (createdAt && getTimeDiff(createdAt)) || (created_at && getTimeDiff(created_at));
  const get_date = (createdAt && formatDate(createdAt)) || (created_at && formatDate(created_at));

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
        <CardContent url={url} title={title} description={description} />
        <CardDate set_date={get_date} />
      </Description>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 34rem;
  height: 34rem;
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
