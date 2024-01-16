/*folder에 관한 api*/

import { axiosInstance } from "./axiosInstance";

// 로그인한 유저의 전체 카드 리스트를 조회하는 api
export async function getAllCards() {
  const response = await axiosInstance.get(`/links`);
  return response.data;
}

// 한 폴더 내의 카드 리스트를 조회하는 api
export async function getCards(folderId: string) {
  const response = await axiosInstance.get(`/folders/${folderId}/links`);
  return response.data;
}

// card Create api
export async function createCard(url: string, folderId: string) {
  const response = await axiosInstance.post(`/links`, {
    url: url,
    folderId: folderId,
  });
  return response;
}

// card Delete api
export async function deleteCard(cardId: string) {
  const response = await axiosInstance.delete(`/links/${cardId}`);
  return response;
}

// TODO - card update api

// TODO - user에 대한 전체 카드 리스트 조회 api
