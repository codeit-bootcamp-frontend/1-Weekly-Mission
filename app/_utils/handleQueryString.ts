import { ReadonlyURLSearchParams } from "next/navigation";

export const createQueryString = (name: string, value: string | number, searchParams: ReadonlyURLSearchParams) => {
  const newParams = new URLSearchParams(searchParams.toString());
  newParams.set(name, String(value));

  return newParams.toString();
};

export const removeQueryString = (name: string, searchParams: ReadonlyURLSearchParams) => {
  const params = Array.from(searchParams.entries());
  const newParams = new URLSearchParams();
  params.forEach((param) => param[0] !== name && newParams.set(param[0], param[1]));
  return newParams.toString();
};
