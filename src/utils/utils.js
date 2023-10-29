import { format, formatDistanceToNowStrict } from "date-fns"
import IMAGES from "../assets/images"

const formatDate = (timeValue) => {
  return format(new Date(timeValue), "yyyy. MM. dd")
}

const convertCreatedAt = (timeValue) => {
  const dateFormat = formatDistanceToNowStrict(new Date(timeValue)).split(" ")
  const dateLen = dateFormat.length
  const number = dateFormat[dateLen - 2]
  const text = dateFormat[dateLen - 1]
  return `${number} ${text} ago`
}

const folderOptionNames = [
  {
    id: 1,
    name: "공유",
    optionImg: IMAGES.share,
  },
  {
    id: 2,
    name: "이름 변경",
    optionImg: IMAGES.pen,
  },
  {
    id: 3,
    name: "삭제",
    optionImg: IMAGES.trashcan,
  },
]

const DEFAULT_FOLDER = {
  name: "전체",
  id: 0,
}

const DEFAULT_FOLDER_NAME = "전체"

const DEFAULT_USER_ID = 1

export {
  convertCreatedAt,
  formatDate,
  folderOptionNames,
  DEFAULT_FOLDER,
  DEFAULT_FOLDER_NAME,
  DEFAULT_USER_ID,
}
