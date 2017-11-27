import React from 'react';
import Draggable,{DraggableCore} from 'react-draggable';
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
    // let node = this.refs[this.state.title];
    // this.setState({ node: node});
    // console.log(node.getBoundingClientRect());
    // let img = new Image();
    // img.src = "assets/rotate.png";
    // this.setState({ img });

    // this.setState({ title: this.shortcode(), img, node});
    this.setState({ title: this.shortcode()});
  }

  shortcode(){
    // - todo later - make shortcode util that will ensure uniqeness
    let title = this.props.book.title;
    title = title.replace(/the|of|and|in|to|on|by/gi, '');
    title = title.match(/\b\w/gi).join("");
    return title;
  }

  start(e,x,y,z){
    console.log(e,x,y,z);
    // console.log('------------------------- START DRAG ------------------------');
    // this.setState({ lastX: e.clientX});
    // this.angle = this.angle || {};
    // this.x = this.x || {};
    // console.log('anle?', this.angle);
    this.x = e.clientX;
    if(typeof this.angle === 'undefined'){
    //   // console.log('angle undef');
    //   // this.angle = {};
      this.angle = 0;
    } else {
    //   // console.log('angle def');
    //   // this.angle.second = null;
    //   // this.angle.current = null;
    //   // this.angle.total = 0;
    }
    // e.dataTransfer.setDragImage(this.state.img, 25, 15);
  }

  stop(e,ui){
    // console.log('------------------------- STOP DRAG ------------------------');
    // console.log(e,x,y,z);
    // this.setState({angle: this.rotate(e)});
  }

  drag(e,ui){
    // console.log('ondrag',e,ui);
    this.rotate(e,ui);
  }

  rotate(e,ui){
    // console.log("rotate!");
    // console.log(e.currentTarget);
    // console.log('clientX, x, delta',e.clientX,this.x,delta);
    // let deltaX = e.clientX - this.x;
    // console.log('delta',deltaX);
    // this.x = e.clientX;
    let angleDelta = Math.asin((ui.deltaX/this.state.depth))*(180/Math.PI);
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

      ui.node.style = `transform: rotateY(${this.angle}deg);`;
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
      <DraggableCore
        disabled={!this.props.draggable}
        onStart={this.start}
        onDrag={this.drag}
        onStop={this.stop}
        >
        <div className={`book ${title}`} ref={title}>
          <BookCSS title={title} width={width} height={height} depth={depth}/>
          <BookBox title={title} />
        </div>
      </DraggableCore>
    );
  }
}
export default Book;
