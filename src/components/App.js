import "./Normalize.css";
import "./Common.css";
import "./Style.css";
import Header from "./Header";
import BgSection from "./BgSection";
import Footer from "./Footer";
import { useCallback, useEffect, useState } from "react";
import { getUserFolder, getUserInfo } from "../api";
import Folder from "./Folder";
import useAsync from "../hooks/useAsync";
function App() {
	const [userInfo, setUserInfo] = useState(null);
	const [folderInfo, setFolderInfo] = useState(null);

	const [userInfoLoading, userInfoError, getUserInfoAsync] = useAsync(getUserInfo);
	const [userFolderLoading, userFolderError, getUserFolderAsync] = useAsync(getUserFolder);

	const handleUserInfo = useCallback(async () => {
		const result = await getUserInfoAsync();
		if (!result) return;
		setUserInfo(result);
	}, [getUserInfoAsync, setUserInfo]);

	const handleUserFolder = useCallback(async () => {
		const result = await getUserFolderAsync();
		if (!result) return;
		const {
			folder: { id, name, owner, links },
		} = result;
		setFolderInfo({ id, name, owner, links });
	}, [getUserFolderAsync, setFolderInfo]);

	useEffect(() => {
		handleUserInfo();
		handleUserFolder();
	}, [handleUserInfo, handleUserFolder]);

	return (
		<>
			<BgSection bgColor="skyblue">
				{!userInfoLoading && (
					<Header isLogin={!!userInfo} userEmail={userInfo?.email} error={userInfoError}></Header>
				)}
				{userInfoError?.message && <div>{userInfoError.message}</div>}
			</BgSection>
			{userFolderError?.message && <div>{userFolderError.message}</div>}
			{userFolderLoading ? (
				<div>로딩중..</div>
			) : (
				folderInfo && <Folder userInfo={userInfo} folderInfo={folderInfo} />
			)}
			<Footer />
		</>
	);
}

export default App;
