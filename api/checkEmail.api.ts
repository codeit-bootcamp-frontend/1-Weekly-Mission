import { fetchPost } from "./api";
import { CheckEmailItem } from "../types/api";

interface fetchCheckEmailProps {
  email: string;
}

export const fetchCheckEmail = ({ email }: fetchCheckEmailProps) => {
  const body = { email };
  return fetchPost("/api/check-email", body) as Promise<{
    data: CheckEmailItem;
  }>;
};
