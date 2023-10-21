import { useEffect, useState } from "react";

import "./linkSharePage.css";
import LinkCardComponent from "../../components/linkCard/linkCard.jsx";
import { getSampleUserFolder, getSampleUserProfile } from "./linkSharePage.js";
import HeaderComponent from "../../components/header/header.jsx";

export default function LinkSharePage() {
	const [folder, setFolder] = useState([]);
	const [profile, setProfile] = useState({});

	async function handleFolder() {
		const folder = await getSampleUserFolder();
		setFolder(folder);
	}

	async function handleProfile() {
		const profile = await getSampleUserProfile();
		setProfile(profile);
	}

	useEffect(() => {
		handleProfile();
		handleFolder();
	}, []);

	return (
		<div className="page--container">
			<HeaderComponent profile={profile.email} />

			<main className="folder-info--wrapper">
				<img
					className="profile-image"
					src={profile.profileImageSource}
					alt="유저 프로필 이미지"
					width="60px"
					height="60px"
				/>
				<p className="profile-name">@{profile.name}</p>
				<p className="folder-name">{folder.name}</p>
			</main>

			<section className="folder-contents--wrapper">
				<ul className="link-card-list--wrapper">
					{folder?.links &&
						folder?.links?.map((cardData) => {
							return (
								<LinkCardComponent
									key={cardData.id}
									cardData={cardData}
									isSelected={false}
								/>
							);
						})}
				</ul>
			</section>
		</div>
	);
}
