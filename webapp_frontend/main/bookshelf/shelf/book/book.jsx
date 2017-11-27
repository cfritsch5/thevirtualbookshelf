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
      depth: 150,
      width: 35,
      height: 200,
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
  }

  rotate(e,ui){
    let angleDelta = Math.asin((ui.deltaX/this.state.depth))*(180/Math.PI);
    if(!isNaN(angleDelta)){
      this.angle = this.angle + angleDelta;
      if( this.angle > 90 ) this.angle = 90;
      if( this.angle < -90 ) this.angle = -90;
      ui.node.style = `transform: rotateY(${this.angle}deg);`;
    }
  }

  render(){
    let depth = this.state.depth;
    let height = this.props.height;
    let width = this.state.width;
    let title = this.state.title;
    // these properties should eventually be defined on the book objects
    // and then can be passed and pulled out more easily
    // let {title,height,width,depth} = this.props.book
    return (
      <DraggableCore
        disabled={ !this.props.draggable }
        onStart={ this.start }
        onDrag={ this.rotate }
        onStop={ this.stop }
        >
        <div className={`book ${title}`} ref={title}>
          <BookCSS title={ title } width={ width } height={ height } depth={ depth }/>
          <BookBox title={ title } />
        </div>
      </DraggableCore>
    );
  }
}
export default Book;
