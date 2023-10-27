import styled from "styled-components"

const CardContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  margin: 4rem auto;
  padding: 0 clamp(3.2rem, 5%, 19rem);
`

const FolderContainerBox = styled.div`
  display: flex;
  width: 1060px;
  justify-content: space-between;
  align-items: center;
`

const FolderNameBox = styled.div`
  display: flex;
  width: 1060px;
  justify-content: space-between;
  align-items: center;
`

export { CardContainerBox, FolderContainerBox, FolderNameBox }
