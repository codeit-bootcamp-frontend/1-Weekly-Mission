import styled from "styled-components";

interface Props {
  htmlFor: string;
  label: LabelTypes;
}

function InputLabel({ htmlFor, label }: Props) {
  return <StyledLabel htmlFor={htmlFor}>{label}</StyledLabel>;
}

export default InputLabel;

const StyledLabel = styled.label`
  font-size: 13px;
`;
