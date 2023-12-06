import { CardItem } from "@/types/type";

export default function filterItems(
    items: CardItem[],
    search: string | undefined
) {
    const filterItems = items.map((item) => {
        const newItem = { ...item };
        if ("created_at" in newItem && "image_source" in newItem) {
            if (
                typeof newItem.created_at === "string" ||
                typeof newItem.image_source === "string"
            ) {
                newItem.createdAt = newItem.created_at;
                delete newItem.created_at;
                newItem.imageSource = newItem.image_source!;
                delete newItem.image_source;
            }
        }
        return newItem;
    });
    if (search !== undefined && search !== "") {
        const searchItems = filterItems.filter(
            (item) =>
                (item.title !== null && item.title.search(search) !== -1) ||
                (item.url !== null && item.url.search(search) !== -1) ||
                (item.description !== null &&
                    item.description.search(search) !== -1)
        );
        return searchItems;
    }
    return filterItems;
}
