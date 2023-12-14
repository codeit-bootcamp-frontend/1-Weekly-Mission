import styled from "styled-components";
import closeIcon from "../../public/images/modal/modal-close.png";
import kakaoIcon from "../../public/images/modal/modal-icon-kakao.svg";
import facebookIcon from "../../public/images/modal/modal-icon-facebook.svg";
import linkIcon from "../../public/images/modal/modal-link.svg";
import checkIcon from "../../public/images/modal/modal-footer-icon-check.svg";
import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { FacebookMessengerShareButton } from "react-share";
import Image from "next/image";
import Script from "next/script";

function Add() {
    const [select, setSelect] = useState("0");
    return (
        <>
            <StyledModalTitleBox>
                <StyledModalTitle>폴더에 추가</StyledModalTitle>
                <StyledModalSubTitle>링크 주소</StyledModalSubTitle>
            </StyledModalTitleBox>
            <StyledModalContent>
                <StyledModalAddBox>
                    <StyledModalAddTitleBox
                        onClick={() => setSelect("1")}
                        $select={select}
                        $number="1"
                    >
                        <div>
                            코딩 팁 <p>7개 링크</p>
                        </div>
                        <Image src={checkIcon} alt="checkIcon" />
                    </StyledModalAddTitleBox>
                    <StyledModalAddTitleBox
                        onClick={() => setSelect("2")}
                        $select={select}
                        $number="2"
                    >
                        <div>
                            채용 사이트 <p>12개 링크</p>
                        </div>
                        <Image src={checkIcon} alt="cheakIcon" />
                    </StyledModalAddTitleBox>
                    <StyledModalAddTitleBox
                        onClick={() => setSelect("3")}
                        $select={select}
                        $number="3"
                    >
                        <div>
                            유용한 글 <p>30개 링크</p>
                        </div>
                        <Image src={checkIcon} alt="checkIcon" />
                    </StyledModalAddTitleBox>
                    <StyledModalAddTitleBox
                        onClick={() => setSelect("4")}
                        $select={select}
                        $number="4"
                    >
                        <div>
                            나만의 장소 <p>3개 링크</p>
                        </div>
                        <Image src={checkIcon} alt="checkIcon" />
                    </StyledModalAddTitleBox>
                </StyledModalAddBox>
                <StyledModalButton>추가하기</StyledModalButton>
            </StyledModalContent>
        </>
    );
}

function DeleteLink() {
    return (
        <>
            <StyledModalTitleBox>
                <StyledModalTitle>링크 삭제</StyledModalTitle>
                <StyledModalSubTitle>httpw://www.abc.com</StyledModalSubTitle>
            </StyledModalTitleBox>
            <StyledModalContent>
                <StyledModalButton $delete>삭제하기</StyledModalButton>
            </StyledModalContent>
        </>
    );
}

function DeleteFolder() {
    return (
        <>
            <StyledModalTitleBox>
                <StyledModalTitle>폴더 삭제</StyledModalTitle>
                <StyledModalSubTitle>폴더명</StyledModalSubTitle>
            </StyledModalTitleBox>
            <StyledModalContent>
                <StyledModalButton $delete>삭제하기</StyledModalButton>
            </StyledModalContent>
        </>
    );
}

declare global {
    interface Window {
        Kakao: any;
    }
}

function Share({ query }: { query: string }) {
    const currentUrl = window.location.href + "?" + query;
    const kakaoInit = () => {
        if (!window.Kakao.isInitialized())
            window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API);
    };

    const shareKakao = async () => {
        await window.Kakao.Share.sendDefault({
            objectType: "feed",
            content: {
                title: "Linkbrary",
                description: "라이브러리를 공유하세요",
                imageUrl: "",
                link: {
                    mobileWebUrl: currentUrl,
                },
            },
            buttons: [
                {
                    title: "나도 테스트 하러가기",
                    link: {
                        mobileWebUrl: currentUrl,
                    },
                },
            ],
        });
    };

    return (
        <>
            <Script
                src="https://t1.kakaocdn.net/kakao_js_sdk/2.5.0/kakao.min.js"
                integrity="sha384-kYPsUbBPlktXsY6/oNHSUDZoTX6+YI51f63jCPEIPFP09ttByAdxd2mEjKuhdqn4"
                crossOrigin="anonymous"
                onLoad={kakaoInit}
            />
            <StyledModalTitleBox>
                <StyledModalTitle>폴더 공유</StyledModalTitle>
                <StyledModalSubTitle>폴더명</StyledModalSubTitle>
            </StyledModalTitleBox>
            <StyledModalContentShare>
                <StyledModalShare>
                    <StyledModalShareIcon
                        $name="kakao"
                        onClick={() => shareKakao()}
                    >
                        <Image src={kakaoIcon} alt="kakaoIcon" />
                    </StyledModalShareIcon>
                    카카오톡
                </StyledModalShare>
                <StyledModalShare>
                    <FacebookMessengerShareButton url={currentUrl} appId="">
                        <StyledModalShareIcon $name="facebook">
                            <Image src={facebookIcon} alt="facebookIcon" />
                        </StyledModalShareIcon>
                    </FacebookMessengerShareButton>
                    페이스북
                </StyledModalShare>
                <StyledModalShare>
                    <CopyToClipboard text={currentUrl}>
                        <StyledModalShareIcon>
                            <Image src={linkIcon} alt="linkIcon" />
                        </StyledModalShareIcon>
                    </CopyToClipboard>
                    링크 복사
                </StyledModalShare>
            </StyledModalContentShare>
        </>
    );
}

function AddFolder() {
    return (
        <>
            <StyledModalTitle>폴더 추가</StyledModalTitle>
            <StyledModalContent>
                <input placeholder="내용 입력" />
                <StyledModalButton>추가하기</StyledModalButton>
            </StyledModalContent>
        </>
    );
}

function Edit() {
    return (
        <>
            <StyledModalTitle>폴더 이름 변경</StyledModalTitle>
            <StyledModalContent>
                <input placeholder="유용한 팁" />
                <StyledModalButton>변경하기</StyledModalButton>
            </StyledModalContent>
        </>
    );
}

interface ModalProps {
    tag: string;
    close: boolean;
    setClose: React.Dispatch<React.SetStateAction<boolean>>;
    query?: string;
}

export default function Modal({ tag, close, setClose, query }: ModalProps) {
    if (query === undefined) query = "";
    return (
        <StyledModalWrap $close={close}>
            <StyledModalBg>
                <StyledModalBox>
                    <StyledModalClose onClick={() => setClose(!close)}>
                        <Image src={closeIcon} alt="closeIcon" />
                    </StyledModalClose>
                    {tag === "edit" ? <Edit /> : ""}
                    {tag === "addFolder" ? <AddFolder /> : ""}
                    {tag === "share" ? <Share query={query} /> : ""}
                    {tag === "deleteFolder" ? <DeleteFolder /> : ""}
                    {tag === "deleteLink" ? <DeleteLink /> : ""}
                    {tag === "add" ? <Add /> : ""}
                </StyledModalBox>
            </StyledModalBg>
        </StyledModalWrap>
    );
}

const StyledModalWrap = styled.div<{ $close: boolean }>`
    width: 100vw;
    height: 100vh;
    top: 0;
    position: fixed;
    display: ${({ $close }) => ($close ? "none" : "")};
    z-index: 1;
`;

const StyledModalBg = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledModalBox = styled.div`
    display: flex;
    width: 360px;
    padding: 32px 40px;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    background-color: #fff;
    border-radius: 15px;
    border: 1px solid #ccd5e3;
    z-index: 2;
`;

const StyledModalTitle = styled.div`
    color: #373740;
    font-size: 20px;
    font-weight: 700;
`;

const StyledModalSubTitle = styled.div`
    color: #9fa6b2;
    font-size: 14px;
`;

const StyledModalTitleBox = styled.div`
    display: flex;
    gap: 8px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledModalContent = styled.div`
    display: flex;
    gap: 15px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    input {
        width: 280px;
        padding: 18px 15px;
        border-radius: 8px;
        border: 1px solid #ccd5e3;
        &::placeholder {
            color: #9fa6b2;
        }
    }
`;

const StyledModalContentShare = styled.div`
    display: flex;
    gap: 32px;
    justify-content: center;
    align-items: center;
`;

const StyledModalButton = styled.div<{ $delete?: boolean }>`
    width: 280px;
    padding: 16px 20px;
    border-radius: 8px;
    background: ${({ $delete }) =>
        $delete
            ? "#FF5B56"
            : "linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)"};
    color: #f5f5f5;
    font-weight: 600;
    text-align: center;
    cursor: pointer;
    position: relative;
`;

const StyledModalClose = styled.div`
    position: absolute;
    top: 16px;
    right: 16px;
    cursor: pointer;
`;

const StyledModalShare = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledModalShareIcon = styled.div<{ $name?: string }>`
    padding: 12px;
    border-radius: 37.333px;
    background: ${({ $name }) =>
        $name === "kakao" ? "#fee500" : $name === "facebook" ? "#1877F2" : ""};
    cursor: pointer;
`;

const StyledModalAddBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

const StyledModalAddTitleBox = styled.div<{ $select: string; $number: string }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px;
    width: 264px;
    color: ${({ $select, $number }) =>
        $select === $number ? "#6d6afe" : "#000"};
    cursor: pointer;
    background-color: ${({ $select, $number }) =>
        $select === $number ? "#f0f6ff" : "#fff"};
    p {
        font-size: 14px;
        color: #9fa6b2;
    }
    div {
        display: flex;
        gap: 8px;
    }
    img {
        display: ${({ $select, $number }) =>
            $select === $number ? "" : "none"};
    }
    &:hover {
        background-color: #f0f6ff;
        color: #6d6afe;
    }
`;
