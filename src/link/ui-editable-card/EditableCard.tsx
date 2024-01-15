import styles from "./EditableCard.module.scss";
import classNames from "classnames/bind";
import {
  CSSProperties,
  KeyboardEventHandler,
  MouseEventHandler,
  useCallback,
  useRef,
  useState,
} from "react";
import { Card } from "@/src/sharing/ui-card";
import { CardContent } from "@/src/sharing/ui-card-content";
import { CardImage } from "@/src/sharing/ui-card-image";
import { Popover } from "@/src/sharing/ui-popover";
import { AlertModal } from "@/src/sharing/ui-alert-modal";
import { AddLinkModal } from "../ui-add-link-modal";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Folder } from "@/src/folder/type";
import fetcher from "@/src/sharing/util/axiosInstance";
import { MODALS_ID } from "../feature-card-list/constant";
import Image from "next/image";
import { useRouter } from "next/router";

const cx = classNames.bind(styles);

type EditableCardProps = {
  url: string;
  imageSource: string;
  alt: string;
  elapsedTime: string;
  description: string;
  createdAt: string;
  popoverPosition: {
    top?: CSSProperties["top"];
    right?: CSSProperties["right"];
    bottom?: CSSProperties["bottom"];
    left?: CSSProperties["left"];
  };
  onDeleteClick?: () => void;
  onAddToFolderClick?: () => void;
  id: number;
};

export const EditableCard = ({
  id,
  url,
  imageSource,
  alt,
  elapsedTime,
  description,
  createdAt,
  popoverPosition,
}: EditableCardProps) => {
  const router = useRouter();
  const folderId = Number(router?.query?.folderId?.[0]);

  const [isHovered, setIsHovered] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const kebabButtonRef = useRef(null);
  const handleMouseOver = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const [selectedFolderId, setSelectedFolderId] = useState<number | null>(null);
  const [currentModal, setCurrentModal] = useState<string | null>(null);

  const fetchedFolders = useQuery({
    queryKey: ["folders"],
    queryFn: () =>
      fetcher<Folder[]>({
        method: "get",
        url: "/folders",
      }),
  });

  const folders = fetchedFolders.data?.data ?? [];

  const closeModal = () => setCurrentModal(null);
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
          url,
          folderId,
        },
      });
    },
    onSuccess: (data) => {
      if (data.status === 201) {
        queryClient.invalidateQueries({
          queryKey: ["links", 480],
        });
      }
    },
  });

  const linksDeleteMutation = useMutation({
    mutationFn: () => {
      return fetcher({
        url: `/links/${id}`,
        method: "DELETE",
      });
    },
    onSuccess: (data) => {
      if (data.status === 204) {
        queryClient.invalidateQueries({
          queryKey: ["links", folderId],
        });
      }
    },
  });

  const handleAddButtonClick = () => {
    linksAddMutation.mutate();
    closeModal();
  };

  const handleDeleteButtonClick = () => {
    linksDeleteMutation.mutate();
    closeModal();
  };

  const handleKebabClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    setIsPopoverOpen(true);
  };
  const handleBackgroundClick = useCallback(() => {
    setIsPopoverOpen(false);
  }, []);

  const handleDeleteClick: MouseEventHandler<HTMLLIElement> = (event) => {
    event.preventDefault();
    setCurrentModal(MODALS_ID.deleteLink);
    setIsPopoverOpen(false);
  };

  const handleAddToFolderClick: MouseEventHandler<HTMLLIElement> = (event) => {
    event.preventDefault();
    setCurrentModal(MODALS_ID.addToFolder);
    setIsPopoverOpen(false);
  };
  return (
    <>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Card onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
          <CardImage
            imageSource={imageSource}
            alt={alt}
            isZoomedIn={isHovered}
          />
          <CardContent
            elapsedTime={elapsedTime}
            description={description}
            createdAt={createdAt}
            isHovered={isHovered}
          />
          <button
            className={cx("star")}
            onClick={(event) => event.preventDefault()}
          >
            <Image
              src="/images/star.svg"
              width={34}
              height={34}
              alt="즐겨찾기를 나타내는 별"
            />
          </button>
          <button
            ref={kebabButtonRef}
            className={cx("kebab")}
            onClick={handleKebabClick}
          >
            <img src="/images/kebab.svg" alt="더보기를 나타내는 점 3개" />
          </button>
          <Popover
            isOpen={isPopoverOpen}
            anchorRef={kebabButtonRef}
            anchorPosition={popoverPosition}
            onBackgroundClick={handleBackgroundClick}
          >
            <ul className={cx("popover-list")}>
              <li onClick={handleDeleteClick}>삭제하기</li>
              <li onClick={handleAddToFolderClick}>폴더에 추가</li>
            </ul>
          </Popover>
        </Card>
      </a>

      <AlertModal
        isOpen={currentModal === MODALS_ID.deleteLink}
        title="링크 삭제"
        description={url}
        buttonText="삭제하기"
        onCloseClick={closeModal}
        onKeyDown={handleKeyDown}
        handleButtonClick={handleDeleteButtonClick}
      />
      <AddLinkModal
        isOpen={currentModal === MODALS_ID.addToFolder}
        folders={folders}
        description={url}
        selectedFolderId={selectedFolderId}
        setSelectedFolderId={setSelectedFolderId}
        onAddClick={handleAddButtonClick}
        onCloseClick={() => {
          setSelectedFolderId(null);
          closeModal();
        }}
        onKeyDown={handleKeyDown}
      />
    </>
  );
};
