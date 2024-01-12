import styles from "./folderPage.module.css";
import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import { instance } from "../../../api/services/config";
import { FolderName, LinkInfo } from "@/types/types";
import { ALL_LINK_NAME, OPTION_ICONS } from "../../../constants/folderConstant";
import AddLinkInput from "../../../components/addLinkInput/AddLinkInput";
import SearchBar from "@/components/searchBar/SearchBar";
import Card from "@/components/card/Card";
import EmptyPage from "../../../components/emptyPage/EmptyPage";
import OptionButton from "../../../components/optionButton/OptionButton";
import FloatingButton from "@/components/floatingButton/FloatingButton";
import SortButton from "../../../components/sortButton/SortButton";
import addIcon from "@/public/icons/add.svg";
import addPrimaryIcon from "@/public/icons/addPrimaryColor.svg";
import useModal from "@/hooks/useModal";
import Image from "next/image";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { getAccessToken } from "@/utils/localStorage";
import { useRouter } from "next/router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/constants/queryKeys";

function FolderPage() {
  const [folderId, setFolderId] = useState<string | number>(ALL_LINK_NAME);
  const [filteredLinks, setFilteredLinks] = useState<LinkInfo[]>([]);
  const [keyword, setKeyword] = useState("");
  const [addFolderName, setAddFolderName] = useState("");
  const { open, close, isModalOpen, Dialog } = useModal();
  const inputRef = useRef<HTMLInputElement>(null);
  const [isResultEmpty, setIsResultEmpty] = useState(false);
  const { ref, isIntersecting } = useIntersectionObserver<HTMLFormElement>();
  const { ref: headerRef, isIntersecting: isHeaderIntersecting } =
    useIntersectionObserver<HTMLDivElement>();
  const showFixedAddLinkInput = !isIntersecting && !isHeaderIntersecting;
  const router = useRouter();
  const queryClient = useQueryClient();

  const getFolderNames = async () => {
    const token = localStorage.getItem("accessToken");
    try {
      const res = await instance.get(`/folders`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { data } = res;
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const folderNames = useQuery({
    queryKey: [QUERY_KEYS.FOLDER_NAMES],
    queryFn: getFolderNames,
  });
  const folders: FolderName[] = folderNames?.data;

  useEffect(() => {
    if (!getAccessToken()) {
      router.push("/signin");
    }
  }, []);

  const folderName =
    folderId === ALL_LINK_NAME
      ? ALL_LINK_NAME
      : folders?.find(({ id }) => id === folderId)?.name;

  const getUserLinks = async (folderId: string | number) => {
    let links;
    if (folderId === ALL_LINK_NAME) {
      try {
        const res = await instance.get(`/links`, {
          headers: {
            Authorization: `Bearer ${getAccessToken()}`,
          },
        });
        const { data } = res;
        links = data;
        setFilteredLinks(links);
      } catch (error) {
        console.error(error);
      }
    } else if (typeof folderId === "number") {
      try {
        const res = await instance.get(`/folders/${folderId}/links`, {
          headers: {
            Authorization: `Bearer ${getAccessToken()}`,
          },
        });
        const { data } = res;
        links = data;
        setFilteredLinks(links);
      } catch (error) {
        console.error(error);
      }
    }
    return links;
  };

  const linkData = useQuery({
    queryKey: [QUERY_KEYS.LINKS, folderId],
    queryFn: () => getUserLinks(folderId),
  });
  const links: LinkInfo[] = linkData.data;

  const handleCloseButtonClick = () => {
    setKeyword("");
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const handleKeywordKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    const eventTarget = e.target as HTMLInputElement;
    setKeyword(eventTarget.value);
  };

  const filterByKeyword = () => {
    const filteredData = links.filter((links) => {
      const { description, url, title } = links;
      const searchContent = `${description} ${url} ${title}`
        .toLowerCase()
        .split(" ")
        .join("");
      return searchContent.includes(keyword.toLowerCase().split(" ").join(""));
    });
    if (filteredData?.length > 0) {
      setFilteredLinks(() => filteredData);
    } else {
      setIsResultEmpty(true);
    }
  };

  useEffect(() => {
    if (!keyword) {
      getUserLinks(folderId);
      setIsResultEmpty(false);
      return;
    }
    filterByKeyword();
  }, [keyword, folderId]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddFolderName(e.target.value);
  };

  const addFolder = async () => {
    instance.post(
      `/folders`,
      {
        name: addFolderName,
      },
      {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`,
        },
      }
    );
  };

  const addFolderMutation = useMutation({
    mutationFn: () => addFolder(),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.FOLDER_NAMES] }),
  });

  return (
    <div className={styles.folderContainer}>
      <header className={styles.folderHeader}>
        <AddLinkInput folders={folders} ref={headerRef} />
      </header>
      <main className={styles.folderMain}>
        <SearchBar
          onKeyUp={handleKeywordKeyUp}
          onClick={handleCloseButtonClick}
          inputRef={inputRef}
          onSubmit={filterByKeyword}
        />
        {keyword === "" ? null : <p>{`${keyword}`}으로 검색한 결과입니다.</p>}
        <section className={styles.folderContentSection}>
          <div className={styles.folderSortAddButtonsContainer}>
            <div className={styles.folderSortButtonsContainer}>
              <SortButton
                onClick={() => setFolderId(ALL_LINK_NAME)}
                isClicked={folderId === ALL_LINK_NAME}
                text="전체"
              />
              {folders?.map((item) => (
                <SortButton
                  key={item.id}
                  onClick={() => setFolderId(item.id)}
                  isClicked={item.id === folderId}
                  text={item.name}
                />
              ))}
            </div>
            <button
              type="button"
              className={styles.folderAddButton}
              onClick={open}
            >
              폴더 추가
              <Image
                src={addPrimaryIcon}
                alt="add-icon"
                className={styles.folderAddIcon}
                width={20}
                height={20}
              />
            </button>
            <Dialog onClick={close} isModalOpen={isModalOpen}>
              <Dialog.Title>폴더 추가</Dialog.Title>
              <Dialog.Input value="" onChange={handleChange} />
              <Dialog.Button
                isAddButton
                onClick={() => addFolderMutation.mutate()}
              >
                추가하기
              </Dialog.Button>
            </Dialog>
          </div>
          <div className={styles.folderCategoryContainer}>
            <h1 className={styles.folderCategory}>{folderName}</h1>
            <div className={styles.folderOptionButtonContainer}>
              {folderName !== ALL_LINK_NAME
                ? OPTION_ICONS.map((item) => (
                    <OptionButton
                      key={item.id}
                      name={item.name}
                      alt={item.alt}
                      iconSrc={item.iconSrc}
                      folderName={folderName}
                      folderId={folderId}
                    />
                  ))
                : null}
            </div>
          </div>
        </section>
        {links?.length === 0 || isResultEmpty ? (
          <EmptyPage />
        ) : (
          <div className={styles.linksContainer}>
            {filteredLinks &&
              filteredLinks.map((item) => (
                <Card folders={folders} key={item.id} linkInfo={item} />
              ))}
          </div>
        )}
        <div className={styles.floatingActionButtonContainer}>
          <FloatingButton iconSrc={addIcon}>폴더 추가</FloatingButton>
        </div>
      </main>
      <div className={styles.floatingSearchbarContainer}>
        {showFixedAddLinkInput && <AddLinkInput folders={folders} />}
      </div>
      <form ref={ref} className={styles.footerTarget}></form>
    </div>
  );
}

export default FolderPage;
