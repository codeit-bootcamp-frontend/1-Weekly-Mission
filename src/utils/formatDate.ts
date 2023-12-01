function formatDate(isoDateString: string) {
  const date = new Date(isoDateString);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = String(date.getDate()).padStart(2, "0");

  const formattedDate = `${year}. ${month}. ${day}`;
  return formattedDate;
}

export default formatDate;
