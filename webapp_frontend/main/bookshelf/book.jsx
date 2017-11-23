import React from 'react';
import Draggable from 'react-draggable';
import ReactDOM from 'react-dom';

class Book extends React.Component {
  constructor(props){
    super(props);

    // this.rotateBook = this.rotateBook.bind(this);

    this.state = {
      angle: 0,
    };
  }

  componentDidMount(){
    // this.book = ReactDOM.findDOMNode(this.refs.book);
  }

  // rotateBook(e){
  //   let rect = this.book.getBoundingClientRect();
  //   let angle = 0;
  //   let percentRight = (1 - (e.clientX - rect.left)/(rect.right - rect.left));
  //   let percentLeft = (1 - (e.clientX - rect.right)/(rect.right - rect.left));
  //   this.setState({angle: angle});
  // }
  // position(){
  //   return({x: this.props.position});
  // }
  render(){
    // let style = {
    //   'transformOrigin':` center center -100px`,
    // };
    // 'transform': `rotateY(${this.state.angle}deg)`,

    // console.log(style);
    // onMouseMove={this.rotateBook}
    // <Draggable
    // <div className="container" ref="book" draggable="false" onDrag={(e)=> console.log(e)}>
    //   ref={`book_${this.props.book.id}`}
    //   axis="x"
    //   defaultPosition={{x: 0, y: 0}}
    //   bounds={{left: 50, right: 50,}}
    //   >
    // style={style}

    return (
      <div className="book">
        <div className="container" ref="book">
          <div className="box"
            >
            <figure className="side front">1</figure>
            <figure className="side right">2</figure>
            <figure className="side left">3</figure>
            <figure className="side top">4</figure>
            <figure className="side bottom">5</figure>
            <figure className="side back">6</figure>
          </div>
        </div>
      </div>
    );
  // </Draggable>
    // <input className="slider"
    //   type="range" min="-90" max="90" defaultValue="0"
    //   onChange={(e)=>this.setState({angle: e.currentTarget.value})}
    //   />
  }
}
export default Book;
