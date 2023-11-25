import requestAPI from "../api";

// 특정 ID에 따른 유저의 정보를 요청
const getUserById = async (id: string) => {
  const { result } = await requestAPI(`users/${id}`);

  return result;
};

export default getUserById;
