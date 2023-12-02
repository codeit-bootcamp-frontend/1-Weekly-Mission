import Input from "./Input";
import * as Styled from "./StyledSign";

const Form = () => {
  return (
    <Styled.Form>
      <Input placeholder={"내용 입력"} type="email" first={true} />
      <Input placeholder={"내용 입력"} type="password" first={false} />
      <Input placeholder={"내용 입력"} type="email" first={false} />
      <Input placeholder={"내용 입력"} type="password" first={false} />
      <Styled.Button> 가입하기 </Styled.Button>
    </Styled.Form>
  );
};

export default Form;
