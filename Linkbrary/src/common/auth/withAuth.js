// 로컬스토리지에 accessToken이 있는지 확인
const accessToken = localStorage.getItem("accessToken");

if (accessToken) location.href = "folder.html";
