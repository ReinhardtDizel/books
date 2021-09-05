import React, {FunctionComponent, useEffect} from "react";
import BookRow from "./BookRow";

import API, {booksDataURL} from "./API";
import {BookEntity} from "./Entities";
import axios from "axios";

interface Props {
    id?: string;
    title?: string;
    authorName?: string;
    publishingHouse?: string;
    publishingDate?: string;
    productImageUrl?: string;
    imgSize?: string;
    handler?: (e:any) => void; // магия typescript
    booksArray?: BookEntity[] | null;
}

interface State {
    bookComponent?: BookEntity[] | null;//Not Used
}

class BooksTable extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            bookComponent: [] as BookEntity[],//Not Used
        }
    }

    async componentWillMount() {
//=============================================================================

//=============================================================================
    }
    render() {
        const { handler,booksArray } = this.props;
        const _bookComponents = (booksArray !== null && booksArray !== undefined)
            ? booksArray.map((book) => {
                return <BookRow
                    key={ book.id + '_10' }
                    id={ book.id }
                    title={ book.title }
                    authorName={ book.authorName }
                    publishingHouse={ book.publishingHouse }
                    publishingDate={ book.publishingDate }
                    productImageUrl={ book.productImageUrl }
                    handler={ handler }
                />
            })
            : null;
        return (
            <tbody>
                { _bookComponents }
            </tbody>
        )
    }
}
export default BooksTable;