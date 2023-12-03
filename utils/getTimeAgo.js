import { formatDistanceToNow, parseISO } from "date-fns";

export default function getTimeAgo(dateString) {
  const parsedDate = parseISO(dateString);
  return formatDistanceToNow(parsedDate, { addSuffix: true });
}
