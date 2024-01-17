import styles from "./LinkForm.module.scss";
import classNames from "classnames/bind";
import { useGetFolders } from "@/src/folder/data-access-folder";
import { AddLinkModal } from "@/src/link/ui-add-link-modal";
import { LinkForm as UiLinkForm } from "@/src/link/ui-link-form";
import { ChangeEvent, KeyboardEventHandler, useEffect, useState } from "react";
import { useIntersectionObserver } from "@/src/sharing/util/useIntersectionObserver";
import fetcher from "@/src/sharing/util/axiosInstance";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Folder } from "@/src/folder/type";

const cx = classNames.bind(styles);

type LinkFormProps = {
  hideFixedLinkForm?: boolean;
};

export const LinkForm = ({ hideFixedLinkForm = false }: LinkFormProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchedFolders = useQuery({
    queryKey: ["folders"],
    queryFn: () =>
      fetcher<Folder[]>({
        method: "get",
        url: "/folders",
      }),
  });
  const folders = fetchedFolders.data?.data ?? [];

  const [selectedFolderId, setSelectedFolderId] = useState<number | null>(null);
  const [linkUrl, setLinkUrl] = useState<string>("");
  const { ref, isIntersecting } = useIntersectionObserver<HTMLFormElement>();
  const showFixedLinkForm = !hideFixedLinkForm && !isIntersecting;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLinkUrl(event.target.value);
  };

  const closeModal = () => {
    setSelectedFolderId(null);
    setIsModalOpen(false);
  };
  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };

  const queryClient = useQueryClient();

  const linksAddMutation = useMutation({
    mutationFn: () => {
      return fetcher({
        url: "/links",
        method: "POST",
        data: {
          url: linkUrl,
          folderId: selectedFolderId,
        },
      });
    },
    onSuccess: (data) => {
      if (data.status === 201) {
        queryClient.invalidateQueries({
          queryKey: ["links", selectedFolderId],
        });
      }
      closeModal();
      setLinkUrl("");
    },
  });
  const handleAddButtonClick = () => {
    linksAddMutation.mutate();
  };

  return (
    <div className={cx("container")}>
      <UiLinkForm
        ref={ref}
        onSubmit={() => {
          setIsModalOpen(true);
        }}
        value={linkUrl}
        onChange={handleChange}
      />
      <AddLinkModal
        isOpen={isModalOpen}
        folders={folders}
        description={linkUrl}
        selectedFolderId={selectedFolderId}
        setSelectedFolderId={setSelectedFolderId}
        onCloseClick={closeModal}
        onKeyDown={handleKeyDown}
        onAddClick={handleAddButtonClick}
      />

      {showFixedLinkForm && (
        <div className={cx("container", "fixed")}>
          <UiLinkForm
            onSubmit={() => setIsModalOpen(true)}
            value={linkUrl}
            onChange={handleChange}
          />
        </div>
      )}
    </div>
  );
};
