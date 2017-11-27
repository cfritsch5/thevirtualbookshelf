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
      width: 35,
      height: 200,
      node: null,
      img: null,
    };
    // this.state = {
    //   title: "",
    //   depth: 150,
    //   width: 35,
    //   height: 200,
    //   angle: 0,
    //   lastX: 0,
    //   node: null,
    //   img: null,
    // };
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
    // console.log('------------------------- START DRAG ------------------------');
    // this.setState({ lastX: e.clientX});
    // this.angle = this.angle || {};
    // this.x = this.x || {};
    // console.log('anle?', this.angle);
    this.x = e.clientX;
    if(typeof this.angle === 'undefined'){
      // console.log('angle undef');
      // this.angle = {};
      this.angle = 0;
    } else {
      // console.log('angle def');
      // this.angle.second = null;
      // this.angle.current = null;
      // this.angle.total = 0;
    }
    e.dataTransfer.setDragImage(this.state.img, 25, 15);
  }

  stop(e){
    // console.log('------------------------- STOP DRAG ------------------------');
    // this.setState({angle: this.rotate(e)});
  }

  drag(e){
    this.rotate(e);
  }

  rotate(e){
    // console.log(e.target);
    // console.log(e.currentTarget);
    // console.log('clientX, x, delta',e.clientX,this.x,delta);
    let deltaX = e.clientX - this.x;
    // console.log('delta',delta);
    this.x = e.clientX;
    let angleDelta = Math.asin((deltaX/this.state.depth))*(180/Math.PI);
    // console.log(angle);
    // console.log('this angle:',this.angle);
    // this.angle.last = this.angle.second;
    // this.angle.second = this.angle.current;
    // this.angle.current = angle;

    if(!isNaN(angleDelta)){
      this.angle = this.angle + angleDelta;
      if( this.angle > 90 ) this.angle = 90;
      if( this.angle < -90 ) this.angle = -90;
    // console.log('this angle:',this.angle);
    // if( isNaN(this.angle.second)) {
    //   angle = this.angle.last;
    //   this.angle.current = angle;
    // }else{
    // }

      this.state.node.style = `transform: rotateY(${this.angle}deg);`;
    }
    // this.setState({angle});
    // return angle;
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
      <div className={`book ${title}`} ref={`${title}`}
        draggable={this.props.draggable}
        onDragStart={this.start}
        onDrag={this.drag}
        onDragEnd={this.stop}
        >
        <BookCSS title={title} width={width} height={height} depth={depth}/>
        <BookBox title={title} />
      </div>
    );
  }
}
export default Book;
