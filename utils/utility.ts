import { formatDistanceStrict } from "date-fns";

export function isEmpty(value: any) {
  return (
    value === "" ||
    value === null ||
    value === undefined ||
    (typeof value === "object" && !Object.keys(value).length)
  );
}

export function calculateTimeElapse(createdAt: string) {
  const createdDate = new Date(createdAt);
  const currentDate = new Date();
  return formatDistanceStrict(currentDate, createdDate);
}
