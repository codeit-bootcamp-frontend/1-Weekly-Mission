import imgClose from "../assets/close.svg"
import imgKakao from "../assets/kakao.svg"
import imgFB from "../assets/modalfacebook.svg"
import imgLink from "../assets/modallink.svg"
import S from "../components/styled"
import useData from "../hooks/useReduce"

export function Modal({ title = '링크를 입력해주세요.', modalName, placeholder, buttonColor, buttonText, share, add, data, setModal }) {
  const handleClick = () => {
    setModal(null);
  }

  return (
    <S.DivModalWrapper>
      <S.DivModalContents>
        <S.DivModalText>
          <h1>{modalName}</h1>
          {title && <p>{title}</p>}
        </S.DivModalText>
        {share && <S.SnsWrapper>
          <S.Sns src={imgKakao} text="카카오톡" alt="카카오톡으로 공유하기" />
          <S.Sns src={imgFB} text="페이스북" alt="페이스북으로 공유하기" />
          <S.Sns src={imgLink} text="링크 복사" alt="링크 복사하기" />
        </S.SnsWrapper>}
        {add && <S.UlModal>
          {data.map(value => (
            <li>
              <h2>{value.name}</h2>
              <p>{value.link.count}개 링크</p>
            </li>
          ))}
        </S.UlModal>}
        {placeholder && <S.InputSubmit placeholder={placeholder} />}
        {buttonText && <S.ButtonSubmit color={buttonColor}>{buttonText}</S.ButtonSubmit>}
        <S.ButtonClose onClick={handleClick}>
          <img src={imgClose} alt="현재 띄워진 창을 닫는 버튼" />
        </S.ButtonClose>
      </S.DivModalContents>
    </S.DivModalWrapper>
  )
}

export const makeModal = (title, type, setModal, data) => {
  let modal;
  switch (type) {
    case "폴더 추가":
      modal = (
        <Modal modalName="폴더 추가" placeholder="폴더 이름을 입력해주세요." buttonText="추가하기" setModal={setModal} />
      )
      break;
    case "공유":
      modal = (
        <Modal modalName="폴더 공유" title={title} share setModal={setModal} />
      )
      break;
    case "이름 변경":
      modal = (
        <Modal modalName="폴더 이름 변경" placeholder="변경할 이름을 입력해주세요." buttonText="변경하기" setModal={setModal} />
      )
      break;
    case "삭제":
      modal = (
        <Modal modalName="폴더 삭제" title={title} buttonText="삭제하기" buttonColor="red" setModal={setModal} />
      )
      break;
    case "추가하기":
      modal = (
        <Modal modalName="폴더에 추가" title={title} buttonText="추가하기" add data={data} setModal={setModal} />
      )
      break;
    default:
  }
  return modal
}