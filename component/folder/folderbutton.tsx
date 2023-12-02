import styled from "styled-components";
import { FolderButtonItem } from "../../utils/type";

interface ButtonProps {
    item: FolderButtonItem;
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
}

interface FolderProps {
    items: FolderButtonItem[];
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
}

function Button({ item, title, setTitle, setQuery }: ButtonProps) {
    const handleButtonClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const titleName = (e.target as HTMLDivElement).textContent;
        if (titleName !== null) setTitle(titleName);
        const queryString = titleName === "전체" ? "" : `?folderId=${item.id}`;
        setQuery("/users/1/links" + queryString);
    };
    return (
        <StyledButton onClick={handleButtonClick} $select={title === item.name}>
            {item.name}
        </StyledButton>
    );
}

export default function FolderButton({
    items,
    setTitle,
    title,
    setQuery,
}: FolderProps) {
    const handleButtonClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const titleName = (e.target as HTMLDivElement).textContent;
        if (titleName !== null) setTitle(titleName);
        setQuery("/users/1/links");
    };
    return (
        <StyledButtonBox>
            <StyledButton
                onClick={handleButtonClick}
                $select={title === "전체"}
            >
                전체
            </StyledButton>
            {items.map((item) => (
                <Button
                    key={item.id}
                    item={item}
                    title={title}
                    setTitle={setTitle}
                    setQuery={setQuery}
                />
            ))}
        </StyledButtonBox>
    );
}

const StyledButtonBox = styled.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
`;

const StyledButton = styled.div<{ $select: boolean }>`
    display: flex;
    padding: 8px 12px;
    border-radius: 5px;
    border: 1px solid #6d6afe;
    cursor: pointer;
    background: ${({ $select }) => ($select ? "#6D6AFE" : "#fff")};
    color: ${({ $select }) => ($select ? "#fff" : "#000")};
`;
