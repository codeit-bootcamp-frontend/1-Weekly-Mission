import Cards from "../../components/cards/card";
import getApi from "../../api/api";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../../components/common/header";
import Footer from "../../components/common/footer";
import SearchBar from "../../components/common/searchbar";

const StyledProfile = styled.div`
    background-color: #f0f6ff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px 60px;
    gap: 20px;
    text-align: center;
`;

const StyledProfileImgBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
    word-break: keep-all;
    img {
        width: 60px;
        height: 60px;
        border-radius: 47px;
        margin: 0 auto;
    }
`;

const StyledProfileName = styled.div`
    font-size: 40px;
    font-weight: 600;
    word-break: keep-all;
`;

const StyledMain = styled.div`
    padding: 40px 0;
    background-color: #fff;
    display: flex;
`;

const StyledMainBox = styled.div`
    margin: 0 auto;
    display: flex;
    gap: 40px;
    flex-direction: column;
`;

function MainSection({ items }) {
    return (
        <StyledMain>
            <StyledMainBox>
                <SearchBar />
                <Cards items={items} />
            </StyledMainBox>
        </StyledMain>
    );
}

function Profile({ name, owner }) {
    return (
        <StyledProfile>
            <StyledProfileImgBox>
                <img src={owner.profileImageSource} alt="profile-img" />
                <div>@{owner.name}</div>
            </StyledProfileImgBox>
            <StyledProfileName>{name}</StyledProfileName>
        </StyledProfile>
    );
}

function MainContent() {
    const [name, setName] = useState("");
    const [owner, setOwner] = useState({});
    const [items, setItems] = useState([]);

    useEffect(() => {
        const path = "/sample/folder";
        const handleFolder = async () => {
            const { folder } = await getApi(path);
            setName(folder.name);
            setOwner(folder.owner);
            setItems(folder.links);
        };
        handleFolder();
    }, []);

    return (
        <>
            <Profile name={name} owner={owner} />
            <MainSection items={items} />
        </>
    );
}

function Shared() {
    return (
        <>
            <Header />
            <MainContent />
            <Footer />
        </>
    );
}

export default Shared;
