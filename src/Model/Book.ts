import {Author} from './Author';

export interface Book {
    id?: string;
    title?: string;
    description?: string;
    publishing?: Date;
    image?: string;
    authors?: Author[];
}