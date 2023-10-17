# 1-Weekly-Mission

# Week6

단일한 자바스크립트 파일을 각 기능과 역할 별로 분리했습니다.

---

클래스
/js/class

-> JS DOM에 접근할 때 클래스 생성자 함수를 이용해서 만든 객체, $dom으로 접근합니다.
ex. 이메일 input 태그 === $dom.inputEm
-> 생성자 함수는 css 클래스로 html 컬렉션을 만들고, 이를 for of문으로 순회하여 $dom 객체 안에 html 요소들을 담습니다.
-> 파일 별로 다른 $dom 객체가 자동으로 생성되어, 선언문의 반복을 줄일 수 있습니다.

---

상수
/js/constants

-> 특정 함수에서 사용하는 값들을 담아놓은 파일들입니다.

: css Class 모음 /cssClass.js
: 에러메시지 모음 /errorMessage.js
: 비밀번호확인 이미지 주소 /imgs.js
: 이메일,비밀번호 확인 정규식 /regExp.js
: ajax 통신에서 사용할 URL /webApis.js

---

함수
/js/functions

-> 함수형 프로그래밍 강의를 들으면서 적용하는 중입니다.
-> 한 가지 기능을 가지는 함수를 만드려고 노력했습니다.
-> 함수를 조합하여 사용하는 구조입니다.

: go, pipe, curry 등 유틸 함수 /default.js
: input태그의 값을 검증하는 함수 /checkout
: : 모든 input 태그에서 사용할 수 있는 공통함수 /c_common.js
: : 이메일 input 태그에서 사용할 수 있는 공통함수 /c_email.js
: : 비밀번호 input 태그에서 사용할 수 있는 공통함수 /c_password.js
: : signin, signup 페이지에서 모두 사용할 수 있는 공통함수 /c_mixin_common.js
: : signin 페이지에서 사용할 수 있는 함수 /c_mixin_signin.js
: : signup 페이지에서 사용할 수 있는 함수 /c_mixin_signup.js

: 비밀번호확인 기능 /passwordOnoff
: 로그인/회원가입 시 ajax 통신 /signFetch
