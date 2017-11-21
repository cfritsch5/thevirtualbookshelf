import React from 'react';
import Draggable from 'react-draggable';
import ReactDOM from 'react-dom';

class Book extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    return (
      <div>
        <img src="assets/TheHobbit_spine.jpg"
          style={{
            "transform":`perspective(${600}px) rotateY(-45deg) translateX(27px)`
          }}/>
        <img src="assets/TheHobbit_cover.jpg"
          style={{
            "transform":`perspective(${600}px) rotateY(-45deg) translateX(27px)`
          }}/>
      </div>
    );
  }
}
export default Book;
