import { getAccessToken } from "@/utils/handleAccessToken";
import { InstanceProps, ResponseProps } from "@/types/instanceType";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const instance = async <T>({ method, url, body }: InstanceProps) => {
  const accessToken = getAccessToken();

  const response = await fetch(`${BASE_URL}${url}`, {
    method,
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json", ...(accessToken && { Authorization: `Bearer ${accessToken}` }) },
  });

  if (response.status >= 400) {
    const res: ResponseProps<T> = {
      state: "error",
      error: { status: response.status, ...(await response.json()) },
    };
    return res;
  } else {
    const res: ResponseProps<T> = {
      state: "success",
      data: await response.json(),
    };
    return res;
  }
};

export const request = {
  get: <T>(url: string) => instance<T>({ method: "GET", url }),
  post: <T>(url: string, body: {}) => instance<T>({ method: "POST", url, body }),
  put: <T>(url: string, body: {}) => instance<T>({ method: "PUT", url, body }),
  delete: <T>(url: string) => instance<T>({ method: "DELETE", url }),
};
