import styles from "./LinkForm.module.scss";
import classNames from "classnames/bind";
import { useGetFolders } from "@/src/folder/data-access-folder";
import { AddLinkModal } from "@/src/link/ui-add-link-modal";
import { LinkForm as UiLinkForm } from "@/src/link/ui-link-form";
import { ChangeEvent, KeyboardEventHandler, useState } from "react";
import { useIntersectionObserver } from "@/src/sharing/util/useIntersectionObserver";

const cx = classNames.bind(styles);

type LinkFormProps = {
  hideFixedLinkForm?: boolean;
};

export const LinkForm = ({ hideFixedLinkForm = false }: LinkFormProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: folders } = useGetFolders();
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

  return (
    <div className={cx("container")}>
      <UiLinkForm
        ref={ref}
        onSubmit={() => setIsModalOpen(true)}
        value={linkUrl}
        onChange={handleChange}
      />
      <AddLinkModal
        isOpen={isModalOpen}
        folders={folders}
        description={linkUrl}
        selectedFolderId={selectedFolderId}
        setSelectedFolderId={setSelectedFolderId}
        onAddClick={() => {}}
        onCloseClick={closeModal}
        onKeyDown={handleKeyDown}
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
