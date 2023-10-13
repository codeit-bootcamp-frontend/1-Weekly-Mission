// if (EMAIL_MAP[state].checker(email)) {
//   showErrorMessageEffect(email, errorMsgsLabel, EMAIL_MAP[state]);
//   return;
// }

const emailRegex = /[a-zA-Z0-9]{3,10}@codeit\.com$/;

emailRegex.test("");
