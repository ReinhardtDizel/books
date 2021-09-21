import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import Table from "react-bootstrap/Table";
import BooksTable from "./BooksTable";
import EditRow from "./EditRow";
import {Author, Book} from "./Entities";
import API, {booksDataURL, queryGet, queryPut} from "./API";
import Popup from "./PopupComponent";

interface Props {
    id?:string;
    title?: string;
    authors?: Author[];
    publishingDate?: Date;
    imageSource?: string;
}
interface State {
    id?:string;
    title?: string;
    authors?: Author[];
    publishingDate?: Date;
    imageSource?: string;
    booksArray?: Book[] | null;
    showPopUp: boolean;
    dataSaved: boolean;
    isLoading: boolean;
}

class PageGrid extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            authors: [] as Author[],
            publishingDate: undefined,
            imageSource: '',
            booksArray: [] as Book[],
            showPopUp: false,
            dataSaved: false,
            isLoading: false,
        };


    }



   findSelectedRow =(event:any): any => {
       let tempBooksArray  = this.state.booksArray;
       let _find: Book | undefined;
       if(tempBooksArray!== undefined && tempBooksArray !== null) {
           _find = tempBooksArray.find(e => e.id === event);
           if (_find !== undefined && _find !== null) {
               return _find;
           }
           else
               return undefined;
       }
       else
           return undefined;
    }
    //=======================================================================
    selectedToInput = ():void => { // по феншую
        console.log("event")
    }
    //=======================================================================
    updateBooksArray(e:boolean) {
        queryGet().then(res => {
            if (res!== null && res !== undefined) {
                const inData:any = res.data;
                console.log(inData);
                this.setState({
                    booksArray: res.data,
                });
                if(e){
                    const id = this.state.id;
                    const _find: Book = res.data.find( (r: { id: string | undefined; }) => r.id === id );
                    this.setState({
                        title: _find.title,
                        publishingDate: _find.publishingDate,
                        imageSource: _find.imageSource,
                    });
                }
            }
        } );
    }

    showPopUp = (e:boolean):void => { // по феншую
        this.setState({
            showPopUp: e,
        });
       this.updateBooksArray(true);
    }

    saveBtnHandler  = (row:Book):void => { // по феншую
        const id = this.state.id;
          if(id !== undefined) {
              this.setState({
                  dataSaved: false,
                  isLoading: true,
              });
              queryPut(id, row).then(res => {
                  if( res.status == 200) {
                      this.setState({
                          showPopUp: true,
                          dataSaved: true,
                          isLoading: false,
                      });
                  }
          } );

        }
    }

    openBookDetailsView = (event:any): void => {
        const _find = this.findSelectedRow(event);
        this.setState({
            id:_find.id,
            title: _find.title,
            publishingDate: _find.publishingDate,
            imageSource: _find.imageSource,
        });
    }

    componentWillMount() {
        this.updateBooksArray(false);
    }

    render() {
        console.log(" render: ")
        console.log(this.state.booksArray)
        return (
            <Container fluid>

                <Popup
                    showPopUp={this.state.showPopUp}
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
                                booksArray={this.state.booksArray}
                                handler={this.openBookDetailsView}
                            />
                        </Table>
                    </Col>
                    <EditRow
                        isLoading={this.state.isLoading}
                        dataSaved={this.state.dataSaved}
                        saveBtnHandler={this.saveBtnHandler}
                        handler={this.selectedToInput}
                        title={this.state.title}
                        publishingDate={this.state.publishingDate}
                        imageSource={this.state.imageSource}
                    />
                </Row>
            </Container>// BooksTable handler={this.openBookDetailsView} свойства компонента в <>
        )
    }
}

export default PageGrid;