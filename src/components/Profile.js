import * as N from './styled-component/NavStyledComponent';

export default function Profile(data) {
  return (
    <N.ProfileDiv>
      <N.ProfileDivLogo>
        {data.item.id ? (
          <N.ProfileHumanImg
            src={data.item.profileImageSource}
            alt="profileImg"
          />
        ) : (
          <N.ProfileHumanImg src={data.item[0].image_source} alt="profileImg" />
        )}
      </N.ProfileDivLogo>
      {data.item.id ? (
        <N.ProfileDivMail>{data.item.email}</N.ProfileDivMail>
      ) : (
        <N.ProfileDivMail>{data.item[0].email}</N.ProfileDivMail>
      )}
    </N.ProfileDiv>
  );
}
