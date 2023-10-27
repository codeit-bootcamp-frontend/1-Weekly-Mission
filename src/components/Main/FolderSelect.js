import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components"
import { getData } from "../../utils/api";
import { Link } from "react-router-dom";
import imgAdd from "../../assets/add.svg"
import imgAddWhite from "../../assets/addWhite.svg"
import imgShare from "../../assets/share.svg"
import imgEdit from "../../assets/edit.svg"
import imgDelete from "../../assets/delete.svg"

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  width: 34rem;
  padding-left: 0;
  
  @media screen and (min-width: 768px) {
    width: 68rem;
  }

  @media screen and (min-width: 1200px) {
    width: 106rem;
  }
  `

const Li = styled.li`
  display: flex;
  padding: 0.6rem 1rem;
  background-color: var(--White);
  color: var(--Black);
  border: 0.1px solid var(--Primary);
  border-radius: 0.5rem;
  font-size: 1.4rem;
  
  &:hover,
  &.active {
    background-color: var(--Primary);
    color: var(--White);
  }
`

const BaseButton = styled.button`
    display: flex;
    align-items: center;
    background-color: var(--White);
    white-space: nowrap;
    border: none;
`

const ButtonAdd = styled(BaseButton)`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 0.2rem;
    height: 3rem;
    color: var(--Primary);
  }
`

const ButtonControl = styled(BaseButton)`
  gap: 0.5rem;
  color: var(--Gray4);
  font-size: 1.4rem;
  font-weight: 600;
`

const scrollDown = keyframes`
  50% {
    bottom: 11rem;
  }
`

const ButtonFloat = styled(BaseButton)`
  animation: ${scrollDown} 1.3s ease-in-out infinite;
  position: fixed;
  z-index: 1;
  bottom: 10.1rem;
  padding: 0.8rem 2.4rem;
  border-radius: 2rem;
  gap: 0.3rem;
  background-color: var(--Primary);
  color: var(--White);
  font-size: 1.6rem;
  font-weight: 500;

  &:hover {
    background-color: var(--Red);
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 1rem;
  width: 34rem;

  @media screen and (min-width: 768px) {
    width: 68rem;
    flex-wrap: nowrap;
  }

  @media screen and (min-width: 1200px) {
    width: 106rem;
  }
`

const ControlBox = styled.div`
  display: flex;
  ${({ title }) => title === "전체" && `display: none;`}
  gap: 1.2rem;
`

const Img = styled.img`
  width: 1.8rem;
`

const H1 = styled.h1`
  font-size: 2.4rem;
  font-weight: 600;
  width: 34rem;
  padding-left: 0;
  
  @media screen and (min-width: 768px) {
    width: 68rem;
  }

  @media screen and (min-width: 1200px) {
    width: 106rem;
  }
`

function FolderSelect() {
  const [categories, setCategories] = useState(null);
  const [prevSelect, setPrevSelect] = useState(null);
  const [title, setTitle] = useState('전체');

  const loadData = async (...option) => {
    const result = await getData(...option);
    if (!result) return;

    const newCatergories = result.data;
    setCategories(newCatergories);
  }

  const handleClick = (e) => {
    prevSelect?.classList.remove("active");
    setPrevSelect(e.target);
    e.target.classList.add("active");
    setTitle(e.target.textContent);
  }

  useEffect(() => {
    loadData('folder', 'category');
  }, [])

  return (
    <>
      <Flex>
        <Ul>
          <Link to="/folder" onClick={handleClick}>
            <Li>전체</Li>
          </Link>
          {categories?.map(category => (
            <Link to={`?folderId=${category.id}`} key={category.id} onClick={handleClick}>
              <Li>{category.name}</Li>
            </Link>
          ))}
        </Ul>
        <ButtonAdd>
          폴더 추가 <Img src={imgAdd} />
        </ButtonAdd>
      </Flex>
      <Flex>
        <H1>{title}</H1>
        <ControlBox title={title}>
          <ButtonControl>
            <Img src={imgShare} />공유
          </ButtonControl>
          <ButtonControl>
            <Img src={imgEdit} />이름 변경
          </ButtonControl>
          <ButtonControl>
            <Img src={imgDelete} />삭제
          </ButtonControl>
        </ControlBox>
      </Flex>
      <ButtonFloat>
        폴더 추가 <Img src={imgAddWhite} />
      </ButtonFloat>
    </>

  )
}

export default FolderSelect