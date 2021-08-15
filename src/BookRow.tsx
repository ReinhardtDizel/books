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
    handler?: (e:any) => void; // магия typescript
    selectedId?: number;
}
interface State{
    selectedId?: any;
}

class BookRow extends React.Component<Props, State > {
    constructor(props: Props) {
        super(props);
        this.state = {
            selectedId: this.props.id
        };
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
            <tr
                onClick={()=>{this.showBookDetailViewHandler(this.state.selectedId)}}
            >
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

  showBookDetailViewHandler = (e:any): void =>  {
        const {handler} = this.props;
        const _selectedId = this.state.selectedId;
        if (handler !== undefined && handler !== null) {
            handler(_selectedId);
        }
    }
}
export default BookRow;