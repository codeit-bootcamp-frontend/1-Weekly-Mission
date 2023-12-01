import styled from "styled-components";
import linkAdd from "../images/link.svg";
import add from "../images/add.svg";
import { ChangeEvent, useState } from "react";
import { MouseEvent } from "react";
import Image from "next/image";
interface LinkAddBar {
  openMAF: (e: MouseEvent, text?: string) => void;
}

export function LinkAddBar({ openMAF }: LinkAddBar) {
  const [text, setText] = useState("");

  const handleChangeText = (e: ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);
  const handleTypingUrl = (e: MouseEvent) => openMAF(e, text);
  return (
    <>
      <FolderHeader>
        <LinkAddBackground>
          <LinkAddBarWrapper>
            <LinkAddBarInput
              name="text"
              value={text}
              placeholder="링크를 추가해보세요"
              onChange={handleChangeText}
            />

            <LinkAddBarImage>
              <Image fill src={linkAdd} alt=" " />
            </LinkAddBarImage>
            <CtaShort onClick={handleTypingUrl}>
              <span>추가하기</span>
            </CtaShort>
          </LinkAddBarWrapper>
        </LinkAddBackground>
      </FolderHeader>
    </>
  );
}

export function LinkAddBarFixedBot({ openMAF }: LinkAddBar) {
  const [text, setText] = useState("");

  const handleChangeText = (e: ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);
  const handleTypingUrl = (e: MouseEvent) => openMAF(e, text);
  return (
    <LinkAddBarBackFixed>
      <LinkAddBarWrapper>
        <LinkAddBarInput
          name="text"
          value={text}
          placeholder="링크를 추가해보세요"
          onChange={handleChangeText}
        />
        <LinkAddBarImage>
          <Image fill src={linkAdd} alt=" " />
        </LinkAddBarImage>

        <CtaShort onClick={handleTypingUrl}>
          <span>추가하기</span>
        </CtaShort>
      </LinkAddBarWrapper>
    </LinkAddBarBackFixed>
  );
}

export function FolderAdd({ openMAF }: LinkAddBar) {
  return (
    <>
      <FolderAddWrapper onClick={openMAF}>
        <FolderAddContent>폴더 추가</FolderAddContent>
        <AddImage>
          <Image fill src={add} alt="" />
        </AddImage>
      </FolderAddWrapper>
      <AddButton onClick={openMAF}>
        <FolderAddBtnContent>폴더 추가</FolderAddBtnContent>
        <AddImage>
          <Image fill src={add} alt="" />
        </AddImage>
      </AddButton>
    </>
  );
}

const AddButton = styled.button`
  position: relative;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    padding: 8px 24px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 3px;
    border-radius: 20px;
    border: 1px solid var(--linkbrary-white, #fff);
    background: var(--linkbrary-primary-color, #6d6afe);
    position: sticky;
    bottom: 101px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const AddImage = styled.span`
  position: relative;
  width: 16px;
  height: 17px;
`;

const FolderAddWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 4px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const FolderAddContent = styled.span`
  color: #6d6afe;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.3px;
`;

const FolderAddBtnContent = styled(FolderAddContent)`
  color: white;
`;

interface LinkAddBackgroundProps {
  $show?: boolean;
}

const LinkAddBackground = styled.div<LinkAddBackgroundProps>`
  width: 1440px;
  background-color: #f0f6ff;
  z-index: 1000;
  margin: 0 auto;

  position: ${({ $show }) => ($show ? "fixed" : "")};
  bottom: ${({ $show }) => ($show ? "0" : "")};
`;

const LinkAddBarWrapper = styled.div`
  z-index: 100;
  position: relative;
  display: flex;
  margin: 0 auto;
  width: 800px;
  padding: 16px 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  border-radius: 15px;
  border: 1px solid var(--linkbrary-primary-color, #6d6afe);
  background: var(--linkbrary-white, #fff);
  @media (max-width: 1123px) {
    width: 500px;
  }
  @media (max-width: 768px) {
    width: 300px;
  }
`;

const LinkAddBarInput = styled.input`
  display: flex;
  width: 800px;
  padding: 16px 20px;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
  border-radius: 15px;
  border: 0px solid var(--linkbrary-primary-color, #6d6afe);
  background: var(--linkbrary-white, #fff);
  @media (max-width: 1123px) {
    width: 500px;
  }
  @media (max-width: 768px) {
    width: 300px;
  }
`;

const LinkAddBarImage = styled.span`
  left: 10px;
  cursor: pointer;
  width: 18px;
  height: 18px;
  position: absolute;
`;

const FolderHeader = styled.div`
  height: 234px;
  padding: 60px 0 90px 0;
  margin-bottom: 40px;
  display: flex;
  width: 1440px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  background: var(--linkbrary-bg, #f0f6ff);
`;

const Cta = styled.button`
  cursor: pointer;
  display: flex;
  width: 128px;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: var(
    --gra-purpleblue-to-skyblue,
    linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)
  );

  color: white;
  font-size: 1.4rem;
  font-weight: 600;
`;

const CtaShort = styled(Cta)`
  display: flex;
  width: 80px;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const LinkAddBarBackFixed = styled(LinkAddBackground)`
  display: flex;
  position: fixed;
  bottom: 0;
`;
