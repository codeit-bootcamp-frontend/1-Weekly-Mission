import { MouseEvent, useEffect, useRef } from "react";
import { DropDownList } from "components";
import usePopOver from "hooks/usePopOver";
import kebab from "assets/kebab.svg";
import * as Styled from "./StyledDropDown";

interface LinkCount {
  count: number;
}

interface FoldersData {
  id?: number;
  created_at?: string;
  name: string;
  user_id?: number;
  link: LinkCount;
}

interface Props {
  url: string;
  folderData: FoldersData[];
}

function DropDown({ url, folderData }: Props) {
  const kebabContainerRef = useRef<HTMLDivElement>(null);
  const { isOpen, openPopOver, closePopOver } = usePopOver();

  //드롭다운 버튼 클릭
  const handleKebabClick = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isOpen) {
      closePopOver();
    } else {
      openPopOver();
    }
  };

  useEffect(() => {
    const handleOutsideClick = (e: Event): void => {
      if (e.target !== kebabContainerRef.current) {
        closePopOver();
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Styled.Container ref={kebabContainerRef}>
      <Styled.Kebab
        src={kebab}
        alt="카드 설정 보기"
        onClick={handleKebabClick}
      />
      {isOpen && (
        <DropDownList
          url={url}
          folderData={folderData}
          anchorRef={kebabContainerRef}
        />
      )}
    </Styled.Container>
  );
}

export default DropDown;
