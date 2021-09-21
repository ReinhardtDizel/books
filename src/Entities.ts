
export interface Book {
    id?: string;
    title?: string;
    description?: string;
    publishingDate?: Date;
    imageSource?: string;
    authors?: Author[];
}

export interface Author {
    id?: string;
    name?: string;
    bio?: string;
}


