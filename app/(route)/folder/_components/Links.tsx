"use client";

import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import Cards from "@/components/card/Cards";
import DeferredSuspense from "@/components/skeleton/DeferredSuspense";
import LinkSkeleton from "@/components/skeleton/LinkSkeleton";
import API from "@/service/api";
import { filterLinks } from "@/utils/filterLinks";

const Links = () => {
  const getLinks = async (folderId?: number) => {
    if (!folderId) {
      const item = await API.link.getLinks();
      return item?.data ?? [];
    } else {
      const item = await API.link.getLinksById(folderId);
      return item?.data ?? [];
    }
  };

  const params = useSearchParams();
  const selectedFolderId = Number(params.get("folderId"));

  const { data: links, isPending } = useQuery({
    queryKey: ["links", selectedFolderId],
    queryFn: () => getLinks(selectedFolderId),
  });

  const searchKeyword = params.get("keyword");
  const filteredLinks = filterLinks(links, searchKeyword);

  return (
    <DeferredSuspense isFetching={isPending} fallback={<LinkSkeleton />}>
      <Cards type="folder" data={filteredLinks} />
    </DeferredSuspense>
  );
};

export default Links;
