import Input from "./Input";
import * as Styled from "./StyledSign";

const Form = () => {
  return (
    <Styled.Form>
      <Styled.Inputs>
        <Input
          placeholder={"이메일을 입력해주세요."}
          type="email"
          first={true}
          label={"이메일"}
        />
        <Input
          placeholder={"비밀번호를 입력해주세요."}
          type="password"
          first={false}
          label={"패스워드"}
        />
      </Styled.Inputs>
      <Styled.Button>가입하기</Styled.Button>
    </Styled.Form>
  );
};

export default Form;
