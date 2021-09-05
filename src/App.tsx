import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import Table from "react-bootstrap/Table";
import BooksTable from "./BooksTable";
import EditRow from "./EditRow";
import {BookEntity} from "./Entities";
import API, {booksDataURL, queryGet, queryPut} from "./API";
import Popup from "./PopupComponent";

interface Props {
    id?:string;
    title?: string;
    authorName?: string;
    publishingHouse?: string;
    publishingDate?: string;
    productImageUrl?: string;
}
interface State {
    id?:string;
    title?: string;
    authorName?: string;
    publishingHouse?: string;
    publishingDate?: string;
    productImageUrl?: string;
    booksArray?: BookEntity[] | null;
    showPopUp: boolean;
}

class PageGrid extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            authorName: '',
            publishingHouse: '',
            publishingDate: '',
            productImageUrl: '',
            booksArray: [] as BookEntity[],
            showPopUp: false,
        };


    }

   findSelectedRow =(event:any): any => {
       let tempBooksArray  = this.state.booksArray;
       let _find: BookEntity | undefined;
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

    selectedToInput = ():void => { // по феншую
    }

    updateBooksArray = ():void => {
        queryGet().then(res => {
            if (res!== null && res !== undefined) {
                this.setState({
                    booksArray: res.data,
                });
            }
        } );
    }

    updateAppData = (): void => {
        const id = this.state.id;
        this.openBookDetailsView(id);
    }

    showPopUp = (e:boolean):void => { // по феншую
        this.setState({
            showPopUp: e,
        });
        this.updateBooksArray();
        this.updateAppData();
    }


    saveBtnHandler  = (e:any, row:BookEntity):void => { // по феншую
        const id = this.state.id;
        const saveClicked = e;

          if(id !== undefined && saveClicked) {
              queryPut(id, row).then(res => {
                  if( res.status == 200) {
                      this.setState({
                          showPopUp: true,
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
            authorName: _find.authorName,
            publishingHouse: _find.publishingHouse,
            publishingDate: _find.publishingDate,
            productImageUrl: _find.productImageUrl,
        });
    }

    componentWillMount() {
        this.updateBooksArray();
    }

    render() {
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
                        saveBtnHandler={this.saveBtnHandler}
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