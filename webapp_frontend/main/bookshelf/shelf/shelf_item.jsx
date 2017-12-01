import React from 'react';
import Draggable from 'react-draggable';
import BookContainer from './book/book_container';

class ShelfItem extends React.Component {
  constructor(props){
    super(props);

    this.onStart = this.onStart.bind(this);
    this.onDrag = this.onDrag.bind(this);
    this.onStop = this.onStop.bind(this);
    this.state = { position: {x: 0, y: 0 }};
  }

  componentWillMount(){
    this.props.updatePosition({
      [this.props.book.id]: {
        x:this.props.xPosition,
        y: this.state.y,
        depth: this.props.book.depth,
        width: this.props.book.width,
      }
    });
    this.setState({position: {x:this.props.xPosition, y:0}});
  }

  style(sec, forward, angle){
    return `transition: ${sec}s ease-in-out;
      transform: translateZ(${forward}px) rotateY(${angle}deg);`;
  }

  setStyleDelay(node,sec,forward,angle){
    setTimeout(()=>{
      node.style = this.style(sec,forward,angle);
    },500);
  }

  findDeg(node){
    let angle = node.style.transform.match(/-?\d+.?\d+(?=deg)/);
    // console.log('angle',angle, angle? angle[0] : 0);
    // match returns null if not found and so if null it means the book has not
    // been rotated yet so just set the angle to zero
    return angle? angle[0] : 0;
  }

  onStart(e,ui){
    let node = ui.node.children[0];
    let angle = this.findDeg(node);
    node.style = this.style(0.25, 150, angle);
    this.setStyleDelay(node,0,150,angle);
    // console.log(ui,e.clientY);

  }

  onDrag(e,ui){
    // console.log(ui);
    this.props.updatePosition({[this.props.book.id]: {x: ui.x, y: ui.y}});
  }

  onStop(e,ui){
    let node = ui.node.children[0];
    let angle = this.findDeg(node);
    node.style = this.style(0.33, 0, angle);
    this.setStyleDelay(node,0,0,angle);
    // console.log('rect',node.getBoundingClientRect());
    // let rect = node.getBoundingClientRect();
    // let coordinates = {
    //   x: rect.x,
    //   y: rect.y,
    //   angle: angle,
    // };
    // let newY = ui.y - ui.y % 200;
    // if(newY >= 200){
    //   // throw action to move to new shelf
    //   // this ofcourse would rely on vertical shelving
    // }
    let newX = ui.x - ui.x % 35;
    this.setState({position: { x: ui.x, y: 0}});
  }

      // extra div is used by draggable to insert style classes
  render(){
    // console.log('render shelf item', this.state.position.x);
    return (
      <Draggable
        disabled={this.props.draggable}
        onStart={this.onStart}
        onDrag={this.onDrag}
        onStop={this.onStop}
        position={this.state.position}
        >
        <div style={{position: 'absolute'}}>
          <BookContainer book={this.props.book} draggable={this.props.draggable}/>
        </div>
      </Draggable>
    );
  }
}
export default ShelfItem;
