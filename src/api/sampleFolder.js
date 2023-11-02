import { API } from "../config";

export async function getSampleFolder() {
  const res = await fetch(API.sampleFolder);
  const userFolder = await res.json();
  if (res?.status === 200) return userFolder;
  return null;
}
