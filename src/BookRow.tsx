import React from "react";
import Card from "react-bootstrap/Card";
import {Button} from "react-bootstrap";
import Table from "react-bootstrap/Table";


interface Props {
    id: number;
    title: string;
    authorName: string;
    publishingHouse: string;
    publishingDate: string;
    productImageUrl: string;
}

class BookRow extends React.Component<Props, {}> {
    imgSize = '3rem';
    render() {
        const {
            id,
            title,
            authorName,
            publishingHouse,
            publishingDate,
            productImageUrl,
        } = this.props; // декомпозирование

        return(
            <tr>
                <td>{id}</td>
                <td>{title}</td>
                <td>{authorName}</td>
                <td>{publishingHouse}</td>
                <td>{publishingDate}</td>
                <td>
                    <Card  style={{ width: this.imgSize }}>
                        <Button variant="outline-light" >
                            <Card.Img variant="top" src={productImageUrl} />
                        </Button>
                    </Card>
                </td>
            </tr>
        )
    }
}
export default BookRow;