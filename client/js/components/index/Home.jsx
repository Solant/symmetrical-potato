import React from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem, Button, Pagination } from 'react-bootstrap';
import { createBook, deleteBook, fetchBooks } from '../../redux/modules/examples.module';
import BookForm from '../../redux/forms/BookForm.jsx';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.props.fetchBooks();
  }

  render() {
    const onDeleteBook = (id) => {
      return () => {
        this.props.deleteBook(id);
      };
    }
    function handleCreateBook(values) {
      this.props.createBook({
        title: values.title,
        id: Math.random() * 100,
        author: {
          firstName: values.firstName,
          lastName: values.lastName,
        },
      });
    }
    const onPageChange = arg => {
      this.props.fetchBooks({ pageNumber: arg - 1, pageSize: this.props.pageSize });
    };
    const bookList = this.props.books.map(book =>
      <ListGroupItem header={book.title} key={book._id}>
        by {book.author.firstName} {book.author.lastName}
        <Button bsStyle="danger" onClick={onDeleteBook(book._id)}>Delete</Button>
      </ListGroupItem>);
    return (
      <div>
        <h1>Hello World!</h1>
        <ListGroup>
          {bookList}
        </ListGroup>
        <Pagination
          bsSize="large"
          activePage={this.props.pageNumber + 1}
          maxButtons={5}
          prev
          next
          first
          last
          items={Math.ceil(this.props.totalSize / this.props.pageSize)}
          onSelect={onPageChange}
        />
        <BookForm />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books.books,
    pageNumber: state.books.pageNumber,
    pageSize: state.books.pageSize,
    totalSize: state.books.totalSize,
  };
}

const mapDispatchToProps = {
  createBook, deleteBook, fetchBooks,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
