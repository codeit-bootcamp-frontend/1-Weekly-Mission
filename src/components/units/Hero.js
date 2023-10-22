import { getFolder } from "api/api";
import { useEffect, useState } from "react";
import "components/units/Hero.css";

export default function Hero() {
  const [folder, setFolder] = useState("");
  const [profile, setProfile] = useState();

  useEffect(() => {
    getFolderData();
  }, []);

  const getFolderData = async () => {
    const result = await getFolder();
    const { name: folderName, owner } = result.folder;

    setFolder(folderName);
    setProfile(owner);
  };

  return (
    <>
      <div className="hero__profile">
        <img src={profile?.profileImageSource} alt="avatar" className="hero__profile__image" />
        <p className="hero__profile__name">{profile?.name}</p>
      </div>
      <h2 className="hero__title">{folder}</h2>
    </>
  );
}
