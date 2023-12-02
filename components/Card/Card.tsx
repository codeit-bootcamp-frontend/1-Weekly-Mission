import * as S from './Card.Style';

const Card = () => {
  return (
    <>
      <S.Container>
        <S.PrevImg
          src='https://s3-alpha-sig.figma.com/img/66a3/9ed0/f55ea07a04214e06cbf1f8d998c94a0e?Expires=1702252800&Signature=m0sEPYVhviXWG9u-0eNkegjAouCfHuLzjg-u99d1IlS8ZAZPiOaUAficTWZ1mdKFatx1GjwGMqAPIweKooyteuLNwGCfw8TDrQGx2j8R7wN1WpN0qXL8ikLFPidqT4~5NN1i3ll1aHxjZs2pDSZ0auGG1vkm0QCxgd8pIqH4yWLSct2PZIgbxiWLu0fMru366ATg3~SQguBQiFBDjJFdXwStjET0B2AS34d1la5V1idLbxJvCQ-H0~RK0tCTErjO1toQLAgfQKTHmqyk~K7ZiX5qv9AgpGC9srqS9HzJVvLkk0NkpNxnpnbsSJXJIcy~S-2mHzr6vXr~nHzmCb5j3Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
          alt='PrevImg'
        />
        <S.CardContainer>
          <S.Time>10 minutes ago</S.Time>
          <S.Description>
            Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc
            consequat. Tldkddvfasdfdsfdsfdsfasfdfasdf
          </S.Description>
          <S.Date>2023. 3. 15</S.Date>
        </S.CardContainer>
      </S.Container>
    </>
  );
};

export default Card;
