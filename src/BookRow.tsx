import React from "react";
import Card from "react-bootstrap/Card";

interface Props {
    id?: number;
    title?: string;
    authorName?: string;
    publishingHouse?: string;
    publishingDate?: string;
    productImageUrl?: string;
    imgSize?: string;
    handler?: () => void; // магия typescript
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
        this.showBookDetailViewHandler = this.showBookDetailViewHandler.bind(this);
    }
    static defaultProps = {
        imgSize: '5rem',
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
            <tr onClick={this.showBookDetailViewHandler}>
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
    private readonly showBookDetailViewHandler = (event: any): void =>  {
        const {handler} = this.props;
        if (handler !== undefined && handler !== null) {
            handler();
        }
        // console.log('Нажатие на стрОку');
    }
}
export default BookRow;