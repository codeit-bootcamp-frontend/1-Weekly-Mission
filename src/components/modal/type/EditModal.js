import styled from 'styled-components';
import ModalInput from '../ModalInput';
import CTA from '../CTA';

function EditModal() {
  return (
    <Container>
      <CustomInput />
      <CustomCTA>변경하기</CustomCTA>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.4rem;
  gap: 1.5rem;
`;

const CustomInput = styled(ModalInput)`
  width: 28rem;
`;

const CustomCTA = styled(CTA)`
  width: 28rem;
`;

export default EditModal;
