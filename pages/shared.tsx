import Cards from "../component/card/card";
import { getApi } from "../component/api/api";
import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchBar from "../component/common/searchbar";
import { CardItem } from "../types/type";
import Image from "next/image";

interface Owner {
    id: number;
    name: string;
    profileImageSource: string;
}

interface Link {
    createdAt: string;
    description: string;
    id: number;
    imageSource: string;
    title: string;
    url: string;
}

interface FolderData {
    count: number;
    id: number;
    links: Link[];
    name: string;
    owner: Owner;
}

function MainSection({ items }: { items: CardItem[] }) {
    return (
        <StyledMain>
            <StyledMainBox>
                <SearchBar />
                <Cards items={items} />
            </StyledMainBox>
        </StyledMain>
    );
}

function Profile({ name, owner }: { name: string; owner?: Owner }) {
    return (
        <StyledProfile>
            <StyledProfileBox>
                <StyledProfileImg>
                    <Image
                        fill
                        src={owner?.profileImageSource as string}
                        alt="profile-img"
                    />
                </StyledProfileImg>
                <div>@{owner?.name}</div>
            </StyledProfileBox>
            <StyledProfileName>{name}</StyledProfileName>
        </StyledProfile>
    );
}

export default function Shared() {
    const [name, setName] = useState("");
    const [owner, setOwner] = useState<Owner>();
    const [items, setItems] = useState<CardItem[]>([]);

    useEffect(() => {
        const path = "/sample/folder";
        const handleFolder = async () => {
            const { folder } = (await getApi(path)) as unknown as {
                folder: FolderData;
            };
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

const StyledProfile = styled.div`
    background-color: #f0f6ff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px 60px;
    gap: 20px;
    text-align: center;
`;

const StyledProfileBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
    word-break: keep-all;
`;

const StyledProfileImg = styled.div`
    position: relative;
    width: 60px;
    height: 60px;
    border-radius: 47px;
    margin: 0 auto;
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
