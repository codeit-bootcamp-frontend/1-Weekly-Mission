import { Container, ProfileImg, ProfileText } from "@/components/Nav/Avatar/Profile.styled";
import axiosInstance from "@/lib/axios";
import defaultProfileImg from "@/public/Avatar.png";
import { getCookie } from "@/utils/getCookie";
import { useQuery } from "@tanstack/react-query";

export default function Profile() {
  const userData = useQuery({
    queryKey: ["userId"],
    queryFn: async () => {
      const accessToken = getCookie("accessToken");
      const res = await axiosInstance.get("/users", { headers: { Authorization: accessToken } });
      return res.data[0];
    },
  });
  const { image_source, email } = userData?.data;

  return (
    <Container>
      <ProfileImg src={image_source ?? defaultProfileImg.src} alt="프로필 사진" />
      <ProfileText>{email}</ProfileText>
    </Container>
  );
}
