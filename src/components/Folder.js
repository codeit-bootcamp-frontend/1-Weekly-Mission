import "./Folder.css";
import React from "react";
import BgSection from "./BgSection";
import CardList from "./CardList";
import avatarImage from "../images/Avatar.png";

const Folder = ({ folderInfo }) => {
	const { owner, links, name: folderName } = folderInfo;
	const { profileImageSource = avatarImage, name: userName } = owner;
	return (
		<>
			<BgSection bgColor="skyblue">
				<div className="folder">
					<div className="folder__user">
						<img src={profileImageSource} className="folder__user-avatar" alt={userName} />
						<p className="folder__user-name">@{userName}</p>
					</div>
					<h1>{folderName}</h1>
				</div>
			</BgSection>
			<BgSection bgColor="white">
				<CardList links={links} />
			</BgSection>
		</>
	);
};

export default Folder;
