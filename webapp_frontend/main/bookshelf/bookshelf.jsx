import React from 'react';
import ShelfContainer from './shelf/shelf_container';

class BookShelf extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      draggable: true
    };

    // this.addBook = this.addBook.bind(this);
    this.toggleMode = this.toggleMode.bind(this);
    // this.gofetchbooks = this.gofetchbooks.bind(this);
  }
  //
  // addBook(book){
  //   let books = this.state.books;
  //   let id = books.length;
  //   this.setState({books: books.concat([<Book key={id}/>])});
  // }
  componentWillMount(){
    this.props.fetchbooks();
  }

  toggleMode(){
    this.setState({draggable: !this.state.draggable});
  }

  render() {
    console.log('render BookShelf');
    // <button onClick={this.addBook}>Add Book</button>
    return (
      <div className="bookshelf">
        <label>
          Reorganize Books
          <input type="checkbox" name="draggable" onChange={this.toggleMode}/>
        </label>
        {
          Object.keys(this.props.shelves).map((id)=>(
            <ShelfContainer key={id} id={id} draggable={this.state.draggable}/>
          ))
        }
      </div>
    );
  }
}
export default BookShelf;
