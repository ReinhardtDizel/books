import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col, ListGroupItem } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup'
import {Author} from "./Entities";

interface Props {
    id?: string;
    title?: string;
    authors?: Author[];
    publishing?: Date;
    image?: string;
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
        imgSize: '15rem',
    }
    render() {
        const {
            id,
            title,
            publishing,
            image,
            imgSize,
        } = this.props; // декомпозирование
        return(
            <Col sm ='auto'
                 onClick={()=>{this.showBookDetailViewHandler(this.state.selectedId)}}
            >
                <Card style={{ width: imgSize}} className = "box">
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup defaultActiveKey="#link1" variant="flush" className="list-group-flush">
                        <ListGroupItem action href="#link1" variant="secondary"
                        >
                        </ListGroupItem>
                        <ListGroupItem action href="#link3" disabled
                        >
                            {publishing}
                        </ListGroupItem>
                    </ListGroup>
                </Card>
            </Col>
        )
    }
  showBookDetailViewHandler = (e:any): void =>  {
        const {handler} = this.props;
        const {selectedId} = this.state;
        if (handler !== undefined && handler !== null) {
            handler(selectedId);
        }
    }
}
export default BookRow;