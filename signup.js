const TEST_EMAIL = 'test@codeit.com';
const TEST_PWD = 'codeit101';

const checkEmailValidation = () => {
  let email = document.getElementById('email').value;
  const regExp = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

  //email이 빈 칸일 때    - error-email1
  if (!email) {
    document.getElementById('error-email1').style = 'display:block';
    document.getElementById('error-email2').style = 'display:none';
    document.getElementById('error-email3').style = 'display:none';
    document.getElementById('email').style = 'border:1px solid red';
  } else if (!regExp.test(email)) {
    document.getElementById('error-email1').style = 'display:none';
    document.getElementById('error-email2').style = 'display:block';
    document.getElementById('error-email3').style = 'display:none';
    document.getElementById('email').style = 'border:1px solid red';
  } else if (email == TEST_EMAIL) {
    document.getElementById('error-email1').style = 'display:none';
    document.getElementById('error-email2').style = 'display:none';
    document.getElementById('error-email3').style = 'display:block';
    document.getElementById('email').style = 'border:1px solid red';
  } else {
    document.getElementById('error-email1').style = 'display:none';
    document.getElementById('error-email2').style = 'display:none';
    document.getElementById('error-email3').style = 'display:none';
    document.getElementById('email').style = 'border: 1px solid #d3d4dd';
  }
};

const checkPwdValidation = () => {
  let pwd = document.getElementById('pwd').value;
  let isValid = pwd.match(/[a-z]/) && pwd.match(/[0-9]/);

  //pwd가 빈 칸일 때      - error-pwd1
  if (!pwd || pwd.length < 8 || !isValid) {
    document.getElementById('error-pwd1').style = 'display:block';
    document.getElementById('pwd').style = 'border:1px solid red';
  } else {
    document.getElementById('error-pwd1').style = 'display:none';
    document.getElementById('pwd').style = 'border: 1px solid #d3d4dd';
  }
};

const checkRePwdValidation = () => {
  let pwd = document.getElementById('pwd').value;
  let rePwd = document.getElementById('rePwd').value;
  //rePwd가 빈 칸일 때    - error-re-pwd1
  if (!rePwd || pwd != rePwd) {
    document.getElementById('error-re-pwd1').style = 'display:block';
    document.getElementById('rePwd').style = 'border:1px solid red';
  } else {
    document.getElementById('error-re-pwd1').style = 'display:none';
    document.getElementById('rePwd').style = 'border: 1px solid #d3d4dd';
  }
};

const submit = () => {
  let email = document.getElementById('email').value;
  let pwd = document.getElementById('pwd').value;

  if ((email != TEST_EMAIL) & (pwd != TEST_PWD)) {
    //화면에 나올 내용
    document.getElementById('error-email2').style = 'display:block';
    document.getElementById('error-pwd2').style = 'display:block';
    document.getElementById('email').style = 'border:1px solid red';
    document.getElementById('pwd').style = 'border:1px solid red';
    //화면에 나오면 안 되는 내용
    document.getElementById('erorr-email1').style = 'display:none';
    document.getElementById('erorr-pwd1').style = 'display:none';
  } else {
    const link = 'folder.html';
    location.href = link;
  }
};
