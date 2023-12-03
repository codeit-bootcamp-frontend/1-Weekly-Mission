import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import QUERY_KEYS from "src/constants/queryKeys";
import { getUserProfile } from "src/libs/apis/profile";
import styled from "styled-components";

function UserInform() {
  const { data } = useQuery<User[]>({
    queryKey: [QUERY_KEYS.user],
    queryFn: getUserProfile,
  });

  return (
    <StyldProfileWrapper>
      <StyldProfileInWrapper>
        {data?.map((item) => (
          <>
            <Image
              src={item.image_source}
              alt="프로필 사진"
              width={30}
              height={30}
            />
            <span key={item.id}>{item.email}</span>
          </>
        ))}
      </StyldProfileInWrapper>
    </StyldProfileWrapper>
  );
}

export default UserInform;

const StyldProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
`;

const StyldProfileInWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;
