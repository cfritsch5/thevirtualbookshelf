import React from 'react';
import Draggable from 'react-draggable';
import Book from './book/book';

class Shelf extends React.Component {
  constructor(props){
    super(props);

    this.onStart = this.onStart.bind(this);
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

  style(sec, forward, angle){
    return `
    transition: ${sec}s ease-in-out;
    transform: translateZ(${forward}px) rotateY(${angle}deg);
    `;
  }

  setStyleDelay(node,sec,forward,angle){
    setTimeout(()=>{
      node.style = this.style(sec,forward,angle);
    },500);
  }

  findDeg(node){
    return node.style.transform.match(/\d+.?\d+(?=deg)/)[0];
  }

  onStart(e,ui){
    let node = ui.node.children[0];
    let angle = this.findDeg(node);
    node.style = this.style(0.25, 150, angle);
    this.setStyleDelay(node,0,150,angle);
  }

  onStop(e,ui){
    let node = ui.node.children[0];
    let angle = this.findDeg(node);
    node.style = this.style(0.25, 0, angle);
    this.setStyleDelay(node,0,0,angle);
    
  }

  setdraggable(draggable){
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
