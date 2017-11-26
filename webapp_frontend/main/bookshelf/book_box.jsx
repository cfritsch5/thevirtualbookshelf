import React from 'react';
import Draggable from 'react-draggable';
import ReactDOM from 'react-dom';
import BookCSS from './bookCSS';

class BookBox extends React.PureComponent {

  render(){
    let title = this.props.title;
    return (
        <div className={`container ${title}-container`}>
          <div className={`box ${title}-box`}>
            <figure ref='front' className="side front"></figure>
            <figure ref='right' className="side right"></figure>
            <figure ref='left' className="side left"></figure>
            <figure ref='top' className="side top"></figure>
            <figure ref='bottom' className="side bottom"></figure>
            <figure ref='back' className="side back"></figure>
          </div>
        </div>
      );
  }
}
export default BookBox;
