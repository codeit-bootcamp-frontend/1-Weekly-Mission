import useSWR from "swr";
import * as S from "./HeroStyles";

import Loading from "@/components/Loading";

import { SharedFolderData } from "@/types/folder";
import { User } from "@/types/user";

interface HeroProps {
  folder: SharedFolderData;
}

export default function Hero({ folder }: HeroProps) {
  const { data, isLoading } = useSWR<User[]>(`/users/${folder.user_id}`);

  return (
    <S.HeroContainer>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <S.Profile>
            {data?.map((user) => (
              <div key={user.id}>
                <S.Image src={user.image_source} alt="avatar" />
                <S.Name>{user.name}</S.Name>
              </div>
            ))}
          </S.Profile>
          <S.Title>{folder?.name}</S.Title>
        </>
      )}
    </S.HeroContainer>
  );
}
