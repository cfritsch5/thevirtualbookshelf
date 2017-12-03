import React from 'react';
import {merge} from 'lodash';

class PositionsCalc extends React.Component {
constructor(props){
  super(props);

  this.calc = this.calc.bind(this);
  this.transformCoordinates = this.transformCoordinates.bind(this);
}

calc(){
  let radtoDeg = (180/Math.PI);
  let shelves = this.props.shelves;  // {0:[...]}
  let positions = this.props.positions;  // {{10:{x:0, ...}, 11:{...}}}
  let books = this.props.books;
  Object.keys(shelves).forEach((shelfID)=>{
    shelves[shelfID].forEach((idx1)=>{
      shelves[shelfID].forEach((idx2)=>{
        // console.log(idx1,idx2);
        if(idx1 !== idx2){
          // console.log(positions[idx1]);
          // console.log(positions[idx2]);
          let book1 = positions[idx1];
          let book2 = positions[idx2];
          // let relativeAngle = Math.abs(book1.angle - book2.angle);
          console.log('compare', books[idx1].title, books[idx2].title);
          // let {Ax, Bx, Bz, Cx, Cz, Dx, Dz, Az} = book1;
          // console.log(relativeAngle);
          // console.log('1 max X', Math.max(Ax, Bx, Cx, Dx ));
          // console.log('1 max Z',Math.max(Az, Bz, Cz, Dz ));
          // console.log('1 min X', Math.min(Ax, Bx, Cx, Dx ));
          // console.log('1 min Z', Math.min(Az, Bz, Cz, Dz ));
          // let minMax1 = this.transformCoordinates(book1, book2.angle);
          // let minMax2 = this.transformCoordinates(book2, book1.angle);
          // this.overlap(book1, book2);
          this.overlap(book1,book2);
        }
      });
    });
  });
}

overlap(book1, book2){
  let transform1 = this.transformCoordinates(book1, book2);
  let transform2 = this.transformCoordinates(book2, book1);

  // let mmTurnBook1 = this.minMax(turnBook1);
  // let mmTurnBook2 = this.minMax(turnBook2);
  let minMax1 = this.minMax(transform1.p1);
  let minMax2 = this.minMax(transform1.p2);
  let overlap = this.compareMINMAX(minMax1, minMax2);
  console.log('gap???',overlap);
  minMax1 = this.minMax(transform2.p1);
  minMax2 = this.minMax(transform2.p2);
  overlap = this.compareMINMAX(minMax1, minMax2);
  console.log('gap???',overlap);
  // console.log('transform books 2 into book 1 coord');

  // this.compareMINMAX(minMax2, book1);
}

compareMINMAX(p1,p2){
  // console.log(b1T,b2,b2T,b1);
  // let smallerX = b1T.minX < b2.minX ? b1T : b2;
  if(p1.maxX < p2.minX || p2.maxX < p1.minX) return true;
  if(p1.maxZ < p2.minZ || p2.maxZ < p1.minZ) return true;
  return false;
}

minMax(position){
  let {Ax, Bx, Bz, Cx, Cz, Dx, Dz, Az} = position;
  return {
    maxX: Math.max(Ax, Bx, Cx, Dx ),
    minX: Math.min(Ax, Bx, Cx, Dx ),
    maxZ: Math.max(Az, Bz, Cz, Dz ),
    minZ: Math.min(Az, Bz, Cz, Dz )
  };
}

// transformCoordinates(position, angle1,angle2){
//   let angle = 90 - (angle1 - angle2);
//   console.log(angle);
//   let newPos = merge({},position);
//   let {x, width, depth} = newPos;
//   let toRad = (angleInDeg) => angleInDeg*Math.PI/180;
//
//   newPos.Ax = Math.round(x*Math.cos(toRad(angle)));
//   newPos.Bx = Math.round(width*Math.cos(toRad(angle)));
//   newPos.Bz = Math.round((width/2)*Math.sin(- toRad(angle)));
//   newPos.Cx = Math.round(depth*Math.sin(toRad(angle)));
//   newPos.Cz = Math.round(depth*Math.cos(toRad(angle)));
//   newPos.Az = -newPos.Bz;
//   newPos.Dx = Math.round(newPos.Cx + newPos.Bx);
//   newPos.Dz = Math.round(newPos.Cz + newPos.Bz);
//
//
//   newPos.Cz = newPos.Cz  - newPos.Bz;
//   newPos.Bx = newPos.Bx + newPos.Ax;
//   newPos.Cx = newPos.Cx + newPos.Ax;
//   newPos.Dx = newPos.Dx + newPos.Ax;
//
//   return newPos;
// }
transformCoordinates(position1, position2){
  let p1 = merge({},position1);
  let p2 = merge({},position2);
  let {width, depth} = p1;
  let toRad = (angleInDeg) => angleInDeg*Math.PI/180.0;
  let sin = (x) => Math.sin(toRad(x));
  let cos = (x) => Math.cos(toRad(x));
  let dist = (x1,x2,z1,z2) =>(
    Math.sqrt(Math.pow(x2-x1,2) + Math.pow(z2-z1,2))
  );
  console.log(dist(0,0,5,1));

  let a = dist(p1.Ax, p2.Ax, p1.Az, p2.Az);
  let b = dist(p1.Ax, p2.Bx, p1.Az, p2.Bz);
  let c = dist(p1.Ax, p2.Cx, p1.Az, p2.Cz);
  let d = dist(p1.Ax, p2.Dx, p1.Az, p2.Dz);
  let theta = p1.angle + p2.angle;
  console.log(p1.Ax, p2.Dx, p1.Az, p2.Dz);

  p2.Ax = a*cos(theta).toFixed(3);
  p2.Az = a*sin(theta).toFixed(3);
  p2.Bx = b*cos(theta).toFixed(3);
  p2.Bz = b*sin(theta).toFixed(3);
  p2.Cx = c*sin(theta).toFixed(3);
  p2.Cz = c*cos(theta).toFixed(3);
  p2.Dx = d*sin(theta).toFixed(3);
  p2.Dz = d*cos(theta).toFixed(3);

  p1.Ax = 0;
  p1.Az = 0;
  p1.Bx = width;
  p1.Bz = 0;
  p1.Cx = 0;
  p1.Cz = depth;
  p1.Dx = width;
  p1.Dz = depth;

  console.log(p1,p2);

  // newPos.Cz = newPos.Cz  - newPos.Bz;
  // newPos.Bx = newPos.Bx + newPos.Ax;
  // newPos.Cx = newPos.Cx + newPos.Ax;
  // newPos.Dx = newPos.Dx + newPos.Ax;

  return {p1,p2};
}

render(){
  // console.log('position calc', this.props);
  // this.calc();
  return (
    <div className="positions_calc ">
      <p>{JSON.stringify(this.props.positions,null,5)}</p>
    </div>
  );
  }
}

export default PositionsCalc;
