import useSWR from "swr";
import * as S from "./HeroStyles";

import { SharedFolderData } from "@/types/folder";
import { User } from "@/types/user";
import Loading from "@/components/Loading";

interface HeroProps {
  folder: SharedFolderData;
}

export default function Hero({ folder }: HeroProps) {
  const { data, isLoading } = useSWR<{ data: User[] }>(`/api/users/${folder.user_id}`);

  return (
    <S.HeroContainer>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <S.Profile>
            <S.Image src={data?.data[0].image_source} alt="avatar" />
            <S.Name>{data?.data[0].name}</S.Name>
          </S.Profile>
          <S.Title>{folder?.name}</S.Title>
        </>
      )}
    </S.HeroContainer>
  );
}
