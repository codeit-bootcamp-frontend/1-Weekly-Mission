import searchIcon from "../../assets/images/shared-search.svg";
import styled from "styled-components";

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

function SearchBar() {
    return (
        <StyledSearchBox>
            <img src={searchIcon} alt="searchIcon" />
            <form>
                <input type="text" placeholder="링크를 검색해 보세요." />
            </form>
        </StyledSearchBox>
    );
}

export default SearchBar;
