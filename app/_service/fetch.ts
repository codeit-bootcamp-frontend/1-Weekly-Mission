import { cookies } from "next/headers";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

type Method = "GET" | "POST" | "PUT" | "DELETE";
interface Cache {
  cache?: RequestCache;
  next?: {
    revalidate: number;
  };
}

interface InstanceProps {
  method: Method;
  url: string;
  body?: BodyInit;
  cache?: Cache;
}

type RequestState = "success" | "error";
interface Error {
  status: number;
  message: string;
}

interface ResponseProps<T> {
  state: RequestState;
  data?: T;
  error?: Error;
}

const instance = async <T>({ method, url, body, cache }: InstanceProps) => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  const response = await fetch(`${BASE_URL}${url}`, { method, body, ...cache, ...(accessToken && { headers: { Authorization: `Bearer ${accessToken}` } }) });

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
  get: <T>(url: string, cache?: Cache) => instance<T>({ method: "GET", url, cache }),
  post: <T>(url: string, body: BodyInit) => instance<T>({ method: "POST", url, body }),
  put: <T>(url: string, body: BodyInit) => instance<T>({ method: "PUT", url, body }),
  delete: <T>(url: string) => instance<T>({ method: "DELETE", url }),
};
