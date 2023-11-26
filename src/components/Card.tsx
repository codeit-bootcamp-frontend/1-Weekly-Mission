import noImage from '../asset/no-image.svg';
import { dateCalculator } from './dateCalculator';
import * as C from './styled-component/CardStyledComponent';
import { ItemState } from '../pages/SharedPage';

interface CardProps {
  item: ItemState;
}

export default function Card({ item }: CardProps) {
  const apiDate = new Date(item.createdAt);
  const elapsedTime = dateCalculator(apiDate);
  const year = apiDate.getFullYear();
  const month = apiDate.getMonth() + 1;
  const days = apiDate.getDate();

  if (item.imageSource === undefined) {
    item.imageSource = noImage;
  }

  return (
    <C.CardWrapper to={item.url} target="_blank">
      <C.CardBox>
        <C.CardImgDiv>
          <C.CardImg
            className="card-img"
            src={item.imageSource}
            alt={item.title}
          />
        </C.CardImgDiv>
        <C.CardText>
          <C.CardTimeAgo>{elapsedTime}</C.CardTimeAgo>
          <C.TextDescription>{item.description}</C.TextDescription>
          <C.CardYear>{`${year}. ${month}. ${days}`}</C.CardYear>
        </C.CardText>
      </C.CardBox>
    </C.CardWrapper>
  );
}
