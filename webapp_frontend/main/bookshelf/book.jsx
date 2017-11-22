import React from 'react';
import Draggable from 'react-draggable';
import ReactDOM from 'react-dom';

class Book extends React.Component {
  constructor(props){
    super(props);

    this.rotateBook = this.rotateBook.bind(this);

    this.state = {
      angle: 0,
    };
  }

  componentDidMount(){
    this.book = ReactDOM.findDOMNode(this.refs.book);

  }

  rotateBook(e){
    let rect = this.book.getBoundingClientRect();
    let angle = -90 * (1 - (e.clientX - rect.left)/(rect.right - rect.left));
    // console.log('x:' ,e.clientX);
    // console.log('rect left:' , rect.left);
    // console.log( 'x -left',e.clientX - rect.left);
    // console.log( 'right-left',rect.right - rect.left);
    // console.log( 'x-l/r-l',(e.clientX - rect.left)/(rect.right - rect.left));
    // console.log( 'nagle',angle);
    this.setState({angle: angle});
  }

  render(){
    let style = {
      transform: `rotateY(${this.state.angle}deg)`,
    };
    // console.log(style);
    return (
      <div className="container" ref="book">
        <Draggable ref={`book_${this.props.book.id}`} >
        <div className="box"
          style={style}
          onMouseMove={this.rotateBook}
          >
          <figure className="side front">1</figure>
          <figure className="side right">2</figure>
          <figure className="side left">3</figure>
          <figure className="side top">4</figure>
          <figure className="side bottom">5</figure>
          <figure className="side back">6</figure>
        </div>
      </Draggable>
      </div>
    );
  }
}
export default Book;
