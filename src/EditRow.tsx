import React from "react";
import {Container, Row, Col, Form, FormControl} from "react-bootstrap";
import Table from "react-bootstrap/Table";
import {Button} from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup'
import {Author, Book} from "./Entities";
import ISaveButton from "./myButtonComponent";



//=======================================================================
const lbl_Title: string = "Title";
const lbl_AuthorName: string = "Author Name";
const lbl_PublishingHouse: string = "Publishing House";
const lbl_PublishingDate: string = "Publishing Date";
const lbl_ProductImageUrl: string = "Product Image Url";
//=======================================================================

interface Props {
    title?: string;
    authors?: Author[];
    publishingDate?: Date;
    imageSource?: string;
    saveBtnClicked?: boolean;
    handler?: () => void; // магия typescript
    SaveOnClick?: (e:boolean) => void;
    saveBtnHandler?: (e:Book) => void;
    dataSaved: boolean;
    isLoading: boolean;
    showInput?: boolean;
}
interface State {
    title?: string;
    authors?: Author[];
    publishingDate?: Date;
    imageSource?: string;
    editBtnClicked?: boolean;
    dataSaved?: boolean;
}

class EditRow extends  React.Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.state = {
            dataSaved: this.props.dataSaved,
            editBtnClicked: false,
            title: '',
            authors: [] as Author[],
            publishingDate: undefined,
            imageSource: '',

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
        if( name == 'title' || 'authorName' || 'publishingHouse' || 'publishingDate' ||  'productImageUrl') {
            this.setState({
                [name]: value, // запятая по феншую
            });
        }
    }
    editButtonClicked= (): void =>  {
        const value = this.props;
        const _clicked = this.state.editBtnClicked;
        if (value !== undefined && value !== null && !_clicked) {
            this.setState({
                editBtnClicked: true,
                title: value.title,
                authors: value.authors,
                publishingDate: value.publishingDate,
                imageSource: value.imageSource,
            });
        }
    }
   CancelButtonClicked= (): void =>  {
        const _clicked = this.state.editBtnClicked;
        if (_clicked) {
            this.hideInput();
        }
    }
    hideInput = (): void  => {
        this.setState({
            editBtnClicked: false,
        });
    }
    //=======================SAVE===============================================
    saveBtnHandler = (e:any):void => {
        const {saveBtnHandler, dataSaved} = this.props;

        let sendEntity: Book = {
            title: this.state.title,
            publishingDate: this.state.publishingDate,
            imageSource: this.state.imageSource
        }
        if ( saveBtnHandler !== undefined && saveBtnHandler !== null ) {
            saveBtnHandler(sendEntity);
        }
    }


    render() {
        const {
            title,
            publishingDate,
            imageSource,
        } = this.props; // декомпозирование

        if(!this.state.editBtnClicked){
            return(
                this.RenderBookDetail( title,publishingDate,imageSource )
            )
        }
        else
            return (
                this.RenderInput(this.props.dataSaved,this.props.isLoading)
            )

    }
    //==========================================================================
    RenderBookDetail = (title?: string, publishingDate?: Date, productImageUrl?: string):any => {
        return (
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
                           "Authors must be there"
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

    RenderInput = (e:boolean, b:boolean):any => {
        return(
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
                                    value="authors"
                                    onChange={this.handleInputChange}
                                    name="authorName"
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
                                    value={this.state.publishingDate?.toString()}
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
                                    value={this.state.imageSource}
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
                    <ISaveButton
                        isLoading={b}
                        dataSaved={e}
                        SaveOnClick = {this.saveBtnHandler}
                    />
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
    //==========================================================================
}



export default EditRow;
/*<Button
onClick={()=>{this.saveBtnHandler(this.state.saveBtnClicked)}}
className='saveBtn'
size="sm"
variant="dark"
>Save
</Button>{' '}
*/