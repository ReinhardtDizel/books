import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import Table from "react-bootstrap/Table";
import BooksTable from "./BooksTable";
import EditRow from "./EditRow";
import {BookEntity} from "./Entities";
import API, {booksDataURL} from "./API";

interface Props {
    title?: string;
    authorName?: string;
    publishingHouse?: string;
    publishingDate?: string;
    productImageUrl?: string;
}
interface State {
    title?: string;
    authorName?: string;
    publishingHouse?: string;
    publishingDate?: string;
    productImageUrl?: string;
    selectedId?: any;
}

class PageGrid extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            selectedId: null,
            title: '',
            authorName: '',
            publishingHouse: '',
            publishingDate: '',
            productImageUrl: ''
        };
    }

   findSelectedRow =(event:any): any => {
        /*const _find = Books.find(e => e.id === event);
        if (_find !== undefined && _find !== null) {
            return _find;
        }*/
    }
    selectedToInput = ():void => { // по феншую
    }
    openBookDetailsView = (event:any): void => {

        const _find = this.findSelectedRow(event);
        this.setState({
            selectedId:event,
            title: _find.title,
            authorName: _find.authorName,
            publishingHouse: _find.publishingHouse,
            publishingDate: _find.publishingDate,
            productImageUrl: _find.productImageUrl,
        });
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col xs={8}>
                        <Table striped bordered hover>
                            <thead>
                            <tr></tr>
                            </thead>
                            <BooksTable
                               handler={this.openBookDetailsView}
                            />
                        </Table>
                    </Col>
                    <EditRow
                        handler={this.selectedToInput}
                        title={this.state.title}
                        authorName={this.state.authorName}
                        publishingHouse={this.state.publishingHouse}
                        publishingDate={this.state.publishingDate}
                        productImageUrl={this.state.productImageUrl}
                    />
                </Row>
            </Container>// BooksTable handler={this.openBookDetailsView} свойства компонента в <>
        )
    }
}

export default PageGrid;