import React from 'react';
import Draggable from 'react-draggable';
import ReactDOM from 'react-dom';

class Shelf extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    return (
      <div className="shelf">
        {React.Children.map(this.props.children, (child)=> (
          <Draggable axis='x'>
            {child}
          </Draggable>
        ))}
      </div>
    );
  }
}
export default Shelf;
