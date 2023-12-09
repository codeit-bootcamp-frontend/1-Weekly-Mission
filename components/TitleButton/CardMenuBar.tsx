// import Link from "next/link";
// import { CardButton, MenuTitle, Modal, ModalForm } from "@/components";
// import { Folders } from "@/components/FolderArticle/FolderArticle.jsx";
// import useModal from "@/public/useModal";
// import axios from "@/lib/axios";
// import { ThemeProvider } from "styled-components";
// import theme from "@/styles/display";
// import AddImg from "@/src/assets/add.svg";
// import * as Style from "./CardMenuBar.style";
// import {
//   GetStaticPaths,
//   GetStaticProps,
//   InferGetStaticPropsType,
// } from "next";
// import { ParsedUrlQuery } from "querystring";

// export const getStaticPaths: GetStaticPaths = async () => {
//   const result = await axios.get("sample/folder");
//   const data = await result.data.folder.links;
//   const paths = data.map((data: { id: number }) => ({
//     params: { id: String(data.id) },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// };

// interface Params extends ParsedUrlQuery {
//   id: string;
// }

// interface FolderProps {
//   folderId?: number | null;
//   selectFolder?: number | null;
// }

// export const getStaticProps: GetStaticProps<
//   FolderProps,
//   Params
// > = (context) => {
//   const folderId = context.params?.id ? parseInt(context.params.id) : null;
//   let selectFolder = folderId !== null ? folderId : null;

//   return {
//     props: {
//       folderId,
//       selectFolder,
//     },
//   };
// };

// type CardMenuBarProps = {
//   folders: Folders;
// } & InferGetStaticPropsType<typeof getStaticProps>;


// export default function CardMenuBar({
//   folders,
//   folderId,
//   selectFolder,
// }: CardMenuBarProps) {
//   const { isOpen, openModal, closeModal } = useModal();
//   const option = { input: true, button: { title: "추가하기", color: "blue" } };

//   const handleButtonClick = () => {
//     openModal();
//   };

//   return (
//     <>
//       <ThemeProvider theme={theme}>
//         <Style.Container>
//           <Style.Ul>
//             <Link href="/folder">
//               <li>
//                 <Style.Button active={selectFolder === null}>전체</Style.Button>
//               </li>
//             </Link>
//             {folders.map((folder) => (
//               <CardButton folder={folder} key={folder.id} folderId={folderId} />
//             ))}
//           </Style.Ul>
//           <span onClick={handleButtonClick}>
//             {/* 폴더 추가<AddImg alt="폴더추가" fill="#6D6AFE" /> */}
//           </span>
//         </Style.Container>
//         <MenuTitle title={selectFolder ? selectFolder : "전체"} />
//       </ThemeProvider>
//       {isOpen && (
//         <Modal
//           title="폴더추가"
//           closeModal={closeModal}
//           trigger={<ModalForm subTitle="내용입력" option={option} />}
//         />
//       )}
//     </>
//   );
// }
