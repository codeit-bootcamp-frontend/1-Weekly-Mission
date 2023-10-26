import { useState } from "react"

import IMAGES from "../../assets/images.js"
import {
  SearchbarBox,
  SearchbarDeleteBox,
  SearchbarInnerBox,
  SearchbarInput,
} from "./styles.js"

const Searchbar = () => {
  const [searchText, setSearchText] = useState("")
  const handleSearch = (e) => {
    setSearchText(e.target.value)
  }

  const handleSearchDelete = (e) => {
    setSearchText("")
  }

  return (
    <SearchbarBox>
      <SearchbarInnerBox>
        <label htmlFor="search">
          <img src={IMAGES.search} alt="Search" />
        </label>
        <SearchbarInput
          id="search"
          name="search"
          value={searchText}
          placeholder="링크를 검색해 보세요"
          autoFocus
          onChange={handleSearch}
        />
      </SearchbarInnerBox>
      {searchText !== "" && (
        <SearchbarDeleteBox onClick={handleSearchDelete}>X</SearchbarDeleteBox>
      )}
    </SearchbarBox>
  )
}

export default Searchbar
