import React from 'react';
import Draggable from 'react-draggable';
import ReactDOM from 'react-dom';
import BookCSS from './bookCSS';
import BookBox from './book_box';

class Book extends React.Component {
  constructor(props){
    super(props);

    this.shortcode = this.shortcode.bind(this);
    this.rotate = this.rotate.bind(this);
    this.drag = this.drag.bind(this);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);

    this.state = {
      title: "",
      depth: 150,
      angle: 0,
      lastX: 0,
      book: this.props.book,
      node: null,
      draggable: this.props.draggable,
      img: null,
    };
  }

  // componentWillUpdate(nextProps){
  //   console.log('nextProps',nextProps);
  //   if(nextProps.draggable !== this.props.draggable){
  //     this.state.node.style = `transition: 0.5s ease-in-out; transform: rotateY(${0}deg);`;
  //   }
  // }

  componentDidMount(){
    // this.depth = 150; //px
    let node = this.refs[this.state.title];
    // this.setState({ node: node});
    // console.log(node.getBoundingClientRect());
    let img = new Image();
    img.src = "assets/rotate.png";
    // this.setState({ img });

    this.setState({ title: this.shortcode(), img, node});
  }

  shortcode(){
    // - todo later - make shortcode util that will ensure uniqeness
    let title = this.props.book.title;
    title = title.replace(/the|of|and|in|to|on|by/gi, '');
    title = title.match(/\b\w/gi).join("");
    return title;
  }

  start(e){
    this.setState({ lastX: e.clientX});

    e.dataTransfer.setDragImage(this.state.img, 25, 15);
  }

  stop(e){
    this.setState({angle: this.rotate(e)});
  }

  drag(e){
    this.rotate(e);
  }

  rotate(e){
    let delta = e.clientX - this.state.lastX;
    let angle = Math.asin((delta/this.state.depth))*(180/Math.PI);

    if( isNaN(angle) ) angle = 0;
    if( angle > 90 ) angle = 90;
    if( angle < -90 ) angle = -90;

    this.state.node.style = `transform: rotateY(${angle}deg);`;
    return angle;
  }

  render(){
    let depth = this.state.depth;
    let height = this.props.book.height || 200;
    let width = 35;
    let title = this.state.title;
    let propsCSS = {title,width,height,depth};
    // these properties should eventually be defined on the book objects
    // and then can be passed and pulled out more easily
    // let {title,height,width,depth} = this.props.book
    return (
      <div className={`book ${title}`} ref={`${title}`}
        draggable={this.props.draggable}
        onDragStart={this.start}
        onDrag={this.drag}
        onDragEnd={this.stop}
        >
        <BookCSS props={propsCSS}/>
        <BookBox title={title} />
      </div>
    );
  }
}
export default Book;
