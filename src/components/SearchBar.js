import React, { useState } from "react";
import Search from "../images/Search.png";

const SearchBar = () => {
	const [searchValue, setSearchValue] = useState("");
	const handleInputChange = (e) => setSearchValue(e.target.value);
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("검색:", searchValue);
		setSearchValue("");
	};

	return (
		<div className="search">
			<form className="search__form" onSubmit={handleSubmit}>
				<input type="image" src={Search} className="search__icon" alt="검색" />
				<input
					className="search__input"
					type="text"
					name="search"
					value={searchValue}
					onChange={handleInputChange}
					placeholder="링크를 검색해 보세요."
				></input>
			</form>
		</div>
	);
};

export default SearchBar;
