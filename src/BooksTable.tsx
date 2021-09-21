import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import BookRow from "./BookRow";
import {Author, Book} from "./Entities";

interface Props {
    id?: string;
    title?: string;
    authors?: Author[];
    publishingDate?: Date;
    imageSource?: string;
    imgSize?: string;
    handler?: (e:any) => void; // магия typescript
    booksArray?: Book[] | null;
}

interface State {
    bookComponent?: Book[] | null; // Not Used
    selectedId?: string;
}

class BooksTable extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            bookComponent: [] as Book[], // Not Used
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

    render() {
        const { booksArray } = this.props;
        return <Row xs={1} md={2} className="g-4">
            {
                (booksArray !== null && booksArray !== undefined)
                    ? booksArray.map(
                        (book) => {
                            return(
                            <BookRow
                                key={ book.id + '_10' }
                                id={ book.id }
                                title={ book.title }
                                publishingDate={ book.publishingDate }
                                imageSource={ book.imageSource }
                                handler={ this.handler }
                            />
                            )
                        }
                        ):null
            }
        </Row>
        /*const { booksArray } = this.props;
        const _bookComponents = (booksArray !== null && booksArray !== undefined)
            ? booksArray.map((book) => {
                return (
                <BookRow
                    key={ book.id + '_10' }
                    id={ book.id }
                    title={ book.title }
                    authorName={ book.authorName }
                    publishingHouse={ book.publishingHouse }
                    publishingDate={ book.publishingDate }
                    productImageUrl={ book.productImageUrl }
                    handler={ this.handler }
                />
                )
            })
            : null;
        return (
            <tbody>
                { _bookComponents }
            </tbody>
        )
         */
    }
}
export default BooksTable;