import styled from "styled-components";

function LinksNotExist({ children }) {
  return (
    <Wrapper>
      <Text>{children}</Text>
    </Wrapper>
  );
}

export default LinksNotExist;

const Wrapper = styled.div`
  width: 100%;
  margin: 40px auto auto;
  padding: 41px 0 35px;
  display: flex;
  justify-content: center;
`;

const Text = styled.div`
  font-size: 1.6rem;
  font-weight: 400;
`;
