type MethodType = "GET" | "POST" | "PUT" | "DELETE";

export interface CacheType {
  cache?: RequestCache;
  next?: {
    revalidate: number;
  };
}

export interface InstanceProps {
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

export interface ResponseProps<T> {
  state: RequestStateType;
  data?: T;
  error?: ErrorType;
}
