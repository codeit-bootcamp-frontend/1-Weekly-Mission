import topImg from "../public/home/top.png";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export default function Home() {
    return (
        <div>
            <StyledTopContainer>
                <div>
                    <div>
                        <span>세상의 모든 정보</span>를 <br />
                        쉽게 저장하고 관리해 보세요
                    </div>
                    <Link href="/signin">링크 추가하기</Link>
                    <Image src={topImg} alt="topImg" />
                </div>
            </StyledTopContainer>
            <div>
                <div>
                    <div>
                        <div>
                            <p>
                                <div>
                                    <span>원하는 링크</span>를 저장하세요
                                </div>
                            </p>
                            <p>
                                나중에 읽고 싶은 글, 다시 보고 싶은 영상, 사고
                                싶은 옷, 기억하고 싶은 모든 것을 한 공간에
                                저장하세요.
                            </p>
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
                            <p>
                                <div>
                                    링크를 폴더로
                                    <span>관리</span>하세요
                                </div>
                            </p>
                            <p>
                                나만의 폴더를 무제한으로 만들고 다양하게 활용할
                                수 있습니다.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            <p>
                                <div>
                                    저장한 링크를
                                    <span>공유</span>해 보세요.
                                </div>
                            </p>
                            <p>
                                여러 링크를 폴더에 담고 공유할 수 있습니다.
                                가족, 친구, 동료들에게 쉽고 빠르게 링크를 공유해
                                보세요.
                            </p>
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
                            <p>
                                <div>
                                    저장한 링크를
                                    <span>검색</span>해 보세요
                                </div>
                            </p>
                            <p>중요한 정보들을 검색으로 쉽게 찾아보세요.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const StyledTopContainer = styled.div`
    display: flax;
`;
