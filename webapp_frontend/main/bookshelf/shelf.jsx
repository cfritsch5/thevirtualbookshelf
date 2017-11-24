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
    // this.state = {
    //   books: [],
    // };
  }

  componentWillMount(){
    console.log(this.props);
    let books = [];
    this.props.fetchbooks();
    // .then((b)=>{
    //   let i = 0;
    //   b.books.forEach((book)=>{
    //     // extra div is used by draggable inside shelf class
    //     books.push(
    //         <div key={i}>
    //           <Book book={book} key={i} draggable={this.props.draggable}/>
    //         </div>
    //     );
    //     i = i + 1;
    //   });
    //   this.setState({books: books});
    // });
  }

  onStart(e){
    console.log("start drag");
  }

  onDrag(e){
    // console.log(e);
  }

  onStop(e){
    console.log("stop drag");
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
    console.log('rendershelf');
    let books = this.setdraggable(this.props.draggable);
    return (
      <div className="shelf">
        {books.map( (book)=> (
          <div className="bookPosition">
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
