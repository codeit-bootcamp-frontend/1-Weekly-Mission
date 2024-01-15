import { useGetFolders } from "@/src/folder/data-access-folder";
import { AddLinkModal } from "@/src/link/ui-add-link-modal";
import { EditableCard } from "@/src/link/ui-editable-card";
import { NoLink } from "@/src/link/ui-no-link";
import { KeyboardEventHandler, useCallback, useRef, useState } from "react";
import { CardList as UiCardList } from "@/src/link/ui-card-list";
import { Link } from "@/src/link/type";

type CardListProps = {
  links: Link[];
};

export const CardList = ({ links }: CardListProps) => {
  const cardListRef = useRef(null);
  const getPopoverPosition = useCallback(
    (cardIndex: number) => {
      const count =
        cardListRef?.current !== null
          ? window
              .getComputedStyle(cardListRef?.current)
              .getPropertyValue("grid-template-columns")
              .split(" ").length
          : 1;
      if ((cardIndex + 1) % count === 0) {
        return { right: 0 };
      }
      return { left: 0 };
    },
    [cardListRef]
  );

  if (links.length === 0) return <NoLink />;

  return (
    <UiCardList ref={cardListRef}>
      {links.map((link, index) => (
        <EditableCard
          key={link?.id}
          {...link}
          popoverPosition={getPopoverPosition(index)}
        />
      ))}
    </UiCardList>
  );
};
