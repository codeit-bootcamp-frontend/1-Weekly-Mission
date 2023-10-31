import * as style from "./HeroStyle";

export default function Hero({ folder, profile }) {
  return (
    <>
      <style.Profile>
        <style.Image src={profile?.profileImageSource} alt="avatar" />
        <style.Name>{profile?.name}</style.Name>
      </style.Profile>
      <style.Title>{folder}</style.Title>
    </>
  );
}
