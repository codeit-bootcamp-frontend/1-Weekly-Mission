import React, { useEffect, useState } from "react";
import { getCardPics, getUsers } from "../api";
import styled from "styled-components";
import "./Header.css";

const ResponSiveHeader = styled.div`
  background-color: #edf7ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2.5rem;
  padding: 3rem;
  /* tablet */
  @media (min-width: 768px) {
    padding: 5rem;
  }
  /* descktop*/
  @media (min-width: 1200px) {
    padding: 5rem;
  }
`;
export default function Header() {
  const [folderName, setFolderName] = useState("");
  const [profile, setProfile] = useState({});
  const [personName, setPersonName] = useState("");
  const [personImage, setPersonImage] = useState("");

  const handleFolderData = async () => {
    const { folder } = await getCardPics();
    const { name, owner } = folder;
    setFolderName(name);
    setProfile(owner);
  };

  const handleProfileData = () => {
    const { name, profileImageSource } = profile;
    setPersonName(name);
    setPersonImage(profileImageSource);
  };

  useEffect(() => {
    handleFolderData();
  }, []);
  
  useEffect(() => {
    handleProfileData();
  }, [profile]);
  return (
    <div>
      <ResponSiveHeader>
        <img src={personImage} alt={personName} width="200"></img>
        <p className="Text-codeit">{personName}</p>
        <p className="Text-favorite">{folderName}</p>
      </ResponSiveHeader>
    </div>
  );
}
