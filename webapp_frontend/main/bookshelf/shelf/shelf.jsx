import React from 'react';
// import Draggable from 'react-draggable';
// import Book from './book/book';
import ShelfItemContainer from './shelf_item_container';

class Shelf extends React.Component {

// on render should go to reducer and update position of shelf
  render(){
    let position = 0, book;
    return (
      <div className="shelf">
        {this.props.shelf.map((i)=> {
          // console.log("shelfitem",this.props.books[i]);
          book = this.props.books[i-1];
          position = book ? position + book.width : 0;
          // console.log(position);
          return (
              <ShelfItemContainer
                key={i}
                xPosition={position}
                book={this.props.books[i]}
                draggable={this.props.draggable}/>
        );
        })}
      </div>
    );
  }
}
export default Shelf;
