import React from "react";
import BookRow from "./BookRow";
import {BookEntity} from "./Entities";

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
    selectedId?: string;
}

class BooksTable extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            bookComponent: [] as BookEntity[],//Not Used
        }
    }

    handler = (event:any):void => {
        const {handler} = this.props;
        if (handler !== undefined && handler !== null) {
            handler(event);
        }
        this.setState({
            selectedId: event,
        });
    }

    async componentWillMount() {
//=============================================================================

//=============================================================================
    }
    render() {
        const { booksArray } = this.props;
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
                    handler={ this.handler }
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