import styled from 'styled-components'
import linkImage from '../../assets/link.png'


import colors from '../../style/colors'
import { flexCenter } from '../../style/common'
const AddLinkFrame = styled.div`
  position: relative;
  display: flex;
  padding: 30px 200px;
  flex-direction: column;
  align-items: center;
  align-items: flex-start;

  gap: 8px;
  background: ${colors.background};
`

const AddLinkInput = styled.input`
  display: flex;
  width: 100%;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  border-radius: 15px;
  border: 1px solid ${colors.primary};

  background: ${colors.white};
  background-repeat: no-repeat;
  background-image: url(${linkImage});
  background-position: 15px 16px;
  padding-left: 45px;
`

const AddButton = styled.button`
  position: absolute;
  border-radius: 8px;
  background: ${colors.purpleBlueToSkyBlue};
  color: ${colors.white};
  font-family: Pretendard;
  font-size: 13px;
  font-weight: 500;
  border: none;
  top: 42px;
  right: 220px;
  width: 80px;
  padding: 10px 16px;
  text-align: center;
  ${flexCenter};
`
function AddLink() {
  return (
    <AddLinkFrame>
      <AddLinkInput type="text" placeholder="링크를 추가해 보세요." />
      <AddButton>추가하기</AddButton>
    </AddLinkFrame>
  )
}

export default AddLink
