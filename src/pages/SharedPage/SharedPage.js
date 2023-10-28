// import { useEffect, useState } from "react";
import requestData from "../../services/api.js";
// import CardNoImg from "../../assets/image/img-card--noimg.png";
// /   const { name: userName, profileImageSource: folderImgSrc } = folderProfile;
// useEffect(() => {
const folderUserEl = document.querySelector(".folder-userName");
const folderImgEl = document.querySelector(".folder-image");
const folderNameEl = document.querySelector(".folder-nameText");

const userImgEl = document.querySelector(".userImg");
const userEmailEl = document.querySelector(".userEmail");
const minsAgoTextEls = document.getElementsByClassName("createdTimePassed");
const cardDescEls = document.getElementsByClassName("cardDesc");
const cardImgEls = document.getElementsByClassName("cardImg");
const createdDateEls = document.getElementsByClassName("createdDate");
const cardsEl = document.querySelectorAll(".card");
const cardUrls = document.querySelectorAll(".link-img");

export async function getFolderInfoResponse() {
  const responseFolderData = await requestData(null, "sample/folder", "GET");
  const responseUserData = await requestData(null, "sample/user", "GET");
  const { folder: folderInfo } = responseFolderData;
  const { email: userEmail, profileImageSource: userImg } = responseUserData;
  console.log({ responseFolderData });

  return { folderInfo, userEmail, userImg };
}

// getFolderInfoResponse().then(({ folderInfo, userEmail, userImg }) => {
//   const { owner: folderProfile, name: folderName } = folderInfo;
//   const { name: userName, profileImageSource: folderImgSrc } = folderProfile;

//   folderNameEl.innerText = folderName;
//   folderImgEl.setAttribute("src", folderImgSrc);
//   folderUserEl.innerText = userName;
//   userImgEl.setAttribute("src", userImg);
//   userEmailEl.innerText = userEmail;

//   const cardInfosList = getInfosOfCards(folderInfo);
//   renderCardsResponseInfos(cardInfosList);
// });

function renderCardsResponseInfos(cardInfosList) {
  // 서버 응답으로 받은 카드 정보들 화면에 나타내기
  const createdTimeList = cardInfosList.map((info) => info[0]);
  const cardImgList = cardInfosList.map((info) => info[1]);
  const cardDescList = cardInfosList.map((info) => info[2]);
  const cardUrlList = cardInfosList.map((info) => info[3]);
  const createdDateList = createdTimeList.map((createdDate) => {
    const trimmedCreatedDate = createdDate.slice(0, 10);
    return trimmedCreatedDate.replace(/-/gi, ". ");
  });

  for (let n = 0; n < minsAgoTextEls.length; n++) {
    const timePassed = getMinsDiffFromNow(createdTimeList[n]); // 현재로부터 지난 시간 (min 단위)
    minsAgoTextEls[n].innerText = calcalateTimePassed(timePassed);
    cardDescEls[n].innerText = cardDescList[n];
    cardImgList[n]
      ? cardImgEls[n].setAttribute("src", cardImgList[n])
      : cardImgEls[n].setAttribute(
          "src",
          "../../assets/image/img-card--noimg.png"
        );
    createdDateEls[n].innerText = createdDateList[n];
    cardUrlList[n]
      ? cardUrls[n].setAttribute("href", cardUrlList[n])
      : cardUrls[n].setAttribute("href", "#");
  }
}

function getInfosOfCards(responseData) {
  const { links } = responseData;

  const cardInfosList = [];
  links.forEach((cardLink) => {
    const { createdAt, imageSource, description, url } = cardLink;
    const info = [];
    info.push(createdAt);
    info.push(imageSource);
    info.push(description);
    info.push(url);
    cardInfosList.push(info);
  });
  return cardInfosList;
}

function getMinsDiffFromNow(ISOInputDate) {
  const now = Date.now();
  const nowDate = new Date(now);
  const inputDate = new Date(ISOInputDate);
  const diffMSec = nowDate.getTime() - inputDate.getTime();
  const diffMin = diffMSec / (60 * 1000);
  // console.log(`시간의 차이는 ${diffMin}분 입니다.`); // 결과: '시간의 차이는 20분 입니다.'
  return diffMin;
}

function calcalateTimePassed(diffMin) {
  diffMin = Math.floor(diffMin);
  const MIN_FOR_ONE_DAY = 24 * 60,
    DAY_FOR_ONE_MONTH = 31; // 정확히 주어지지 않음.
  let diffDay = 0;
  if (diffMin >= MIN_FOR_ONE_DAY) {
    diffDay = Math.floor(diffMin / MIN_FOR_ONE_DAY);
  } else {
    // 시간 차이 24시간 미만 => min 단위로 생각.
    if (diffMin < 60) {
      // 시간 차이 60분 미만일 때, (2분 미만 : 2분 이상)
      return diffMin < 2 ? "1 minute ago" : `${diffMin} minutes ago`;
    }
    // 시간 차이 60분 이상, 24시간 미만일 때, (2시간 미만 : 2시간 이상)
    return diffMin < 2 * 60
      ? "1 hour ago"
      : `${Math.floor(diffMin / 60)} hours ago`;
  }

  // 사간 차이 24시간 이상 => 이제부턴 day 단위로 생각.
  if (diffDay >= 365) {
    // 시간 차이 1년 이상일 때, (2년 미만 : 2년 이상)
    return diffDay < 2 * 365
      ? "1 year ago"
      : `${Math.floor(diffDay / 365)} years ago`;
  }
  if (diffDay < DAY_FOR_ONE_MONTH) {
    // 시간 차이 1달 이내일 때, (2일 미만 : 2일 이상)
    return diffDay < 2 ? "1 day ago" : `${diffDay} years ago`;
  }
  // 시간 차이 1달 이상 1년 미만일 때, (2달 미만 : 2달 이상)
  return diffDay < 2 * DAY_FOR_ONE_MONTH
    ? "1 month ago"
    : `${Math.floor(diffDay / 31)} months ago`;
}

// function SharedPage() {
// const [response, setResponse] = useState();

// useEffect(() => {
//   const responseData = callApi();
//   // setResponse(responseData);
//   const { folder } = responseData;
//   const { owner: folderProfile, name: folderName } = folder;
//   const { name: userName, profileImageSource: folderImgSrc } = folderProfile;

//   const folderNameEl = document.querySelector(".name-container");
//   folderNameEl.innerText = folderName;

//   const userImgEl = document.querySelector(".profile-image");
//   userImgEl.setAttribute("src", folderImgSrc);

//   const userNameEl = document.querySelector(".profile-text");
//   userNameEl.innerText = userName;

//   const cardInfosList = getInfosOfCards(folder);
//   renderCardsResponseInfos(cardInfosList);
// }, []);

// const responseUserData = requestData(null, "sample/user", "GET");
// const { email: userEmail, profileImageSource: userImgSrc } = callApi();
// console.log(email, profileImageSource);

//   return <div></div>;
// }

// export default SharedPage;
