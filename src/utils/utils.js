export const formatDate = (value) => {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

export const filterLinks = (links, type, folderId) => {
  if (type === 'searchById') {
    return links.filter(link => link['folder_id'] == folderId);
  }
  if (type === 'searchByKeyword') {
    return links.filter(link => link['title']?.includes(folderId));
  }
}

export const filterFolder = (links, folderId) => {
  if (!links) return;
  if (!folderId) return links;
  if (folderId * 1) return filterLinks(links, 'searchById', folderId);
  return filterLinks(links, 'searchByKeyword', folderId);
}

export function TimeFlow({ createdAt }) {
  let message = '';
  const timeMinute = Math.floor((new Date() - new Date(createdAt)) / 1000 / 60);
  const timeHour = Math.floor(timeMinute / 60);
  const timeDay = Math.floor(timeHour / 24);
  const timeMonth = Math.floor(timeDay / 30);
  const timeYear = Math.floor(timeMonth / 12);

  switch (true) {
    case timeMinute < 2:
      message = "1 minute ago";
      break;
    case timeMinute < 60:
      message = `${timeMinute} minutes ago`;
      break;
    case timeHour < 2:
      message = "1 hour ago";
      break;
    case timeHour < 24:
      message = `${timeHour} hours ago`;
      break;
    case timeDay < 2:
      message = `1 day ago`;
      break;
    case timeDay < 31:
      message = `${timeDay} days ago`;
      break;
    case timeMonth < 2:
      message = `1 month ago`;
      break;
    case timeMonth < 12:
      message = `${timeMonth} months ago`;
      break;
    case timeYear < 2:
      message = `1 year ago`;
      break;
    case timeYear >= 2:
      message = `${timeYear} years ago`;
      break;
    default: message = '계산중입니다...'
  }
  return (
    <p className="">{message}</p>
  )
}
