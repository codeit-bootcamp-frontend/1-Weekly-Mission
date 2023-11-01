import { useQuery } from "@tanstack/react-query";
import { DEFAULT_PROFILE_IMAGE } from "constants/common";
import QUERY_KEYS from "constants/queryKeys";
import { getUserProfile } from "libs/apis/profile";
import styled from "styled-components";
import manageStatus from "utils/manageStatus";

function UserInform() {
  const { isLoading, isError, data } = useQuery<User[]>({
    queryKey: [QUERY_KEYS.user],
    queryFn: getUserProfile,
  });

  if (isLoading || isError) {
    return manageStatus({ isLoading, isError });
  }

  return (
    <StyldProfileWrapper>
      <StyldProfileInWrapper>
        <img src={DEFAULT_PROFILE_IMAGE} alt="profile" />
        {data?.map((item) => (
          <span key={item.id}>{item.email}</span>
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
