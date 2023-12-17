import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { useEffectOnce } from "@/lib/hooks/useEffectOnce";
import axios from "@/lib/utils/axiosInstance";
import { Folders, Links } from "../types/data";

const BASE_URL = "https://bootcamp-api.codeit.kr/api";

export function useFetchShareData(folderId: string, userId: number) {
  const [folderInfo, setFolderInfo] = useState<Folders>({
    data: [],
  });
  const [linkInfo, setLinkInfo] = useState<Links>({
    data: [],
  });
  const router = useRouter();

  const execute = async () => {
    try {
      const requestFolderInfo = axios.get(`/folders/${folderId}`);
      const requestLinkInfo = axios.get(
        `/users/${userId}/links?folderId=${folderId}`
      );
      const [folderInfo, linkInfo] = await Promise.all([
        requestFolderInfo,
        requestLinkInfo,
      ]);
      const { data: FolderData } = folderInfo.data;
      const { data: LinkData } = linkInfo.data;
      setFolderInfo((prev) => ({
        ...prev,
        data: FolderData,
      }));
      setLinkInfo((prev) => ({
        ...prev,
        data: LinkData,
      }));
    } catch {
      router.push("/404");
    }
  };

  useEffectOnce(execute);

  return { folderInfo, linkInfo };
}

export function useFetchFolderData(folderId: string) {
  const [folderData, setFolderData] = useState<Folders>({
    data: [],
  });
  const [linkData, setLinkData] = useState<Links>({
    data: [],
  });
  const router = useRouter();

  const execute = useCallback(async () => {
    try {
      const requestFolderLists = axios.get("/folders");
      const requestLinks = axios.get(
        folderId ? `/links?folderId=${folderId}` : "/links"
      );
      const [folderLists, links] = await Promise.all([
        requestFolderLists,
        requestLinks,
      ]);
      const {
        data: { folder: FolderData },
      } = folderLists.data;
      const {
        data: { folder: LinkData },
      } = links.data;
      setFolderData((prev) => ({
        ...prev,
        data: FolderData,
      }));
      setLinkData((prev) => ({
        ...prev,
        data: LinkData,
      }));
    } catch {
      router.push("/404");
    }
  }, [folderId, router]);

  useEffect(() => {
    execute();
  }, [execute]);

  return { folderData, linkData };
}

export async function handleCopyClipBoard(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    alert("클립보드에 링크가 복사되었어요.");
  } catch (err) {
    console.log(err);
  }
}

export async function validateOverlapEmail(email = "") {
  const formData = JSON.stringify({
    email: email,
  });
  const response = await fetch(`${BASE_URL}/check-email`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: formData,
  });
  if (!response.ok) {
    throw new Error("이미 존재하는 이메일입니다.");
  }
  const body = await response.json();
  return body;
}
