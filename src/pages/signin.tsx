import Input from '@components/Input';

export default function Signin() {
  return (
    <>
      <Input placeholder='이메일을 입력해 주세요.' />
      <Input passwordType placeholder='비밀번호를 입력해 주세요.' />
    </>
  );
}
