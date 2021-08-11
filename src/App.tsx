import React from "react";
import {Container, Row, Col, Form} from "react-bootstrap";
import Table from "react-bootstrap/Table";
import BooksTable from "./BooksTable";

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
    }

class EditRow extends  React.Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.state = {
            title: '',
            authorName: '',
            publishingHouse: '',
            publishingDate: '',
            productImageUrl: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    private readonly handleInputChange = (event: any):void => { // по феншую
        const { name, value } = event.target;
        this.setState({
            [name]: value, // запятая по феншую
        });
    }
     render() {
        return (
            <Col className={'editContainer'} xs={4}>
                <Table>
                    <thead>
                    <th><h6>Edit this</h6></th>
                    </thead>
                    <tbody>
                    <tr><td>Title:</td></tr>
                    <tr>
                        <td>
                            <input
                                type="text"
                                name="title"
                                value={this.state.title}
                                onChange={this.handleInputChange}
                            />
                        </td>
                    </tr>
                    <tr><td>Author:</td></tr>
                    <tr>
                        <td>
                            <input
                                type="text"
                                name="authorName"
                                value={this.state.authorName}
                                onChange={this.handleInputChange}
                            />
                        </td>
                    </tr>
                    <tr><td>Publishing House:</td></tr>
                    <tr>
                        <td>
                            <input
                                type="text"
                                name="publishingHouse"
                                value={this.state.publishingHouse}
                                onChange={this.handleInputChange}
                            />
                        </td>
                    </tr>
                    <tr><td>publishing Date:</td></tr>
                    <tr>
                        <td>
                            <input
                                type="text"
                                name="publishingDate"
                                value={this.state.publishingDate}
                                onChange={this.handleInputChange}
                            />
                        </td>
                    </tr>
                    <tr><td>Image:</td></tr>
                    <tr>
                        <td>
                            <input
                                type="text"
                                name="productImageUrl"
                                value={this.state.productImageUrl}
                                onChange={this.handleInputChange}
                            />
                        </td>
                    </tr>
                    </tbody>
                </Table>
            </Col>
        )
    }
}

class PageGrid extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);
    }
    public openBookDetailsView = (): void => {
        console.log('PageGrid Component');
    }
    render(){
        return(
          <Container fluid>
              <Row>
                  <Col xs={8}>
                      <Table striped bordered hover>
                          <thead>
                          <th>Books List</th>
                          </thead>
                          <tbody>
                              <BooksTable handler={this.openBookDetailsView}/> // свойства компонента
                          </tbody>
                      </Table>
                  </Col>
                  <EditRow/>
              </Row>
          </Container>
      )
  }
}
export default PageGrid;