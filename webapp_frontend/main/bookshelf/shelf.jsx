import React from 'react';
import Draggable from 'react-draggable';
import ReactDOM from 'react-dom';
import Book from './book';

class Shelf extends React.Component {
  constructor(props){
    super(props);

    this.onStart = this.onStart.bind(this);
    this.onDrag = this.onDrag.bind(this);
    this.onStop = this.onStop.bind(this);
    this.state = {
      books: [],
      positions: [],
    };
  }

  componentWillMount(){
    let books = [];
    this.props.fetchbooks();
  }

  onStart(e,ui){
    let bookdiv = e.currentTarget.children[0];
    let rotation = bookdiv.style.transform.match(/\d+.?\d+/);
  }

  onDrag(e,ui){
  }

  onStop(e,ui){
  }

  setdraggable(draggable){
    // let i = 0;
    let books = [];
    Object.keys(this.props.books).forEach((i)=>{
      // extra div is used by draggable to insert style classes
      books.push(
          <div key={i}>
            <Book book={this.props.books[i]} key={i} draggable={draggable}/>
          </div>
      );
      i = i + 1;
    });
    return books;
    // this.setState({books: books});
  }

  render(){
    let books = this.setdraggable(this.props.draggable);
    return (
      <div className="shelf">
        {books.map( (book,i)=> (
          <div className="bookPosition" key={i}>
            <Draggable
              disabled={this.props.draggable}
              onStart={this.onStart}
              onDrag={this.onDrag}
              onStop={this.onStop}
              >
              {book}
            </Draggable>
          </div>
        ))}
      </div>
    );
  }
}
export default Shelf;
