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
    };
  }

  componentWillMount(){
    console.log(this.props);
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

  onStart(e){
    // console.log(e);
  }

  onDrag(e){
    // console.log(e);
  }

  onStop(e){
    // console.log(e);
  }

  render(){
    console.log('rendershelf');
    return (
      <div className="shelf">
        {this.state.books.map( (book)=> (
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
