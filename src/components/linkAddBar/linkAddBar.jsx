import * as S from "./linkAddBar.style.js";
import linkIconSrc from "assets/icons/link.svg";

export default function LinkAddBar() {
  return (
    <S.LinkAddForm
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <S.LinkAddFieldset>
        <img src={linkIconSrc} alt="링크 아이콘" />
        <label className="a11y" htmlFor="addInput"></label>
        <S.LinkAddInput
          id="addInput"
          type="text"
          placeholder="링크를 추가해 보세요."
          aria-label="추가할 링크를 입력하는 입력 요소"
          onChange={(e) => {}}
        />
        <S.LinkAddButton>추가하기</S.LinkAddButton>
      </S.LinkAddFieldset>
    </S.LinkAddForm>
  );
}
