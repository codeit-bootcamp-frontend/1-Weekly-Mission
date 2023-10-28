import Header from "../../components/common/header";
import Footer from "../../components/common/footer";
import SearchBar from "../../components/common/serchbar";
import styled from "styled-components";
import linkAddIcon from '../../assets/images/linkAdd.svg'
import Cards from "../../components/cards/card";
import { useEffect, useState } from "react";
import getApi from "../../api/api";
import add from '../../assets/images/add.svg'
import share from '../../assets/images/share.svg'
import pen from '../../assets/images/pen.svg'
import trash from '../../assets/images/trash.svg'


const StyledLinkAdd = styled.div`
    display: flex;
    width: 800px;
    padding: 16px 20px;
    flex-direction: row;
    gap: 12px;
    align-items: center;
    margin: 0 auto;
    border-radius: 15px;
    border: 1px solid #6D6AFE;
    background: #fff;
    color: #9fa6b2
`

const StyledLinkAddBox = styled.div`
    display: flex;
    padding: 60px 0 90px;
    flex-direction: column;
    align-items: flex-start;
    background: #F0F6FF;
    input {
        width: 640px;
        border: none;
    }
`

const StyledLinkAddButton = styled.button`
    width: 80px;
    padding: 10px 10px;
    border-radius: 8px;
    background: var(--gra-purpleblue-to-skyblue, linear-gradient(91deg, #6D6AFE 0.12%, #6AE3FE 101.84%));
    color: var(--grey-light, #F5F5F5);
    font-size: 14px;
    font-weight: 600;
    border: none;
`

const StyledMainBox = styled.div`
    padding: 40px 0;
`

const StyledMainFlexBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    margin: 0 auto;
    width: 1060px;
`

const StyledFoldersBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
`

const StyledFolderButtonBox = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`

const IconAndText = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
`

const StyledFolderAdd = styled(IconAndText)`
    color: #6D6AFE;
    font-weight: 500;
    letter-spacing: -0.3px;
`

const StyledFolderNameTool = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`

const StyledFolderTool = styled.div`
    display: flex;
    gap: 12px;
    color: #9fa6b2;
    font-size: 14px;
    font-weight: 600;
`

const StyledFolderButton = styled.div`
    display: flex;
    padding: 8px 12px;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    border: 1px solid #6D6AFE;
`

const StyledFolderTitle = styled.div`
    font-size: 24px;
    font-weight: 600;
    letter-spacing: -0.2px;
`

function LinkAdd() {
    return (
        <StyledLinkAddBox>
            <StyledLinkAdd>
                <img src={linkAddIcon} alt='linkAddIcon' />
                <form>
                    <input type='text' placeholder='링크를 추가해보세요'/>
                </form>
                <StyledLinkAddButton>
                    추가하기
                </StyledLinkAddButton>
            </StyledLinkAdd>
        </StyledLinkAddBox>
    )
}

function Folders() {
    const [link, setLink] = useState([]);
    useEffect(() => {
        const path = '/users/1/links'
        const handleCards = async()=>{
            const{data} = await getApi(path);
            setLink(data);
        };
        handleCards();
    },[]);

    return (
        <StyledFoldersBox>
            <StyledFolderButtonBox>
                <StyledFolderButton>
                    전체
                </StyledFolderButton> 
                <StyledFolderAdd>
                    폴더 추가
                    <img src={add} alt="add"/>
                </StyledFolderAdd>
            </StyledFolderButtonBox>
            <StyledFolderNameTool>
                <StyledFolderTitle>
                    유용한 글
                </StyledFolderTitle> 
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
            </StyledFolderNameTool> 
            <Cards items={link}/>
        </StyledFoldersBox>
    )
}

function MainSection() {
    return (
        <StyledMainBox>
            <StyledMainFlexBox>
                <SearchBar />
                <Folders />
            </StyledMainFlexBox>
        </StyledMainBox>
    )
}

function MainContent() {
    return (
        <>
        <LinkAdd /> 
        <MainSection />
        </>
    )
}

function Folder() {
    return (
        <>
            <Header />
            <MainContent />
            <Footer />
        </>
    )
}

export default Folder; 