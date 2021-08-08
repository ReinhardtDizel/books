import React from "react";
import BookRow from "./BookRow";
import Table from "react-bootstrap/Table";
import {booksData} from "./BooksData";

class BooksTable extends React.Component {
    render() {
        const bookComponents = booksData.map((book)=> (
            <BookRow
                id={book.id}
                title={book.title}
                authorName={book.authorName}
                publishingHouse={book.publishingHouse}
                publishingDate={book.publishingDate}
                productImageUrl={book.productImageUrl}
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