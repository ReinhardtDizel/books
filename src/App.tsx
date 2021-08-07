import React from "react";
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'

const books = [
  {
    id: 1,
    title: 'Fullstack React: The Complete Guide to ReactJS and Friends',
    authorName: 'Anthony Accomazzo',
    publishingHouse: 'Leanpub',
    publishingDate: '2020-01-13',
    productImageUrl:'https://images-na.ssl-images-amazon.com/images/I/51CMUOgy8HL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
  },
  {
    id: 2,
    title: 'Война и Мир',
    authorName: 'Толстой Л.Н.',
    publishingHouse: 'Юность',
    publishingDate: '1956-01-13',
    productImageUrl:'https://cdn1.ozone.ru/s3/multimedia-o/c360/6046894776.jpg',
  },
  {
    id: 3,
    title: 'Анна Каренина',
    authorName: 'Толстой Л.Н.',
    publishingHouse: 'Юность',
    publishingDate: '1958-01-16',
    productImageUrl:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ98PbWkuNcUrmsN_SwG2mSpajtoIqtoUEulXDmni3T99LjSnPY6QSGXldSRyh1&usqp=CAc',
  },
  {
    id: 4,
    title: 'American Marxism',
    authorName: 'Mark R. Levin',
    publishingHouse: 'Threshold Editions',
    publishingDate: '2021-01-22',
    productImageUrl:'https://images-na.ssl-images-amazon.com/images/I/51gGgVnODsL._SX322_BO1,204,203,200_.jpg',
  },
  {
    id: 4,
    title: 'Dark Roads: A Novel',
    authorName: 'Chevy Stevens',
    publishingHouse: 'St. Martin Press',
    publishingDate: '2021-08-03',
    productImageUrl:'https://images-na.ssl-images-amazon.com/images/I/51Zg02RRMGL._AC_SX184_.jpg',
  },
  {
    id: 5,
    title: 'Once There Were Wolves',
    authorName: 'Charlotte McConaghy',
    publishingHouse: 'Flatiron Books',
    publishingDate: '2021-08-03',
    productImageUrl:'https://images-na.ssl-images-amazon.com/images/I/41V4TQpXGhL._AC_SX184_.jpg',
  },
  {
    id: 6,
    title: 'If You Tell: A True Story of Murder, Family Secrets, and the Unbreakable Bond of Sisterhood',
    authorName: 'Gregg Olsen',
    publishingHouse: 'Thomas & Mercer',
    publishingDate: '2019-31-01',
    productImageUrl:'https://m.media-amazon.com/images/I/41nIJTI4vXL.jpg',
  },
  {
    id: 7,
    title: 'Greenlights',
    authorName: 'Matthew McConaughey',
    publishingHouse: 'Random House Audio',
    publishingDate: '2020-01-16',
    productImageUrl:'https://m.media-amazon.com/images/I/51DZeZw7K0L.jpg',
  },
  {
    id: 8,
    title: 'AMA Manual of Style',
    authorName: 'American Medical Association',
    publishingHouse: 'Journal of the American Medical Association',
    publishingDate: '1958-11-16',
    productImageUrl:'https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/AMA_Manual_of_Style%2C_11ed.jpg/220px-AMA_Manual_of_Style%2C_11ed.jpg',
  },
  {
    id: 9,
    title: 'Billy Summers',
    authorName: 'Stephen King',
    publishingHouse: 'Simon & Schuster Audio',
    publishingDate: '2021-01-15',
    productImageUrl:'https://m.media-amazon.com/images/I/61MkXxqcd6S.jpg',
  },
  {
    id: 10,
    title: 'Nolyn: The Rise and Fall, Book 1',
    authorName: 'Michael J. Sullivan',
    publishingHouse: 'Юность',
    publishingDate: '2021-05-16',
    productImageUrl:'https://m.media-amazon.com/images/I/51MkzJ4e42S.jpg',
  },
];
class BooksTable extends React.Component {
    render() {
        const bookComponents = books.map((book)=> (
            <BookRow
                id={book.id}
                title={book.title}
                authorName={book.authorName}
                publishingHouse={book.publishingHouse}
                publishingDate={book.publishingDate}
                productImageUrl={book.productImageUrl}
            />
        ));
        return (
            <div className='ui items'>
                <Table>
                    <thead>
                    </thead>
                    <tbody>
                        {bookComponents}
                    </tbody>
                </Table>
            </div>
        )
    }
}

interface Props {
    id: number;
    title: string;
    authorName: string;
    publishingHouse: string;
    publishingDate: string;
    productImageUrl: string;
}

class BookRow extends React.Component<Props, {}> {

    render() {
        const {
            id,
            title,
            authorName,
            publishingHouse,
            publishingDate,
            productImageUrl,
        } = this.props; // декомпозирование

        return(
            <tr>
                <td>{id}</td>
                <td>{title}</td>
                <td>{authorName}</td>
                <td>{publishingHouse}</td>
                <td>{publishingDate}</td>
                <td>
                  <Card style={{ width: '3rem' }}>
                    <Card.Img variant="top" src={productImageUrl} />
                  </Card>
                </td>
            </tr>
        )
    }
}
export default BooksTable;
