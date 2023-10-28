// import { useEffect, useState } from "react";
// import SearchBar from "../components/SearchBar/SearchBar";
// import LinkAddInput from "../components/LinkAddInput/LinkAddInput";
// import CardList from "../components/CardList/CardList";
// import FolderButton from "../components/FolderButton/FolderButton";
// import useAsync from "../hooks/useAsync";

// import { getAllCards } from "../api/api";
// import "./FolderPage.css";

// function FolderPage() {
//   const [isFolderLoading, folderLoadingError, getFolderAsync] =
//     useAsync(getAllCards);
//   const [folderName, setFolderName] = useState("전체");
//   const [cardList, setCardList] = useState([]);

//   const loadUser = async () => {
//     const folderResult = await getFolderAsync();
//     setCardList(folderResult?.data);
//   };

//   const handleFolderName = (str) => {
//     setFolderName(str);
//   };

//   useEffect(() => {
//     loadUser();
//   }, []);

//   return (
//     <>
//       <section className="folder-section">
//         <div className="add-section">
//           <LinkAddInput />
//         </div>
//         <div className="search-section">
//           <SearchBar />
//         </div>
//         <div className="folder-buttons">
//           <FolderButton onChange={handleFolderName} value="전체" />
//           <FolderButton onChange={handleFolderName} value="나만의 장소" />
//         </div>
//         <h1 className="folder-name-title">{folderName}</h1>
//         <div className="card-section">
//           {isFolderLoading && <p> 유저 정보를 받아오는 중...</p>}
//           {folderLoadingError?.message && (
//             <span>{folderLoadingError.message}</span>
//           )}
//           <CardList cardList={cardList} />
//         </div>
//       </section>
//     </>
//   );
// }

// export default FolderPage;
