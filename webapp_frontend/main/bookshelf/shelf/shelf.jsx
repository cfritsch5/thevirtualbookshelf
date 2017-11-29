import React from 'react';
// import Draggable from 'react-draggable';
// import Book from './book/book';
import ShelfItemContainer from './shelf_item_container';

class Shelf extends React.Component {

// on render should go to reducer and update position of shelf
  render(){
    return (
      <div className="shelf">
        {this.props.shelf.map((i)=> {
          // console.log("shelfitem",i);
          return (
            <div className="bookPosition" key={i}>
              <ShelfItemContainer
                book={this.props.books[i]}
                draggable={this.props.draggable}/>
            </div>
        );
        })}
      </div>
    );
  }
}
export default Shelf;
