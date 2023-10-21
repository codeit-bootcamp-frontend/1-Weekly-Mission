function formatDate(createdAt) {
  const createDate = new Date(createdAt);

  const year = createDate.getFullYear();
  const month = createDate.getMonth();
  const day = createDate.getDate();

  const formattedDate = `${year}. ${month}. ${day}`;

  return formattedDate;
}

export default formatDate;
