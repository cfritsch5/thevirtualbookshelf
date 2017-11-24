import React from 'react';

const BookCSS = ({title, width, height, depth}) => (
  <style type="text/css" scoped>
    { `
    .${title} {
      width: ${width}px;
      height: ${height}px;
    }
    .container {
      width: ${width}px;
      height: ${height}px;
    }

    .box .front,
    .box .back {
      width: ${width}px;
      height: ${height}px;
      background-image: url('/assets/TheHobbit_spine.jpg');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    .box .right,
    .box .left {
      width: ${depth}px;
      height: ${height}px;
    }

    .box .right {
      background-image: url('/assets/TheHobbit_cover.jpg');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    .box .left {
      background-image: url('/assets/TheHobbit_backcover.jpg');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    .box .top,
    .box .bottom {
      width: ${width}px;
      height: ${depth}px;
    }

    .box .front  { transform: rotateY(   0deg ) translateZ(  ${depth/2}px ); }
    .box .back   { transform: rotateX( 180deg ) translateZ(  ${depth/2}px ) rotateZ(180deg);}
    .box .right  { transform: rotateY(  90deg ) translateZ( ${width/2}px  ); }
    .box .left   { transform: rotateY( -90deg ) translateZ( ${width/2}px ); }
    .box .top    { transform: rotateX(  90deg ) translateZ( ${height/2}px ); }
    .box .bottom { transform: rotateX( -90deg ) translateZ( ${height/2}px ); }
    `}
  </style>
);

export default BookCSS;
