import React from "react";
import BookRow from "./BookRow";
import Table from "react-bootstrap/Table";
import {booksData} from "./BooksData";

interface Props {
    id?: number;
    title?: string;
    authorName?: string;
    publishingHouse?: string;
    publishingDate?: string;
    productImageUrl?: string;
    imgSize?: string;
    handler?: (e:any) => void; // магия typescript
}

class BooksTable extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);
    }
    render() {
        const {handler} = this.props;
        const bookComponents = booksData.map((book)=> (
            <BookRow
                id={book.id}
                title={book.title}
                authorName={book.authorName}
                publishingHouse={book.publishingHouse}
                publishingDate={book.publishingDate}
                productImageUrl={book.productImageUrl}
                handler={handler}
            />
        ));
        return (
            <div className='ui items'>
                <Table>
                    <thead>
                    </thead>
                    <tbody>
                        {bookComponents}
                    </tbody>
                </Table>
            </div>
        )
    }
}
export default BooksTable;