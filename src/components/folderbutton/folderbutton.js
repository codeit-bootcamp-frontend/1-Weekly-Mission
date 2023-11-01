import styled from "styled-components";

const StyledButtonBox = styled.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
`;

const StyledButton = styled.div`
    display: flex;
    padding: 8px 12px;
    border-radius: 5px;
    border: 1px solid #6d6afe;
    cursor: pointer;
    background: ${({ select }) => (select === "true" ? "#6D6AFE" : "#fff")};
    color: ${({ select }) => (select === "true" ? "#fff" : "#000")};
`;

function Button({ item, title, setTitle, setQuery, onClick }) {
    const handleButtonClick = (e) => {
        const titleName = e.target.textContent;
        setTitle(titleName);
        const queryString =
            titleName === "전체"
                ? ""
                : "?" + new URLSearchParams({ folderId: item.id }).toString();
        setQuery("/users/1/links" + queryString);
    };
    return (
        <StyledButton
            onClick={handleButtonClick}
            select={title === item.name ? "true" : "false"}
        >
            {item.name}
        </StyledButton>
    );
}

function FolderButton({ items, setTitle, title, setQuery }) {
    const handleButtonClick = (e) => {
        const titleName = e.target.textContent;
        setTitle(titleName);
        setQuery("/users/1/links");
    };
    return (
        <StyledButtonBox>
            <StyledButton
                onClick={handleButtonClick}
                select={title === "전체" ? "true" : "false"}
            >
                전체
            </StyledButton>
            {items.map((item) => (
                <Button
                    key={item.id}
                    item={item}
                    title={title}
                    onClick={handleButtonClick}
                    setTitle={setTitle}
                    setQuery={setQuery}
                />
            ))}
        </StyledButtonBox>
    );
}

export default FolderButton;
