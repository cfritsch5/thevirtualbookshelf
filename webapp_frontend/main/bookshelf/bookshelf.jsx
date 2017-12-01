import React from 'react';
import ShelfContainer from './shelf/shelf_container';
import PositionsCalcContainer from './positions_calc_container';
class BookShelf extends React.Component {
  constructor(props){
    super(props);
    // this.state ={
    //   draggable: true
    // };

    // this.addBook = this.addBook.bind(this);
    // this.toggleMode = this.toggleMode.bind(this);
    this.shortcut = this.shortcut.bind(this);
    // this.gofetchbooks = this.gofetchbooks.bind(this);
  }

  shortcut(e){
    // console.log('shortcut',e.key.toUpperCase());
    this.props.appShortcut(e.key.toUpperCase());
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

  // toggleMode(){
    // this.setState({draggable: !this.state.draggable});
  // }

  render() {
    // console.log('render BookShelf');
    // <button onClick={this.addBook}>Add Book</button>
    // <label style={{visibility: 'hidden'}}>
    // console.log(this.props);
    let movementTypeToggle = this.props.shortcuts.movementTypeToggle;
    return (
      <div className="bookshelf"
        ref={input => input && input.focus()}
        tabIndex={0}
        autoFocus={true}
        onKeyDown={this.shortcut}
        onKeyUp={this.shortcut}
        >
        <PositionsCalcContainer/>
        <p>
          Hold shift to move books <br/>
          Movement Type = {movementTypeToggle ? 'Rotate' : 'Move'}
        </p>
        {
          Object.keys(this.props.shelves).map((id)=>(
            <ShelfContainer key={id} id={id} draggable={movementTypeToggle}/>
          ))
        }
      </div>
    );
  }
}
export default BookShelf;
