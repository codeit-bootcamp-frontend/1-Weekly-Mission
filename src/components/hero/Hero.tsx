import { User } from "types/user";
import * as S from "./HeroStyle";

interface HeroProps {
  folder: string;
  profile: User;
}

/**Hero 확인하기 */
export default function Hero({ folder, profile }: HeroProps) {
  return (
    <>
      {/* <S.Profile>
        <S.Image src={profile?.profileImageSource} alt="avatar" />
        <S.Name>{profile?.name}</S.Name>
      </S.Profile>
      <S.Title>{folder}</S.Title> */}
    </>
  );
}
