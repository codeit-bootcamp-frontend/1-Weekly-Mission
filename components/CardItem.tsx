import Image from "next/image";
import { styled } from "styled-components";
import { getTimeDiff } from "@/utils/getTimeDiff";
import { Link } from "@/lib/Type";

interface Item {
  imageSource?: string;
  image_source?: string;
  createdAt?: string;
  created_at?: string;
  description?: string;
}

interface CardItemProps {
  item: Item | Link;
}

export default function CardItem({ item = {} }: CardItemProps) {
  const imgStyle = {
    backgroundImage: `URL(${
      item.imageSource || item.image_source || "/images/noImage.png"
    })`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    width: `100%`,
    borderTopLeftRadius: "15px",
    borderTopRightRadius: "15px",
  };

  const nowDate = getTimeDiff(
    new Date(item.createdAt || item.created_at || new Date())
  );

  return (
    <Card>
      <ImgWrapper>
        <CardImg style={imgStyle}></CardImg>
      </ImgWrapper>
      <Info>
        <Container>
          <Time>{nowDate}</Time>
          <KebabButton>
            <KebabImg src="/images/kebab.svg" width={21} height={17} alt="" />
          </KebabButton>
        </Container>
        <p>{item.description}</p>
        <Day>
          {item.createdAt?.split("T")[0] || item.created_at?.split("T")[0]}
        </Day>
      </Info>
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 15px;
  width: 34rem;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.08);
`;

const ImgWrapper = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  position: relative;
`;

const CardImg = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  &:hover {
    transform: scale(130%);
    transition: 1s;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
  min-height: 10.5rem;
  padding: 1.5rem 2rem;

  & p {
    display: block;
    min-height: 4.8rem;

    overflow: hidden;
    /* 2줄이상 긴텍스트 생략 */
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }

  &:hover {
    background: var(--linkbrary-bg);
  }
`;

const Time = styled.div`
  color: #666;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Day = styled.div`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #333;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const KebabButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const KebabImg = styled(Image)``;
