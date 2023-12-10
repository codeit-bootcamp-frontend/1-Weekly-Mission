import searchIcon from "../../public/images/searchBar/shared-search.svg";
import styled from "styled-components";
import Image from "next/image";
import { ChangeEvent } from "react";
import closeIcon from "../../public/images/searchBar/close.png";

export default function SearchBar({
    search,
    setSearch,
}: {
    search?: string;
    setSearch?: React.Dispatch<React.SetStateAction<string>>;
}) {
    return (
        <StyledSearchBox>
            <Image src={searchIcon} alt="searchIcon" />
            <input
                type="text"
                placeholder="링크를 검색해 보세요."
                value={search}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setSearch(e.target.value)
                }
            />
            <StyledCloseBox onClick={() => setSearch("")}>
                <Image src={closeIcon} alt="close" />
            </StyledCloseBox>
        </StyledSearchBox>
    );
}

const StyledCloseBox = styled.div`
    cursor: pointer;
`;

const StyledSearchBox = styled.div`
    padding: 15px 16px;
    border-radius: 10px;
    background: #f5f5f5;
    display: flex;
    align-items: center;
    gap: 10px;
    input {
        width: 1000px;
        border: none;
        background: #f5f5f5;
        &::placeholder {
            color: #666;
        }
        @media (max-width: 767px) {
            width: 375px;
        }
        @media (min-width: 768px) and (max-width: 1124px) {
            width: 700px;
        }
    }
`;
