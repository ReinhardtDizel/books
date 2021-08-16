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
    editBtnClicked?: boolean;
}

class EditRow extends  React.Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.state = {
            editBtnClicked: false,
            title: '',
            authorName: '',
            publishingHouse: '',
            publishingDate: '',
            productImageUrl: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.editButtonClicked = this.editButtonClicked.bind(this);
        this.CancelButtonClicked = this.CancelButtonClicked.bind(this);
    }
    handleInputChange = (event: any):void => { // по феншую
        const { name, value } = event.target;
        this.setState({
            [name]: value, // запятая по феншую
        });
    }
    editButtonClicked= (): void =>  {
        const value = this.props;
        const _clicked = this.state.editBtnClicked;
        if (value !== undefined && value !== null && !_clicked) {
            this.setState({
                editBtnClicked: true,
                title: value.title,
                authorName: value.authorName,
                publishingHouse: value.publishingHouse,
                publishingDate: value.publishingDate,
                productImageUrl: value.productImageUrl,
            });
        }
    }
   CancelButtonClicked= (): void =>  {
        const {handler} = this.props;
        const _clicked = this.state.editBtnClicked;
        if (handler !== undefined && handler !== null && _clicked) {
            this.setState({
                editBtnClicked: false,
            });
        }
    }

    render() {
        const {
            title,
            authorName,
            publishingHouse,
            publishingDate,
            productImageUrl,
        } = this.props; // декомпозирование

        if(!this.state.editBtnClicked){
            return(
            <Col className={'editContainer'} xs={4}>
                <Table>
                    <thead>
                    <th><h6>Edit this</h6></th>
                    </thead>
                    <tbody>
                    <tr><h6>Title:</h6></tr>
                    <tr>
                        <td>
                            {title}
                        </td>
                    </tr>
                    <tr><h6>Author:</h6></tr>
                    <tr>
                        <td>
                            {authorName}
                        </td>
                    </tr>
                    <tr><h6>Publishing House:</h6></tr>
                    <tr>
                        <td>
                            {publishingHouse}
                        </td>
                    </tr>
                    <tr><h6>Publishing Date:</h6></tr>
                    <tr>
                        <td>
                            {publishingDate}
                        </td>
                    </tr>
                    <tr><h6>Image URL:</h6></tr>
                    <tr>
                        <td>
                            {productImageUrl}
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
                        onClick={this.editButtonClicked}
                        className='EditBtn'
                        size="sm"
                        variant="dark"
                    >Edit
                    </Button>{' '}
                    <Button
                        onClick={this.CancelButtonClicked}
                        className='abortBtn'
                        size="sm"
                        variant="danger"
                    >Cancel
                    </Button>{' '}
                </td>
            </Col>
            )
        }
        else
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
                        onClick={this.editButtonClicked}
                        className='EditBtn'
                        size="sm"
                        variant="dark"
                    >Edit
                    </Button>{' '}
                    <Button
                        onClick={this.CancelButtonClicked}
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