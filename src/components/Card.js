import React, { useState } from "react";
import noImg from "../images/no img.png";
import starIcon from "../images/star.svg";
import kebab from "../images/kebab.png";
import dayjs from "dayjs";

import timezone from "dayjs/plugin/timezone";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";
import updateLocale from "dayjs/plugin/updateLocale";
const timeThresholds = [
	{ l: "s", r: 1 },
	{ l: "m", r: 1 },
	{ l: "mm", r: 59, d: "minute" },
	{ l: "h", r: 1 },
	{ l: "hh", r: 23, d: "hour" },
	{ l: "d", r: 1 },
	{ l: "dd", r: 30, d: "day" },
	{ l: "M", r: 1 },
	{ l: "MM", r: 11, d: "month" },
	{ l: "y", r: 1 },
	{ l: "yy", d: "year" },
];

const relativeTimeLocale = {
	future: "in %s",
	past: "%s ago",
	s: "1 minute",
	m: "1 minute",
	mm: "%d minutes",
	h: "1 hour",
	hh: "%d hours",
	d: "1 day",
	dd: "%d days",
	M: "1 month",
	MM: "%d months",
	y: "1 year",
	yy: "%d years",
};

const extendDayjs = () => {
	dayjs.extend(relativeTime, { thresholds: timeThresholds });
	dayjs.extend(updateLocale);
	dayjs.extend(utc);
	dayjs.extend(timezone);
	dayjs.updateLocale("en", { relativeTime: relativeTimeLocale });
};

extendDayjs();

const Card = ({ link }) => {
	const [isHover, setIsHover] = useState(false);
	const cardImgClass = `card__image${isHover ? " card__image--hover" : ""}`;
	const cardTextClass = `card__text${isHover ? " card__text--hover" : ""}`;
	const handleMouseOver = () => setIsHover(true);
	const handleMouseOut = () => setIsHover(false);

	const { createdAt, url, title, imageSource = noImg } = link;

	const now = dayjs().utc(true);
	const utcDate = dayjs.utc(createdAt);
	const fromNow = utcDate.from(now);
	const formattedDate = dayjs(utcDate).format("YYYY. M. DD");

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
					<p className="card__time-diff">{fromNow}</p>
					<img className="kebab" src={kebab} alt="more" />
				</div>
				<p className="card__title">{title}</p>
				<p className="card__created-date">{formattedDate}</p>
			</div>
		</a>
	);
};

export default Card;
