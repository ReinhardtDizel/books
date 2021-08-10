import React from "react";
import Card from "react-bootstrap/Card";
import {Button} from "react-bootstrap";
import Table from "react-bootstrap/Table";


interface Props {
    id?: number;
    title?: string;
    authorName?: string;
    publishingHouse?: string;
    publishingDate?: string;
    productImageUrl?: string;
    imgSize?: string;
}
interface State {
    id?: number;
    title?: string;
    authorName?: string;
    publishingHouse?: string;
    publishingDate?: string;
    productImageUrl?: string;
    isSelected?: boolean;
}

class BookRow extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.mouseClick = this.mouseClick.bind(this);
    }
    static defaultProps = {
        imgSize: '5rem'
    }
    mouseClick(event:any) {
    }
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
                    <Card  style={{ width: this.props.imgSize}} >
                        <Card.Img variant="top" src={productImageUrl} />
                    </Card>
                </td>
            </tr>
        )
    }
}
export default BookRow;