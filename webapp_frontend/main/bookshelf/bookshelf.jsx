import React from 'react';
import Book from './book';
import BookContainer from './book_container';
import Draggable from 'react-draggable';
import ReactDOM from 'react-dom';
import Shelf from './shelf';

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

  componentWillMount(){
    let books = [];
    this.props.fetchbooks().then((b)=>{
      let i = 0;
      b.books.forEach((book)=>{
        // extra div is used by draggable inside shelf class
        books.push(
            <div key={i}>
              <Book book={book} key={i}/>
            </div>
        );
        i = i + 1;
      });
      this.setState({books: books});
    });
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
          <Shelf draggable={this.state.draggable}>
            {this.state.books}
          </Shelf>
      </div>
    );
  }
}
export default BookShelf;
