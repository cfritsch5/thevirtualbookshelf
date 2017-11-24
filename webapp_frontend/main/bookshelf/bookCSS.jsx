import React from 'react';

const BookCSS = ({title, width, height, depth, angle}) => (
  <style type="text/css" scoped>
    { `
    .${title} {
      width: ${width}px;
      height: ${height}px;
      transform: rotateY(${angle}deg);
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
      background-image: url('/assets/TheHobbit_spine.jpg');
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
      background-image: url('/assets/TheHobbit_cover.jpg');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    .${title}-box .left {
      background-image: url('/assets/TheHobbit_backcover.jpg');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    .${title}-box .top,
    .${title}-box .bottom {
      width: ${width}px;
      height: ${depth}px;
    }

    .${title}-box .front  { transform: rotateY(   0deg ) translateZ(  ${depth/2}px ); }
    .${title}-box .back   { transform: rotateX( 180deg ) translateZ(  ${depth/2 - 5}px ) rotateZ(180deg);}
    .${title}-box .right  { transform: rotateY(  90deg ) translateZ( ${width/2}px  ); }
    .${title}-box .left   { transform: rotateY( -90deg ) translateZ( ${width/2}px ); }
    .${title}-box .top    { transform: rotateX(  90deg ) translateZ( ${height/2 - 5}px ); }
    .${title}-box .bottom { transform: rotateX( -90deg ) translateZ( ${height/2 - 5}px ); }
    `}
  </style>
);

export default BookCSS;
