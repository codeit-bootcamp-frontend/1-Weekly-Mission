import React, { useState } from "react";
import { useQuery, useMutation } from "react-query";

const fetchData = async () => {
  const response = await fetch("https://bootcamp-api.codeit.kr/api/users/1");
  return response.json();
};

// export const fetchUserData = async ({ userId }) => {
//   const response = await fetch(
//     `https://bootcamp-api.codeit.kr/api/users/${userId}`
//   );
//   return response.json();
// };

export default function Query() {
  const [status, isLoading, data] = useQuery(["user1", fetchData]);

  //   const [status, isLoading, data] = useQuery(["user1", { userId: 1 }], () =>
  //     fetchUserData({ userId: 1 })
  //   );

  console.log(data);
}
