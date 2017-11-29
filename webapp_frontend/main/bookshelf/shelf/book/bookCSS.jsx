import React from 'react';

class BookCSS extends React.PureComponent {

  render(){
    // console.log('render css');
    let title = this.props.title;
    let {width, height, depth} = this.props.book;
    let {cover, spine, back } = this.props.book;
    // console.log(cover,spine,back);
    return (
      <style type="text/css" scoped>
        { `
        .${title} {
          width: ${width}px;
          height: ${height}px;
        }

        .${title}-container {
          width: ${width}px;
          height: ${height}px;
        }

        .${title}-box .front {
          width: ${width}px;
          height: ${height}px;
        }

        .${title}-box .back {
          width: ${width}px;
          height: ${height - 5}px;
        }

        .${title}-box .front {
          background-image: url(${spine});
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }

        .${title}-box .right,
        .${title}-box .left {
          width: ${depth}px;
          height: ${height}px;
        }

        .${title}-box .right {
          background-image: url(${cover});
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }

        .${title}-box .left {
          background-image: url(${back});
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }

        .${title}-box .top,
        .${title}-box .bottom {
          width: ${width}px;
          height: ${depth}px;
        }

        .${title}-box .front  {
          transform: rotateY(   0deg ) translateZ( ${depth/2}px );
        }
        .${title}-box .back   {
          transform: rotateX( 180deg ) translateZ( ${depth/2 - 5}px );
        }
        .${title}-box .right  {
          transform: rotateY(  90deg ) translateZ( ${width/2}px  );
        }
        .${title}-box .left   {
          transform: rotateY( -90deg ) translateZ( ${width/2}px );
        }
        .${title}-box .top    {
          transform: rotateX(  90deg ) translateZ( ${height/2 - 5}px );
        }
        .${title}-box .bottom {
          transform: rotateX( -90deg ) translateZ( ${height/2 - 5}px );
        }
        `}
      </style>
    );
  }
}

export default BookCSS;
