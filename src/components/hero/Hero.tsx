import * as S from "./HeroStyles";
import { Owner } from "@/types/user";

interface HeroProps {
  folder: string;
  profile: Owner;
}

export default function Hero({ folder, profile }: HeroProps) {
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
