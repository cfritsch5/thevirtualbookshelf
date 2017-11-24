import React from 'react';
import Draggable from 'react-draggable';
import ReactDOM from 'react-dom';
import BookCSS from './bookCSS';

class Book extends React.Component {
  constructor(props){
    super(props);

    this.shortcode = this.shortcode.bind(this);
    this.rotate = this.rotate.bind(this);
    this.start = this.start.bind(this);
    this.state = {
      depth: 150,
      angle: 0,
      lastX: 0,
      book: this.props.book,
    };
  }

  componentDidMount(){
    this.depth = 150; //px

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
  shortcode(){
    // TODO: make shortcode util that will ensure uniqeness
    let title = this.props.book.title;
    title = title.replace(/the|of|and|in|to|on|by/gi, '');
    title = title.match(/\b\w/gi).join("");
    return title;
  }
  start(e){
    this.setState({ lastX: e.clientX});
  }

  rotate(e){
    // console.log('drag',e.clientX);
    let delta = e.clientX - this.state.lastX;
    let angle = Math.asin(delta/this.state.depth)*180/Math.PI;
    // console.log("delta, pi, angle",delta, Math.asin(delta/this.state.depth)*180/Math.PI,this.state.angle);
     //
    // console.log(angle,delta);
    if(isNaN(angle)){
      angle = 0;
    }
    this.setState({angle: angle});
  }
  render(){
    console.log("render book");
    let depth = this.state.depth; //px
    let height = this.props.book.height || 200; //px
    let width = 35; //px
    let title = this.shortcode();
    return (
      <div className={`book ${title}`} draggable={true} onDragStart={this.start} onDrag={this.rotate}>
        <BookCSS title={title} width={width} height={height} depth={depth} angle={this.state.angle}/>
        <div className={`container ${title}-container`} ref="book">
          <div className={`box ${title}-box`}>
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
  }
}
export default Book;
