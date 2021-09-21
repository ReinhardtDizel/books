import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import BookRow from "./BookRow";
import {Author} from "../Model/Author";
import {Book} from "../Model/Book";


interface Props {
    id?: string;
    title?: string;
    authors?: Author[];
    publishing?: Date;
    image?: string;
    imgSize?: string;
    handler?: (e:any) => void; // магия typescript
    books?: Book[] | null;
}

interface State {
    book?: Book[] | null; // Not Used
    selectedId?: string;
}

class BooksTable extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            book: [] as Book[], // Not Used
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
        const { books } = this.props;
        return <Row xs={1} md={2} className="g-4">
            {
                (books !== null && books !== undefined)
                    ? books.map(
                        (book) => {
                            return(
                            <BookRow
                                key={ book.id }
                                id={ book.id }
                                title={ book.title }
                                publishing={ book.publishing }
                                image={ book.image }
                                handler={ this.handler }
                            />
                            )
                        }
                        ):null
            }
        </Row>
    }
}
export default BooksTable;