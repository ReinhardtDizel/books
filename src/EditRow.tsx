import React from "react";
import {Container, Row, Col, Form} from "react-bootstrap";
import Table from "react-bootstrap/Table";
import {Button} from "react-bootstrap";

interface Props {
    title?: string;
    authorName?: string;
    publishingHouse?: string;
    publishingDate?: string;
    productImageUrl?: string;
    handler?: () => void; // магия typescript
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
    handleInputChange = (event: any):void => { // по феншую
        const { name, value } = event.target;
        this.setState({
            [name]: value, // запятая по феншую
        });
    }

    render() {
        const {
            title,
            authorName,
            publishingHouse,
            publishingDate,
            productImageUrl,
        } = this.props; // декомпозирование
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
                    <tr><td>Publishing Date:</td></tr>
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
                <td>
                    <Button
                        className='saveBtn'
                        size="sm"
                        variant="dark"
                    >Save
                    </Button>{' '}
                    <Button
                        className='abortBtn'
                        size="sm"
                        variant="danger"
                    >Cancel
                    </Button>{' '}
                </td>
            </Col>
        )
    }
}

export default EditRow;