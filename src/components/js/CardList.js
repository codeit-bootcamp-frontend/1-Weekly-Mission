import "../css/Card.css";
import {getFolder} from '../../Api'

/* let myDate1 = new Date(2017, 4, 18); 현재연도, 월, 일, 시간, 분, 초
let myDate2 = new Date(2017, 4, 19); 데이터에서 가져온 현재연도, 월, 일, 시간, 분, 초

let timeDiff = myDate2 - myDate1;
console.log(timeDiff); // 86400000 (ms)
console.log(timeDiff / 1000); // 86400 (sec)
console.log(timeDiff / 1000 / 60) // 1440 (min)
console.log(timeDiff / 1000 / 60 / 60) // 24 (hour)
console.log(timeDiff / 1000 / 60 / 60 / 24) // 1 (date) */

function getTimeDiff(value) {
  const now = new Date();
  const dataTime = new Date(value);

  const timeDiff = (now - dataTime)/1000; // timeDiff 단위: 초

  if(timeDiff < 120) { // 2분 미만
    return;
  }
  if(timeDiff < 6060) { // 2분 이상 ~ 59분 이하
    return;
  }
  if(timeDiff < 2460*60) { // 한시간 이상 ~ 하루 이하
    return;
  }if(timeDiff < 120) {
    return;
  }if(timeDiff < 120) {
    return;
  }

  return;

}


function CardItem({item}) {
  return (
    <div>
      <p>10 minutes(임시)</p>
      <p>내용입니다.(임시)</p>
      <p>creatdAT입니다.</p>
    </div>
  )
}


function CardList({folderLinks}) {
  return (
    <ul>
      {folderLinks.map(item => {
        return (
          <li><CardItem item={item}/></li>
        )
      })}
    </ul>)

}
export default CardList;
