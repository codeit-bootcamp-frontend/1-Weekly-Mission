$signButtons = document.querySelectorAll(".sign");

const checkLocalStorage = () => {
  const accessToken = window.localStorage.getItem("accessToken");
  if (accessToken) {
    for (let $button of $signButtons) {
      $button.setAttribute("href", "./folder/index.html");
    }
  }
};

const signButtonEventHandler = () => {
  checkLocalStorage();
};

for (let $button of $signButtons) {
  $button.addEventListener("click", signButtonEventHandler);
}
