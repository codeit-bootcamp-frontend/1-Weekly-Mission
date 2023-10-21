import React, { useState } from "react";
import noImg from "../images/no img.png";
import starIcon from "../images/star.svg";
import kebab from "../images/kebab.png";

const Card = ({ link }) => {
	const [isHover, setIsHover] = useState(false);
	const cardImgClass = `card__image ${isHover ? "card__image--hover" : ""}`;
	const cardTextClass = `card__text ${isHover ? "card__text--hover" : ""}`;
	const handleMouseOver = () => setIsHover(true);
	const handleMouseOut = () => setIsHover(false);

	const { createdAt, url, title, imageSource = noImg } = link;

	const createdDateObject = (timeStamp) => {
		const date = new Date(timeStamp);
		const createDate = `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
		return {
			createDate,
			time: date.getTime(),
		};
	};

	const timeInfo = createdDateObject(createdAt);
	const diffMinutes = Math.floor((new Date().getTime() - timeInfo.time) / 1000 / 60);

	const divideAndFloor = (value, divide) => Math.floor(value / divide);

	const getTime = (minute) => {
		if (minute < 2) return "1 minute ago";
		if (minute < 60) return `${minute} minutes ago`;

		const hour = divideAndFloor(minute, 60);
		if (hour < 24) return hour === 1 ? "1 hour ago" : `${hour} hours ago`;

		const day = divideAndFloor(hour, 24);
		if (day < 31) return day === 1 ? "1 day ago" : `${day} days ago`;

		const month = divideAndFloor(day, 30);
		if (month < 12) return month === 1 ? "1 month ago" : `${month} months ago`;

		const year = divideAndFloor(month, 12);
		return year === 1 ? "1 year ago" : `${year} years ago`;
	};

	return (
		<a
			className="card"
			href={url}
			onMouseOver={handleMouseOver}
			onMouseOut={handleMouseOut}
			target="_blank"
			rel="noreferrer"
		>
			<div className="card__image-wrap">
				<img className={cardImgClass} src={imageSource} alt={title} />
				<img className="card__star" src={starIcon} alt="star" />
			</div>
			<div className={cardTextClass}>
				<div className="card__time">
					<p className="card__time-diff">{getTime(diffMinutes)}</p>
					<img className="kebab" src={kebab} alt="more" />
				</div>
				<p className="card__title">{title}</p>
				<p className="card__created-date">{timeInfo.createDate}</p>
			</div>
		</a>
	);
};

export default Card;
