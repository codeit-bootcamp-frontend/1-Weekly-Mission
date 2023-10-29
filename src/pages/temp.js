//FolderPage 데이터 가져오기
const [links, setLinks] = useState({});

async function getLinks(folderId) {
  try {
    const folderLink = await getFolderLinks(folderId || "");
    setLinks(folderLink); //파라미터로 folder아이디 넣으면 해당 아이디만 folder만 가져옴
  } catch (err) {
    console.log(err);
  }
}

useEffect(() => {
  getLinks();
}, []);

//데이터 가져와서 분리하기/
const linksData = getFolderLinks();

function filterByFolderId(links, folderId) {
  return links.filter(({ folder_id }) => {
    return folder_id === folderId;
  });
}

export function getLinksByFolderId(folderId) {
  return filterByFolderId(linksData, folderId);
} //folderId 링크 가져오기
