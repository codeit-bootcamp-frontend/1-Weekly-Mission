import styled from 'styled-components';

function Copyright() {
  return (
    <>
      <CopyRightSpan>©codeit - 2023</CopyRightSpan>
    </>
  )
}

export default Copyright;

const CopyRightSpan = styled.span`
  grid-area: copyright;
  color: #676767;
  font-family: Arial, sans-serif;
  font-size: 1.6rem;
`
