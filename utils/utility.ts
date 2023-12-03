export function isEmpty(value: any) {
  return (
    value === "" ||
    value === null ||
    value === undefined ||
    (typeof value === "object" && !Object.keys(value).length)
  );
}
