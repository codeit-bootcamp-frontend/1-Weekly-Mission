import Card from "./Card";
import SearchBar from "./SearchBar";

const CardList = ({ links }) => {
	return (
		<div className="folder">
			<div className="folder__inner">
				<SearchBar />
				<div className="cardList">
					{links.map((link) => (
						<Card link={link} key={link.id} />
					))}
				</div>
			</div>
		</div>
	);
};

export default CardList;
