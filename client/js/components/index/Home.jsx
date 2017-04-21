import React from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { createBook, deleteBook } from '../../redux/modules/examples.module';
import BookForm from '../../redux/forms/BookForm.jsx';

function Home(props) {
  function handleDeleteBook(id) {
    return () => props.deleteBook(id);
  }
  function handleCreateBook(values) {
    props.createBook({
      title: values.title,
      id: Math.random() * 100,
      author: {
        firstName: values.firstName,
        lastName: values.lastName,
      },
    });
  }
  const bookList = props.books.map(book =>
    <ListGroupItem header={book.title} key={book.id}>
      by {book.author.firstName} {book.author.lastName}
      <Button bsStyle="danger" onClick={handleDeleteBook(book.id)}>Delete</Button>
    </ListGroupItem>);
  return (
    <div>
      <h1>Hello World!</h1>
      <ListGroup>
        {bookList}
      </ListGroup>
      <BookForm onSubmit={handleCreateBook} />
    </div>
  );
}

function mapStateToProps(state) {
  return { books: state.books };
}

const mapDispatchToProps = {
  createBook, deleteBook,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
