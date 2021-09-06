import React from "react";
import {Container, Row, Col, Form, FormControl} from "react-bootstrap";
import Table from "react-bootstrap/Table";
import {Button} from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup'
import {BookEntity} from "./Entities";



//=======================================================================
const lbl_Title: string = "Title";
const lbl_AuthorName: string = "Author Name";
const lbl_PublishingHouse: string = "Publishing House";
const lbl_PublishingDate: string = "Publishing Date";
const lbl_ProductImageUrl: string = "Product Image Url";
//=======================================================================

interface Props {
    title?: string;
    authorName?: string;
    publishingHouse?: string;
    publishingDate?: string;
    productImageUrl?: string;
    saveBtnClicked?: boolean;
    handler?: () => void; // магия typescript
    SaveOnClick?: (e:any) => void;
    saveBtnHandler?: (e:any,d:BookEntity) => void;
}
interface State {
    title?: string;
    authorName?: string;
    publishingHouse?: string;
    publishingDate?: string;
    productImageUrl?: string;
    editBtnClicked?: boolean;
    saveBtnClicked?: boolean;
}

class EditRow extends  React.Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.state = {
            saveBtnClicked: false,
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
        this.saveBtnHandler = this.saveBtnHandler.bind(this);
    }
    //=================================================================================

    //=================================================================================
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
                saveBtnClicked: false,
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
            this.hideInput();
        }
    }
    hideInput = (): void  => {
        this.setState({
            editBtnClicked: false,
            saveBtnClicked: false,
        });
    }
    //=======================SAVE===============================================
    saveBtnHandler = (e:any):void => {
        const {saveBtnHandler} = this.props;

        let sendEntity: BookEntity = {
            title: this.state.title,
            authorName: this.state.authorName,
            publishingHouse: this.state.publishingHouse,
            publishingDate: this.state.publishingDate,
            productImageUrl: this.state.productImageUrl
        }
        let noEntity: BookEntity = {
            title: "",
            authorName: "",
            publishingHouse: "",
            publishingDate: "",
            productImageUrl: ""
        }

        if ( saveBtnHandler !== undefined && saveBtnHandler !== null ) {
            if(!e) {
                saveBtnHandler(true, sendEntity);
                this.setState({
                    saveBtnClicked: true,
                });
            }
            else if (e) {
                saveBtnHandler(false, noEntity);
                this.setState({
                    saveBtnClicked: false,
                });
            }
        }
        this.hideInput();
    }
    //==========================================================================

    render() {
        const {
            title,
            authorName,
            publishingHouse,
            publishingDate,
            productImageUrl,
        } = this.props; // декомпозирование

        if(!this.state.editBtnClicked && !this.state.saveBtnClicked){
            return(
            <Col className={'editContainer'} xs={4}>
                <Table striped borderless>
                    <thead>
                    <tr></tr>
                    </thead>
                    <tbody>
                    <tr key={"Title"}></tr>
                    <tr>
                        <td>
                            {title}
                        </td>
                    </tr>
                    <tr key={"Author"}></tr>
                    <tr>
                        <td>
                            {authorName}
                        </td>
                    </tr>
                    <tr key={"Publishing House"}></tr>
                    <tr>
                        <td>
                            {publishingHouse}
                        </td>
                    </tr>
                    <tr key={"Publishing Date"}></tr>
                    <tr>
                        <td>
                            {publishingDate}
                        </td>
                    </tr>
                    <tr key={"Image URL"}>
                        <td>
                            {productImageUrl}
                        </td>
                    </tr>
                    </tbody>
                </Table>
                <td>
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
                <Table striped borderless>
                    <thead>
                    <tr></tr>
                    </thead>
                    <tbody>
                    <tr></tr>
                    <tr key={"Title"}>
                        <td>
                            <InputGroup size="sm" className="mb-0">
                                <InputGroup.Text id="inputGroup-sizing-default">{lbl_Title}</InputGroup.Text>
                                <FormControl
                                    value={this.state.title}
                                    onChange={this.handleInputChange}
                                    name="title"
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                />
                            </InputGroup>
                        </td>
                    </tr>
                    <tr></tr>
                    <tr key={"Author"}>
                        <td>
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Text id="inputGroup-sizing-default">{lbl_AuthorName}</InputGroup.Text>
                                <FormControl
                                    value={this.state.authorName}
                                    onChange={this.handleInputChange}
                                    name="authorName"
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                />
                            </InputGroup>
                        </td>
                    </tr>
                    <tr></tr>
                    <tr key={"Publishing House"}>
                        <td>
                            <InputGroup size="sm" className="mb-2">
                                <InputGroup.Text id="inputGroup-sizing-default">{lbl_PublishingHouse}</InputGroup.Text>
                                <FormControl
                                    value={this.state.publishingHouse}
                                    onChange={this.handleInputChange}
                                    name="publishingHouse"
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                />
                            </InputGroup>
                        </td>
                    </tr>
                    <tr></tr>
                    <tr key={"Publishing Date"}>
                        <td>
                            <InputGroup size="sm" className="mb-3">
                                <InputGroup.Text id="inputGroup-sizing-default">{lbl_PublishingDate}</InputGroup.Text>
                                <FormControl
                                    value={this.state.publishingDate}
                                    onChange={this.handleInputChange}
                                    name="publishingDate"
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                />
                            </InputGroup>
                        </td>
                    </tr>
                    <tr></tr>
                    <tr key={"Image URL"}>
                        <td>
                            <InputGroup size="sm" className="mb-4">
                                <InputGroup.Text id="inputGroup-sizing-default">{lbl_ProductImageUrl}</InputGroup.Text>
                                <FormControl
                                    value={this.state.productImageUrl}
                                    onChange={this.handleInputChange}
                                    name="productImageUrl"
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                />
                            </InputGroup>
                        </td>
                    </tr>
                    </tbody>
                </Table>
                <td>
                    <Button
                        onClick={()=>{this.saveBtnHandler(this.state.saveBtnClicked)}}
                        className='saveBtn'
                        size="sm"
                        variant="dark"
                    >Save
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