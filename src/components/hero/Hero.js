import * as S from "./HeroStyle";

export default function Hero({ folder, profile }) {
  return (
    <>
      <S.Profile>
        <S.Image src={profile?.profileImageSource} alt="avatar" />
        <S.Name>{profile?.name}</S.Name>
      </S.Profile>
      <S.Title>{folder}</S.Title>
    </>
  );
}
