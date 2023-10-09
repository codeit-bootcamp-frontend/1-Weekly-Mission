
function isNotPasswordEmpty (password){
  const isNotEmpty = !(password.length === 0);
  return isNotEmpty ? true : false
}

function isValidPassword (password){
  const PASSWORD_REGEX = new RegExp(/^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/) 
  const isValid = PASSWORD_REGEX.test(password.trim());
  return isValid ? true : false
}

function chkPasswordSame (password, password2){
  const isSame = (password === password2)
  return isSame ? true : false
}

export {isNotPasswordEmpty, isValidPassword, chkPasswordSame}