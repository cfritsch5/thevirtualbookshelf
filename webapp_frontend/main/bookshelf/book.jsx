import React from 'react';
import Draggable from 'react-draggable';
import ReactDOM from 'react-dom';
import BookCSS from './bookCSS';

class Book extends React.Component {
  constructor(props){
    super(props);

    // this.rotateBook = this.rotateBook.bind(this);
    this.getDisplayWidth = this.getDisplayWidth.bind(this);

    this.state = {
      angle: 0,
      book: this.props.book
    };
  }

  componentDidMount(){
    this.book = ReactDOM.findDOMNode(this.refs.book);
    this.front = ReactDOM.findDOMNode(this.refs.front);
    this.right = ReactDOM.findDOMNode(this.refs.right);
    this.left = ReactDOM.findDOMNode(this.refs.left);
    this.top = ReactDOM.findDOMNode(this.refs.top);
    this.bottom = ReactDOM.findDOMNode(this.refs.bottom);
    this.back = ReactDOM.findDOMNode(this.refs.back);
    // console.log('right',this.right.getBoundingClientRect());
    // console.log('front',this.front.getBoundingClientRect());
    // refs get Bounding Client allows me to find out what the actual display
    // widths are
    // console.log(this);
    // this.getDisplayWidth(this);
    // this.test = "TESTING";
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

  getDisplayWidth(e){
    // console.log(e);
    // console.log(this.right.getBoundingClientRect());
  }

  render(){
    // this.getDisplayWidth();
    // let style = {
    //   'transformOrigin':` center center -100px`,
    // };
    // 'transform': `rotateY(${this.state.angle}deg)`,

    // console.log(style);
    // onMouseMove={this.rotateBook}
    // <div className="container" ref="book" draggable="false" onDrag={(e)=> console.log(e)}>
    //   ref={`book_${this.props.book.id}`}
    //   axis="x"
    //   defaultPosition={{x: 0, y: 0}}
    //   bounds={{left: 50, right: 50,}}
    //   >

    let height = this.props.book.height || 200; //px
    let width = 35; //px
    let depth = 150; //px
    let title = this.props.book.title.replace(/\s/g, '-');
    //  util shortcode - remove the and etc
    //  and abbreviate so Harry Potter and The Chamber of Secrets
    //  goes to HPCS
    //  maybe us redux to manage shortcodes and make sure there are no duplicates

    console.log(title);
    return (
      <div className={`book ${this.props.book.title}`} onClick={(e)=>console.log('bookClick',e)}>
        <BookCSS title={title} width={width} height={height} depth={depth} />
        <div className="container" ref="book">
          <div className="box">
            <figure ref='front' className="side front"></figure>
            <figure ref='right' className="side right"></figure>
            <figure ref='left' className="side left"></figure>
            <figure ref='top' className="side top"></figure>
            <figure ref='bottom' className="side bottom"></figure>
            <figure ref='back' className="side back"></figure>
          </div>
        </div>
      </div>
    );
    // <input className="slider"
    //   type="range" min="-90" max="90" defaultValue="0"
    //   onChange={(e)=>this.setState({angle: e.currentTarget.value})}
    //   />
  }
}
export default Book;
