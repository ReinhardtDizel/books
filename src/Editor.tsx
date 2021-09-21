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
const lbl_Publishing: string = "Publishing Date";
const lbl_Image: string = "Book Image";
//=======================================================================

interface Props {
    title?: string;
    authors?: Author[];
    publishing?: Date;
    image?: string;
    saveButtonClicked?: boolean;
    handler?: () => void; // магия typescript
    SaveOnClick?: (e:boolean) => void;
    saveButtonHandler?: (e:Book) => void;
    saved: boolean;
    isLoading: boolean;
    showInput?: boolean;
}
interface State {
    title?: string;
    authors?: Author[];
    publishing?: Date;
    image?: string;
    editButtonClicked?: boolean;
    saved?: boolean;
}

class Editor extends  React.Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.state = {
            saved: this.props.saved,
            editButtonClicked: false,
            title: '',
            authors: [] as Author[],
            publishing: undefined,
            image: '',

        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.editButtonClicked = this.editButtonClicked.bind(this);
        this.CancelButtonClicked = this.CancelButtonClicked.bind(this);
        this.saveButtonHandler = this.saveButtonHandler.bind(this);
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
        const _clicked = this.state.editButtonClicked;
        if (value !== undefined && value !== null && !_clicked) {
            this.setState({
                editButtonClicked: true,
                title: value.title,
                authors: value.authors,
                publishing: value.publishing,
                image: value.image,
            });
        }
    }
   CancelButtonClicked= (): void =>  {
        const _clicked = this.state.editButtonClicked;
        if (_clicked) {
            this.hideInput();
        }
    }
    hideInput = (): void  => {
        this.setState({
            editButtonClicked: false,
        });
    }
    saveButtonHandler = (e:any):void => {
        const {saveButtonHandler, saved} = this.props;
        const {title,publishing,image} = this.state;

        let book: Book = {
            title: title,
            publishing: publishing,
            image: image
        }
        if ( saveButtonHandler !== undefined && saveButtonHandler !== null ) {
            saveButtonHandler(book);
        }
    }

    render() {
        const {
            title,
            publishing,
            image,
        } = this.props; // декомпозирование
        const {editButtonClicked,} = this.state;

        if(!editButtonClicked){
            return(
                this.RenderBookDetail( title,publishing,image )
            )
        }
        else
            return (
                this.RenderInput(this.props.saved,this.props.isLoading)
            )
    }

    RenderBookDetail = (title?: string, publishing?: Date, image?: string):any => {
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
                            {publishing}
                        </td>
                    </tr>
                    <tr key={"Image URL"}>
                        <td>
                            {image}
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

        const {
            title,
            publishing,
            image
        } = this.state;

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
                                    value={title}
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
                                <InputGroup.Text id="inputGroup-sizing-default">{lbl_Publishing}</InputGroup.Text>
                                <FormControl
                                    value={publishing?.toString()}
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
                                <InputGroup.Text id="inputGroup-sizing-default">{lbl_Image}</InputGroup.Text>
                                <FormControl
                                    value={image}
                                    onChange={this.handleInputChange}
                                    name="image"
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
                        saved={e}
                        saveOnClick= {this.saveButtonHandler}
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
}
export default Editor;
