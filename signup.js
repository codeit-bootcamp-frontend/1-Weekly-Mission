const TEST_EMAIL = 'test@codeit.com';
const TEST_PWD = 'codeit101';

const checkEmailValidation = () => {
  let email = document.getElementById('email').value;
  const regExp = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

  //email이 빈 칸일 때    - error-email1
  if (!email) {
    document.getElementById('error-email1').style = 'display:block';
    document.getElementById('email').style = 'border:1px solid red';
  } else {
    document.getElementById('error-email1').style = 'display:none';
    document.getElementById('email').style = 'border: 1px solid #d3d4dd';
  }

  //유효하지 않은 email일 때    - error-email2
  if (email && !regExp.test(email)) {
    document.getElementById('error-email2').style = 'display:block';
    document.getElementById('email').style = 'border:1px solid red';
  } else {
    document.getElementById('error-email2').style = 'display:none';
    document.getElementById('email').style = 'border: 1px solid #d3d4dd';
  }

  //이미 존재하는 email일 때    - error-email3
  if (email == TEST_EMAIL) {
    document.getElementById('error-email3').style = 'display:block';
    document.getElementById('email').style = 'border:1px solid red';
  } else {
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
  const VALID = '1px solid rgb(211, 212, 221)';

  //   let email = document.getElementById('email').style.border;
  //   let pwd = document.getElementById('pwd').style.border;
  //   let rePwd = document.getElementById('rePwd').style.border;

  //   if (email == VALID && pwd == VALID && rePwd == VALID) {
  //     alert('회원가입 성공');
  //     const link = 'folder.html';
  //     location.href = link;
  //   } else {
  //     console.log('not checked');
  //   }

  //   let email = document.getElementById('email').style.border;
  //   let pwd = document.getElementById('pwd').style.border;
  //   let rePwd = document.getElementById('rePwd').style.border;

  let email_style = document.getElementById('email').style.border;
  let pwd_style = document.getElementById('pwd').style.border;
  let rePwd_style = document.getElementById('rePwd').style.border;

  if (email_style == VALID && pwd_style == VALID && rePwd_style == VALID) {
    alert('회원가입 성공');
    const link = 'folder.html';
    location.href = link;
  } else {
    document.getElementById('error-email2').style = 'display:block';
    document.getElementById('email').style = 'border:1px solid red';
    document.getElementById('error-pwd1').style = 'display:block';
    document.getElementById('pwd').style = 'border:1px solid red';
    document.getElementById('error-re-pwd1').style = 'display:block';
    document.getElementById('rePwd').style = 'border:1px solid red';
  }
};
