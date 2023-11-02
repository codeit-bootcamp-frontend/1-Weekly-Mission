import {useLocation} from 'react-router-dom'

const UseShareUrl = (userId, folderId) =>{
  const location = useLocation().pathname;
  const wholeUrl = window.location.href
  console.log(wholeUrl)
  const hostAddress = wholeUrl.replace(`${location}?`,'');
  console.log(hostAddress)
  const shareURL = `${hostAddress}/shared?user=${userId}&folder=${folderId}`;
  return shareURL
}

export default UseShareUrl