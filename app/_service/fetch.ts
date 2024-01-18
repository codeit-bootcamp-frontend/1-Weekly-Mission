import { cookies } from "next/headers";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

type MethodType = "GET" | "POST" | "PUT" | "DELETE";
interface CacheType {
  cache?: RequestCache;
  next?: {
    revalidate: number;
  };
}

interface InstanceProps {
  method: MethodType;
  url: string;
  body?: {};
  cache?: CacheType;
}

type RequestStateType = "success" | "error";
interface ErrorType {
  status: number;
  message: string;
}

interface ResponsePropsType<T> {
  state: RequestStateType;
  data?: T;
  error?: ErrorType;
}

const instance = async <T>({ method, url, body, cache }: InstanceProps) => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  const response = await fetch(`${BASE_URL}${url}`, { method, body: JSON.stringify(body), ...cache, ...(accessToken && { headers: { Authorization: `Bearer ${accessToken}` } }) });

  if (response.status >= 400) {
    const res: ResponsePropsType<T> = {
      state: "error",
      error: { status: response.status, ...(await response.json()) },
    };
    return res;
  } else {
    const res: ResponsePropsType<T> = {
      state: "success",
      data: await response.json(),
    };
    return res;
  }
};

export const request = {
  get: <T>(url: string, cache?: CacheType) => instance<T>({ method: "GET", url, cache }),
  post: <T>(url: string, body: {}) => instance<T>({ method: "POST", url, body }),
  put: <T>(url: string, body: {}) => instance<T>({ method: "PUT", url, body }),
  delete: <T>(url: string) => instance<T>({ method: "DELETE", url }),
};
