import React from 'react';
import Draggable from 'react-draggable';
import ReactDOM from 'react-dom';

class Shelf extends React.Component {
  constructor(props){
    super(props);

    this.onStart = this.onStart.bind(this);
    this.onDrag = this.onDrag.bind(this);
    this.onStop = this.onStop.bind(this);
  }

  onStart(e){
    // console.log(e);
  }

  onDrag(e){
    // console.log(e);
  }

  onStop(e){
    // console.log(e);
  }

  render(){
    return (
      <div className="shelf">
        {React.Children.map(this.props.children, (child)=> (
          <div className="bookPosition">
            <Draggable
              disabled={this.props.draggable}
              onStart={this.onStart}
              onDrag={this.onDrag}
              onStop={this.onStop}
              >
              {child}
            </Draggable>
          </div>
        ))}
      </div>
    );
  }
}
export default Shelf;
