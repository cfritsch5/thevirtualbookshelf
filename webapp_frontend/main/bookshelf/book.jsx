import React from 'react';
import Draggable from 'react-draggable';
import ReactDOM from 'react-dom';

class Book extends React.Component {
  constructor(props){
    super(props);

    this.printXY = this.printXY.bind(this);
    this.draw = this.draw.bind(this);
    this.height = 325;
    this.width = 200;
    this.position = {x:0,y:0};
  }

  componentDidMount(){
    this.canvas = ReactDOM.findDOMNode(this.refs.myCanvas);
    this.ctx = this.canvas.getContext('2d');
    let ctx = this.ctx;
    // this.ctx.fillStyle = 'rgb(200,0,0)';
    // this.ctx.fillRect(10, 10, 55, 50);
    this.cover = new Image();
    this.cover.src = "assets/TheHobbit_cover.jpg";
    let cover = this.cover;
    this.cover.onload = function() {
       ctx.drawImage(cover,0,0);
     };
    // this.ctx.drawImage(cover,10,10);
  }

// computer screen 1.5 ft away from face
// image appears 4 inch tall
// 1.5/4
// image is 3 in wide
// so on its side the farther edge would be three in
// into the screen
// 4/x = (1.5*12)/(1.5*12+3)
//4*(1.5*12+3)/(1.5*12) = x
// x = img.height * (distToScreen + distInToSCreen) / (distToScreen)


  draw(e){
    // this.height = 300;
    // this.width = 150;
    // canvas dimensions
    const img = this.cover;
    const mouseX = e.clientX || 0, mouseY = e.clientY || 0; //mouse position
    const rect = this.canvas.getBoundingClientRect(); //canvas position

    const clipHeight = img.height;
    let x = mouseX - rect.left;
    const coverWidth =  rect.right - mouseX;
    let startClipX = 0, startClipY = 0;
    let dw = 2, dh = this.height, y = 0 ; //displayWidth, displayHeight, drawAtYcoordinate

    let hb = this.height - this.height*(12/(12+2));
    let clipWidth = Math.ceil(img.width / coverWidth);
    let deltaY = (hb/coverWidth);

    this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);

    for ( let i = 0 ; i < coverWidth; i++){
      this.ctx.drawImage(img, startClipX, startClipY, clipWidth, clipHeight,x,y,dw,dh);
      startClipX += clipWidth;
      y += deltaY;
      dh -= deltaY*2;
      // this.ctx.drawImage(img,0,0);
      x += 1;
    }
    // this.ctx.drawImage(this.cover, 0,0);
  }


  printXY(e){
    const x = e.clientX;
    const y = e.clientY;
  }

  render(){
    return (
      <div>
          <Draggable ref={`book_${this.props.book.id}`} >
            <canvas ref="myCanvas" onMouseMove={this.draw}  width={this.width} height={this.height}></canvas>
          </Draggable>
      </div>
    );
  }
}
export default Book;
