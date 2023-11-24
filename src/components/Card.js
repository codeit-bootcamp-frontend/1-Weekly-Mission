import noImage from './img/no-image.svg';
import { dateCalculator } from './dateCalculator';
import * as C from './css/CardStyledComponent';

export default function Card(item) {
  const apiDate = new Date(item.item.createdAt);
  const elapsedTime = dateCalculator(apiDate);
  const year = apiDate.getFullYear();
  const month = apiDate.getMonth() + 1;
  const days = apiDate.getDate();

  if (item.item.imageSource === undefined) {
    item.item.imageSource = noImage;
  }

  return (
    <C.CardWrapper to={item.item.url} target="_blank">
      <C.CardBox>
        <C.CardImgDiv>
          <img
            className="card-img"
            src={item.item.imageSource}
            alt={item.item.title}
          />
        </C.CardImgDiv>
        <C.CardText>
          <C.CardTimeAgo>{elapsedTime}</C.CardTimeAgo>
          <C.TextDescription>{item.item.description}</C.TextDescription>
          <C.CardYear>{`${year}. ${month}. ${days}`}</C.CardYear>
        </C.CardText>
      </C.CardBox>
    </C.CardWrapper>
  );
}
