import Header from "../../components/common/header";
import Footer from "../../components/common/footer";
import SearchBar from "../../components/common/searchbar";
import styled from "styled-components";
import linkAddIcon from "../../assets/images/linkAdd.svg";
import Cards from "../../components/cards/card";
import { useEffect, useState } from "react";
import getApi from "../../api/api";
import add from "../../assets/images/add.svg";
import share from "../../assets/images/share.svg";
import pen from "../../assets/images/pen.svg";
import trash from "../../assets/images/trash.svg";
import FolderButton from "../../components/folderbutton/folderbutton";

const StyledLinkAdd = styled.div`
    display: flex;
    width: 800px;
    padding: 16px 20px;
    flex-direction: row;
    gap: 12px;
    align-items: center;
    margin: 0 auto;
    border-radius: 15px;
    border: 1px solid #6d6afe;
    background: #fff;
    color: #9fa6b2;
    @media (max-width: 767px) {
        width: 390px;
    }
`;

const StyledLinkAddBox = styled.div`
    display: flex;
    padding: 60px 0 90px;
    flex-direction: column;
    align-items: flex-start;
    background: #f0f6ff;
    input {
        width: 640px;
        border: none;
        @media (max-width: 767px) {
            width: 200px;
        }
    }
`;

const StyledLinkAddButton = styled.button`
    width: 80px;
    padding: 10px 10px;
    border-radius: 8px;
    background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
    color: var(--grey-light, #f5f5f5);
    font-size: 14px;
    font-weight: 600;
    border: none;
`;

const StyledMainBox = styled.div`
    padding: 40px 0;
`;

const StyledMainFlexBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    margin: 0 auto;
    width: 1060px;
    @media (max-width: 767px) {
        width: 390px;
    }
    @media (min-width: 768px) and (max-width: 1124px) {
        width: 760px;
    }
`;

const StyledFoldersBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    position: relative;
`;

const StyledFolderButtonBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const IconAndText = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
`;

const StyledFolderAdd = styled(IconAndText)`
    color: #6d6afe;
    font-weight: 500;
    letter-spacing: -0.3px;
    @media (max-width: 767px) {
        position: fixed;
        background: #6d6afe;
        bottom: 101px;
        right: 38%;
        z-index: 1;
        padding: 8px 24px;
        border-radius: 20px;
        border: 1px solid #fff;
        color: #fff;
        img {
            filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(100deg)
                brightness(200%) contrast(100%);
        }
    }
`;

const StyledFolderNameTool = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;

const StyledFolderTool = styled.div`
    display: flex;
    gap: 12px;
    color: #9fa6b2;
    font-size: 14px;
    font-weight: 600;
`;

const StyledFolderTitle = styled.div`
    font-size: 24px;
    font-weight: 600;
    letter-spacing: -0.2px;
`;

const StyledNoLink = styled.div`
    width: 1060px;
    text-align: center;
    margin-bottom: 60px;
    @media (max-width: 767px) {
        width: 390px;
    }
    @media (min-width: 768px) and (max-width: 1124px) {
        width: 750px;
    }
`;

function LinkAdd() {
    return (
        <StyledLinkAddBox>
            <StyledLinkAdd>
                <img src={linkAddIcon} alt="linkAddIcon" />
                <form>
                    <input type="text" placeholder="링크를 추가해보세요" />
                </form>
                <StyledLinkAddButton>추가하기</StyledLinkAddButton>
            </StyledLinkAdd>
        </StyledLinkAddBox>
    );
}

function NoLink() {
    return <StyledNoLink>저장된 링크가 없습니다.</StyledNoLink>;
}

function Folders() {
    const [folderData, setFolderData] = useState([]);
    const [query, setQuery] = useState("/users/1/links");
    const [title, setTitle] = useState("전체");
    const [titleData, setTitleData] = useState([]);

    useEffect(() => {
        const handleCards = async () => {
            const { data } = await getApi(query);
            setFolderData(data);
        };
        handleCards();
    }, [query]);

    useEffect(() => {
        const path = "/users/1/folders";
        const handleTitle = async () => {
            const { data } = await getApi(path);
            setTitleData(data);
        };
        handleTitle();
    }, []);

    return (
        <StyledFoldersBox>
            <StyledFolderButtonBox>
                <FolderButton
                    items={titleData}
                    setTitle={setTitle}
                    title={title}
                    setQuery={setQuery}
                />
                <StyledFolderAdd>
                    폴더 추가
                    <img src={add} alt="add" />
                </StyledFolderAdd>
            </StyledFolderButtonBox>
            <StyledFolderNameTool>
                <StyledFolderTitle>{title}</StyledFolderTitle>
                {title === "전체" || (
                    <StyledFolderTool>
                        <IconAndText>
                            <img src={share} alt="share" />
                            공유
                        </IconAndText>
                        <IconAndText>
                            <img src={pen} alt="pen" />
                            이름 변경
                        </IconAndText>
                        <IconAndText>
                            <img src={trash} alt="trash" />
                            삭제
                        </IconAndText>
                    </StyledFolderTool>
                )}
            </StyledFolderNameTool>
            {folderData.length === 0 ? (
                <NoLink />
            ) : (
                <Cards items={folderData} />
            )}
        </StyledFoldersBox>
    );
}

function MainSection() {
    return (
        <StyledMainBox>
            <StyledMainFlexBox>
                <SearchBar />
                <Folders />
            </StyledMainFlexBox>
        </StyledMainBox>
    );
}

function MainContent() {
    return (
        <>
            <LinkAdd />
            <MainSection />
        </>
    );
}

function Folder() {
    return (
        <>
            <Header />
            <MainContent />
            <Footer />
        </>
    );
}

export default Folder;
