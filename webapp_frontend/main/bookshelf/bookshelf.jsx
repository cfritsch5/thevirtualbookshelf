import React from 'react';
import Book from './book';
import BookContainer from './book_container';
import Draggable from 'react-draggable';
import ReactDOM from 'react-dom';

class BookShelf extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      books: []
    };

    this.logout = this.logout.bind(this);
    this.addBook = this.addBook.bind(this);
    // this.gofetchbooks = this.gofetchbooks.bind(this);
  }

  logout(e){
    let user = this.props.currentUser;
    this.props.logout({user});
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
      let defaultWidth = 35;
      b.books.forEach((book)=>{
        console.log(book);
        books.push(
          // <Draggable i={`book_${book.i}`} key={i}>
            // <div>
              <Book book={book} key={i} position={35*i}/>
            // </div>
          // </Draggable>
        );
        i = i + 1;
      });
      this.setState({books: books});
    });
  }
  //
  // gofetchbooks(e){
  //   e.preventDefault();
  // }
  //
  // reftest(e){
  //   ReactDOM.findDOMNode(this.ref.book_1);
  // }

  render() {
    let user = this.props.currentUser;
    // console.log(user);
    let books = this.state.books;
    return (
      <div className="bookshelf">
          <h1>BookShelf</h1>
          <div className="books">
            {books}
          </div>
          <button onClick={this.logout}>logout</button>
          <button onClick={this.addBook}>Add Book</button>
      </div>
    );
  }
}
export default BookShelf;
