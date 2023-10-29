import { useState } from "react";
import styled from "styled-components";

const StyledButtonBox = styled.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
`

const StyledButton = styled.div`
    display: flex;
    padding: 8px 12px;
    border-radius: 5px;
    border: 1px solid #6D6AFE;
    cursor: pointer;
    background: ${({select}) => select==='true' ? '#6D6AFE' : '#fff'};
    color: ${({select}) => select==='true' ? '#fff' : '#000'};
`

function Button ({data, onClick, query, setSelect,select}) {
    function handleTitle() {
        onClick(data.name);
        query(`/users/1/links?folderId=${data.id}`)
        setSelect(data.name)
    }
    return (
        <StyledButton onClick={handleTitle} select={select === data.name ? 'true' : 'false'}>
            {data.name}
        </StyledButton>
    )
}

function TitleButton ({data, onClick, query}) {
    const [select, setSelect] = useState('전체');
    function handleDefault () {
        onClick('전체');
        query('/users/1/links');
        setSelect('전체')
    }
    return(
        <StyledButtonBox>
            <StyledButton onClick={handleDefault} select={select === '전체' ? 'true' : 'false'}>
                전체
            </StyledButton>
            {data.map((data)=>
            <Button key={data.id} data={data} onClick={onClick} query={query} setSelect={setSelect} select={select} />)}
        </StyledButtonBox>
    );
}

export default TitleButton;