import { useGetFolders } from "folder/data-access-folder";
import { useGetLinks } from "link/data-access-link";
import { Layout } from "sharing/feature-layout";
import { FolderLayout } from "page-layout/FolderLayout";
import { FolderToolBar } from "folder/feature-folder-tool-bar";
import { SearchBar } from "link/ui-search-bar";
import { useEffect, useRef, useState } from "react";
import { ALL_LINKS_ID } from "link/data-access-link/constant";
import { LinkForm } from "link/feature-link-form";
import { CardList } from "link/feature-card-list";

export const FolderPage = () => {
  const { data: folders } = useGetFolders();
  const [selectedFolderId, setSelectedFolderId] = useState(ALL_LINKS_ID);
  const { data: links, loading } = useGetLinks(selectedFolderId);
  const [searchQuery, setSearchQuery] = useState("");
  const filteredLinks = searchQuery
    ? links.filter(
        (link) =>
          link?.url?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          link?.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          link?.title?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : links;
  const [isSticky, setIsSticky] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  const footerRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === footerRef.current) {
            setIsFooterVisible(entry.isIntersecting);
          } else if (entry.target === topRef.current) {
            setIsSticky(!entry.isIntersecting);
          }
        });
      },
      { threshold: [1, 1], rootMargin: "50px" }
    );

    if (topRef.current) {
      observer.observe(topRef.current);
    }

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [isFooterVisible]);

  return (
    <Layout ref={footerRef} isSticky={false}>
      <div ref={topRef} style={{ height: "1px", position: "absolute", top: "0" }}></div>
      <FolderLayout
        linkForm={<LinkForm isHidden={isFooterVisible} isSticky={isSticky} folders={folders} />}
        searchBar={<SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />}
        folderToolBar={
          <FolderToolBar folders={folders} selectedFolderId={selectedFolderId} onFolderClick={setSelectedFolderId} />
        }
        cardList={loading ? null : <CardList folders={folders} links={filteredLinks} />}
      />
    </Layout>
  );
};
