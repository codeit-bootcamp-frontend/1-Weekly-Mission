interface CardItem {
    createdAt: string;
    created_at?: string;
    description: string;
    id: number;
    imageSource: string;
    image_source?: string;
    title: string;
    url: string;
}

interface FolderButtonItem {
    create_At: string;
    id: number;
    link: object;
    name: string;
    user_id: number;
}

export { CardItem, FolderButtonItem };
