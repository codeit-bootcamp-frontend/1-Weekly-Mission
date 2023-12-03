interface CardItem {
    createdAt?: string;
    created_at?: string;
    description: string;
    id: number;
    imageSource?: string;
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

interface CardProps {
    item: CardItem;
    setClose?: React.Dispatch<React.SetStateAction<boolean>>;
    setTag?: React.Dispatch<React.SetStateAction<string>>;
    close?: boolean;
}

interface CardsProps {
    items: CardItem[];
    setClose?: React.Dispatch<React.SetStateAction<boolean>>;
    setTag?: React.Dispatch<React.SetStateAction<string>>;
    close?: boolean;
    search?: string;
}

export type { CardItem, FolderButtonItem, CardProps, CardsProps };
