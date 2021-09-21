
export interface Book {
    id?: string;
    title?: string;
    description?: string;
    publishing?: Date;
    image?: string;
    authors?: Author[];
}

export interface Author {
    id?: string;
    name?: string;
    bio?: string;
}


