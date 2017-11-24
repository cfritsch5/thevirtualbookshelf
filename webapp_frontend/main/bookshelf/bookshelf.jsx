import React from 'react';
import Book from './book';
import BookContainer from './book_container';
import Draggable from 'react-draggable';
import ReactDOM from 'react-dom';
import ShelfContainer from './shelf_container';

class BookShelf extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      books: [],
      draggable: true
    };

    this.addBook = this.addBook.bind(this);
    this.toggleMode = this.toggleMode.bind(this);
    // this.gofetchbooks = this.gofetchbooks.bind(this);
  }

  addBook(book){
    let books = this.state.books;
    let id = books.length;
    this.setState({books: books.concat([<Book key={id}/>])});
  }

  toggleMode(){
    this.setState({draggable: !this.state.draggable});
  }

  render() {

    // <button onClick={this.addBook}>Add Book</button>
    return (
      <div className="bookshelf">
        <label>
          Reorganize Books
          <input type="checkbox" name="draggable" onChange={this.toggleMode}/>
        </label>
          <ShelfContainer draggable={this.state.draggable}/>
      </div>
    );
  }
}
export default BookShelf;
