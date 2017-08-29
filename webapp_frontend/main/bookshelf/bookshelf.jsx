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
    console.log(e);
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
      let id = 0;
      b.books.forEach((book)=>{
        books.push(
          // <Draggable id={`book_${book.id}`} key={id}>
            // <div>
              <Book book={book} key={id}/>
            // </div>
          // </Draggable>
        );
        id = id + 1;
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
      <div>
        <div className="header">
          <h1>BookShelf</h1>
          {books}
          <button onClick={this.logout}>logout</button>
          <button onClick={this.addBook}>Add Book</button>
        </div>
      </div>
    );
  }
}
export default BookShelf;
