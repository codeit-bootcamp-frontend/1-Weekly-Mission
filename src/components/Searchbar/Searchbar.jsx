import { useState } from "react"

import IMAGES from "../../assets/images.js"
import * as S from "./styles.js"

const Searchbar = () => {
  const [searchText, setSearchText] = useState("")
  const handleSearch = (e) => {
    setSearchText(e.target.value)
  }

  const handleSearchDelete = (e) => {
    setSearchText("")
  }

  return (
    <S.SearchbarBox>
      <S.SearchbarInnerBox>
        <label htmlFor="search">
          <img src={IMAGES.search} alt="Search" />
        </label>
        <S.SearchbarInput
          id="search"
          name="search"
          value={searchText}
          placeholder="링크를 검색해 보세요"
          autoFocus
          onChange={handleSearch}
        />
      </S.SearchbarInnerBox>
      {searchText !== "" && (
        <S.SearchbarDeleteBox onClick={handleSearchDelete}>
          X
        </S.SearchbarDeleteBox>
      )}
    </S.SearchbarBox>
  )
}

export default Searchbar
