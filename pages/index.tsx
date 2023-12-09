import topImg from "../public/images/home/top.png";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export default function Home() {
    return (
        <div>
            <StyledTopContainer>
                <StyledTopBox>
                    <StlyedTopTitle>
                        <span>세상의 모든 정보</span>를 <br />
                        쉽게 저장하고 관리해 보세요
                    </StlyedTopTitle>
                    <Link href="/signup">
                        <StlyedTopLinkAdd>링크 추가하기</StlyedTopLinkAdd>
                    </Link>
                    <Image src={topImg} alt="topImg" />
                </StyledTopBox>
            </StyledTopContainer>
            <div>
                <div>
                    <div>
                        <div>
                            <div>
                                <span>원하는 링크</span>를 저장하세요
                            </div>
                            나중에 읽고 싶은 글, 다시 보고 싶은 영상, 사고 싶은
                            옷, 기억하고 싶은 모든 것을 한 공간에 저장하세요.
                        </div>
                        <div>
                            <img src="/assets/images/Card1.png" />
                            <div>
                                <img src="/assets/images/Card2.png" />
                                <img src="/assets/images/icon/Cardicon.png" />
                                <div></div>
                            </div>
                            <img src="/assets/images/Card3.png" />
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            <img src="/assets/images/middle1.png" />
                        </div>
                        <div>
                            <div>
                                링크를 폴더로
                                <span>관리</span>하세요
                            </div>
                            나만의 폴더를 무제한으로 만들고 다양하게 활용할 수
                            있습니다.
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            <div>
                                저장한 링크를
                                <span>공유</span>해 보세요.
                            </div>
                            여러 링크를 폴더에 담고 공유할 수 있습니다. 가족,
                            친구, 동료들에게 쉽고 빠르게 링크를 공유해 보세요.
                        </div>
                        <div>
                            <img src="/assets/images/middle2.png" />
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            <img src="/assets/images/middle3.png" />
                        </div>
                        <div>
                            <div>
                                저장한 링크를
                                <span>검색</span>해 보세요
                            </div>
                            중요한 정보들을 검색으로 쉽게 찾아보세요.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const StyledTopContainer = styled.div`
    padding-top: 70px;
    background: var(--bg);
`;

const StyledTopBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
`;

const StlyedTopTitle = styled.div`
    font-size: 64px;
    text-align: center;
    font-weight: 700;
    line-height: 80px;
    span {
        background: linear-gradient(91deg, #6d6afe 17.28%, #ff9f9f 74.98%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`;

const StlyedTopLinkAdd = styled.div`
    width: 350px;
    padding: 16px 20px;
    background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
    border-radius: 8px;
    text-align: center;
    color: #f5f5f5;
    font-size: 18px;
    font-weight: 600;
`;
