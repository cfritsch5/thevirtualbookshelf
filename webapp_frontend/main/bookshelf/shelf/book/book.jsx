import React from 'react';
import { DraggableCore } from 'react-draggable';
import BookCSS from './bookCSS';
import BookBox from './book_box';

class Book extends React.Component {
  constructor(props){
    super(props);

    this.shortcode = this.shortcode.bind(this);
    this.rotate = this.rotate.bind(this);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);

    this.state = {
      title: "",
      angle: 0,
    };
  }

  componentDidMount(){
    this.setState({ title: this.shortcode()});
  }

  shortcode(){
    // - todo later - make shortcode util that will ensure uniqeness
    let title = this.props.book.title;
    title = title.replace(/the|of|and|in|to|on|by/gi, '');
    title = title.match(/\b\w/gi).join("");
    return title;
  }

  start(e,ui){
    if(typeof this.angle === 'undefined') this.angle = 0;
  }

  stop(e,ui){
    this.props.updatePosition({[this.props.book.id]: {angle: this.state.angle}});
    // this.props.updatePosition({[this.props.book.id]: {x: ui.x, y: newY}});
  }

  rotate(e,ui){
    let angle = this.state.angle;
    let radtoDeg = (180/Math.PI);
    let oppositeOverhyp = (ui.deltaX/parseInt(this.props.book.depth));
    let angleDelta = Math.asin(oppositeOverhyp)*radtoDeg;
    if(!isNaN(angleDelta)){
      angle = angle + angleDelta;
      if( angle > 90 ) angle = 90;
      if( angle < -90 ) angle = -90;
      this.setState({angle: angle});
    } else {
      console.log("NAN!!!!!!!!!!!");
    }
  }

  render(){
    console.log('render book');
    let title = this.state.title;
    // let {height,width,depth} = this.props.book;
    return (
      <DraggableCore
        disabled={ !this.props.draggable }
        onStart={ this.start }
        onDrag={ this.rotate }
        onStop={ this.stop } >
        <div className={`book ${title}`}
          style={{transform: `rotateY(${this.state.angle}deg)`}}>
          <BookCSS title={ title } book={this.props.book}/>
          <BookBox title={ title } />
        </div>
      </DraggableCore>
    );
  }
}
export default Book;
