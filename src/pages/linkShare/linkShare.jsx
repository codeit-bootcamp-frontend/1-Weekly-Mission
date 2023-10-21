import { useEffect, useState } from "react";

import "./linkShare.css";
import CardComponent from "../../components/card/card.jsx";
import { getSampleUserFolder } from "./linkShare.js";

export default function LinkSharePage() {
	const [cardList, setCardList] = useState([]);

	async function handleCardList() {
		const { links } = await getSampleUserFolder();
		setCardList(links);
	}

	useEffect(() => {
		handleCardList();
	}, []);

	return (
		<section className="list-share--container">
			<ul className="card-list--container">
				{cardList.map((cardData) => {
					return (
						<CardComponent
							key={cardData.id}
							cardData={cardData}
							isSelected={false}
						/>
					);
				})}
			</ul>
		</section>
	);
}
