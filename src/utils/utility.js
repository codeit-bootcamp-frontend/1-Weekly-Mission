export function isEmpty(value) {
  return (
    value === "" ||
    value === null ||
    value === undefined ||
    (typeof value === "object" && !Object.keys(value).length)
  );
}
