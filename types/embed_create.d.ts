export type embed_create = {
    title?: string;
    type?: string;
    description?: string;
    url?: string;
    timestamp?: Date;
    color?: number | string;
    footer?: {
        text?: string;
        icon_url?: string;
        proxy_icon_url?: string;
    };
    image: {
        url?: string;
        proxy_url?: string;
        height?: string;
        width?: string;
    };
    thumbnail: {
        url?: string;
        proxy_url?: string;
        height?: string;
        width?: string;
    };
    video: {
        url?: string;
        proxy_url?: string;
        height?: string;
        width?: string;
    };
    provider: {
        name?: string;
        url?: string;
    };
    author: {
        name?: string;
        url?: string;
        icon_url?: string;
        proxy_icon_url?: string;
    };
    fields?: Field[]
}

export type Field = {
    name: string;
    value: string;
    inline?: boolean
}