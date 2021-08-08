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

class PageGrid extends React.Component<Props, {}> {
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
                              <BooksTable />
                          </tbody>
                      </Table>
                  </Col>
                  <Col className={'editContainer'} xs={4}>
                      <Table>
                          <thead>
                          <th>Edit this</th>
                          </thead>
                          <tbody>
                              <tr>Title:</tr>
                              <tr>
                                  <input className="form-control" type="text" name="input" value=""></input>
                              </tr>
                              <tr>Author:</tr>
                              <tr>
                                  <input className="form-control" type="text" name="input" value=""></input>
                              </tr>
                              <tr>Publishing House:</tr>
                              <tr>
                                  <input className="form-control" type="text" name="input" value=""></input>
                              </tr>
                              <tr>publishing Date:</tr>
                              <tr>
                                  <input className="form-control" type="text" name="input" value=""></input>
                              </tr>
                              <tr>Image:</tr>
                              <tr>
                                  <input className="form-control" type="text" name="input" value=""></input>
                              </tr>
                          </tbody>
                      </Table>
                  </Col>
              </Row>
          </Container>
      )
  }
}
export default PageGrid;