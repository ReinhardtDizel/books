import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Table from "react-bootstrap/Table";
import BooksTable from "./Components/BooksTable";
import Editor from "./Components/Editor";
import {getBooks, putBook} from "./Api/API";
import Popup from "./Components/SavePopUp";
import {Author} from "./Model/Author";
import {Book} from "./Model/Book";

interface Props {
    id?:string;
    title?: string;
    authors?: Author[];
    publishing?: Date;
    imageSource?: string;
}
interface State {
    id?:string;
    title?: string;
    authors?: Author[];
    publishing?: Date;
    image?: string;
    books?: Book[] | null;
    showPopUp: boolean;
    saved: boolean;
    isLoading: boolean;
}

class PageGrid extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            authors: [] as Author[],
            publishing: undefined,
            image: '',
            books: [] as Book[],
            showPopUp: false,
            saved: false,
            isLoading: false,
        };
    }

   findSelectedRow =(event:any): any => {
       let {books}  = this.state;
       let selected: Book | undefined;
       if(books!== undefined && books !== null) {
           selected = books.find(e => e.id === event);
           if (selected !== undefined && selected !== null) {
               return selected;
           }
           else
               return undefined;
       }
       else
           return undefined;
    }

    updateBooks(e:boolean) {
        getBooks().then(res => {
            if (res!== null && res !== undefined) {                              
                this.setState({
                    books: res.data,
                });
                if(e){
                    const {id} = this.state;
                    const _find: Book = res.data.find( (r: { id: string | undefined; }) => r.id === id );
                    this.setState({
                        title: _find.title,
                        publishing: _find.publishing,
                        image: _find.image,
                    });
                }
            }
        } );
    }

    showPopUp = (e:boolean):void => {
        this.setState({
            showPopUp: e,
        });
       this.updateBooks(true);
    }

    saveButtonHandler  = (row:Book):void => {
        const {id} = this.state;
          if(id !== undefined) {
              this.setState({
                  saved: false,
                  isLoading: true,
              });
              putBook(id, row).then(res => {
                  if( res.status == 200) {
                      this.setState({
                          showPopUp: true,
                          saved: true,
                          isLoading: false,
                      });
                  }
          } );

        }
    }

    openBookDetailsView = (event:any): void => {
        const selected = this.findSelectedRow(event);
        this.setState({
            id:selected.id,
            title: selected.title,
            publishing: selected.publishing,
            image: selected.image,
        });
    }

    componentWillMount() {
        this.updateBooks(false);
    }

    render() {

        const {
            showPopUp,
            books,
            isLoading,
            saved,
            title,
            publishing,
            image,
        } = this.state;

        return (
            <Container fluid>

                <Popup
                    showPopUp={showPopUp}
                    setShow={this.showPopUp}
                >

                </Popup>

                <Row>
                    <Col xs={8}>
                        <Table striped bordered hover>
                            <thead>
                            <tr></tr>
                            </thead>
                            <BooksTable
                                books={books}
                                handler={this.openBookDetailsView}
                            />
                        </Table>
                    </Col>
                    <Editor
                        isLoading={isLoading}
                        saved={saved}
                        saveButtonHandler={this.saveButtonHandler}
                        handler={() => {}}
                        title={title}
                        publishing={publishing}
                        image={image}
                    />
                </Row>
            </Container>
        )
    }
}

export default PageGrid;