import React from 'react';
import Book from './book';
import BookContainer from './book_container';
import Draggable from 'react-draggable';
import ReactDOM from 'react-dom';
import ReactGridLayout from 'react-grid-layout';

class BookShelf extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      books: [],
      layout: [],
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
    let layout = [];
    this.props.fetchbooks().then((b)=>{
      let i = 0;
      let defaultWidth = 50;
      b.books.forEach((book)=>{
        // console.log(book);
        layout.push({i:`${i}`, x: i, y: 0, w: 1, h: 2});
        books.push(
          // <Draggable i={`book_${book.i}`} key={i}>
            <div key={i}>
              <Book book={book} key={i}/>
            </div>
          // </Draggable>
        );
        i = i + 1;
      });
      console.log(layout);
      this.setState({books: books, layout: layout});
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
    // let user = this.props.currentUser;
    // // console.log(user);
    // let books = this.state.books;
    // let layout = [
    //     {i: 'a', x: 0, y: 0, w: 1, h: 2},
    //     {i: 'b', x: 1, y: 0, w: 3, h: 2},
    //     {i: 'c', x: 4, y: 0, w: 1, h: 2},
    //     {i: 'd', x: 4, y: 0, w: 1, h: 2},
    //   ];
    //   layout = this.state.layout;
    //   console.log(layout);
    return (
      <div className="bookshelf">
          <h1>BookShelf</h1>
          <div className="books">
            <ReactGridLayout className="layout"
              layout={this.state.layout}
              isResizable={false}
              cols={10}
              rowHeight={100} width={500}>
              {this.state.books}
            </ReactGridLayout>
          </div>
          <button onClick={this.logout}>logout</button>
          <button onClick={this.addBook}>Add Book</button>
      </div>
    );
  }
}
export default BookShelf;
