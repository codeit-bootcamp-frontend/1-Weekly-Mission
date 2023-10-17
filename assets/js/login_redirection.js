const accessToken = window.localStorage.getItem("accessToken");

if (
  window.location.pathname ===
    "/Weekly_mission/1-Weekly-Mission/folder/index.html" ||
  window.location.pathname === "/folder/"
) {
  setTimeout(() => {
    window.localStorage.removeItem("accessToken");
  }, 5000);
} else if (
  window.location.pathname ===
    "/Weekly_mission/1-Weekly-Mission/signin/index.html" ||
  window.location.pathname === "/signin/" ||
  window.location.pathname ===
    "/Weekly_mission/1-Weekly-Mission/signup/index.html" ||
  window.location.pathname === "/signup/"
) {
  if (accessToken) {
    window.location.href = "../folder/index.html";
  }
}
