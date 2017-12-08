import React from 'react';
import {merge} from 'lodash';

export const calc = (props)=>{
  let radtoDeg = (180/Math.PI);
  let shelves = props.shelves;  // {0:[...]}
  let positions = props.positions;  // {{10:{x:0, ...}, 11:{...}}}
  let books = props.books;
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
          // this.overlap(book1,book2);
        }
      });
    });
  });
};

function CollisionException() {}

export const overlap = (newPos, oldPos, state) => {
  merge(newPos,getCoords(newPos));
  merge(newPos,minMaxX(newPos));
  try {
    Object.keys(state.shelfList[newPos.shelf]).forEach((id2)=>{
      if(newPos.id !== id2){
        if(compareMINMAX(newPos,state[id2])){
          console.log(true);
        }else{
          console.log(false);
          throw new CollisionException;
        }
      }
    });

  } catch (e){
    // console.log('catch');
    if (e instanceof CollisionException) {
      newPos = oldPos;
      console.log(newPos);
    }
  }

};

export const compareMINMAX = (p1,p2) => {
  // console.log('p1.maxX, p2.minX, p2.maxX, p1.minX');
  // console.log(p1.maxX, p2.minX, p2.maxX, p1.minX);
  // let smallerX = b1T.minX < b2.minX ? b1T : b2;
  if(p1.maxX <= p2.minX || p2.maxX <= p1.minX) return true;
  return false;
};
export const compareMINMAXvec = (p1,p2) => {
  // console.log('p1.maxX, p2.minX, p2.maxX, p1.minX');
  // console.log(p1.maxX, p2.minX, p2.maxX, p1.minX);
  if(p1.maxX <= p2.minX || p2.maxX <= p1.minX) return true;
  return false;
};

export const minMaxX = (position)=> {
  let {Ax, Bx, Bz, Cx, Cz, Dx, Dz, Az} = position;
  return {
    maxX: Math.max(Ax, Bx, Cx, Dx ),
    minX: Math.min(Ax, Bx, Cx, Dx ),
  };
};
// export const minMax = (position)=> {
//   let {Ax, Bx, Bz, Cx, Cz, Dx, Dz, Az} = position;
//   return {
//     maxX: Math.max(Ax, Bx, Cx, Dx ),
//     minX: Math.min(Ax, Bx, Cx, Dx ),
//     maxZ: Math.max(Az, Bz, Cz, Dz ),
//     minZ: Math.min(Az, Bz, Cz, Dz )
//   };
// };

export const toRad = (angleInDeg) => angleInDeg*Math.PI/180;

export const getCoords = (position)=>{
  let {x, width, depth, angle} = position;
  let i = x;
  +i; +width; +depth; //Coerse to numbers
  // let angle = toRad(+position.angle);
  let newPos = {};
  // console.log(angle);
  // console.log(Math.sin(toRad(angle)));
  // console.log((width/2) * Math.abs(Math.sin(toRad(angle))));
  newPos.Ax = (width/2) * Math.abs(Math.sin(toRad(angle)));
  newPos.Bx = (width/2) * Math.abs(Math.cos(toRad(angle)));
  newPos.Bz = (width/2) * Math.sin(- toRad(angle));
  newPos.Cx = depth * Math.sin(toRad(angle));
  newPos.Cz = depth * Math.cos(toRad(angle));
  newPos.Az =  -newPos.Bz;
  newPos.Dx = newPos.Cx + newPos.Bx + width/2 + i;
  newPos.Dz = newPos.Cz + newPos.Bz;

  newPos.Cz = newPos.Cz  - newPos.Bz;
  newPos.Ax = newPos.Ax + i;
  newPos.Bx = newPos.Bx + (width/2) + i;
  newPos.Cx = newPos.Cx + newPos.Ax;
  // newPos.Dx = newPos.Dx + x;
  // console.log(x, newPos);

  return newPos;
};

//     newPos.Ax = x;
//     newPos.Bx = (width*Math.cos(angle*Math.PI/180)).toFixed(3);
//     newPos.Bz = ((width/2)*Math.sin( -angle*Math.PI/180)).toFixed(3);
//     newPos.Cx = (depth*Math.sin(angle*Math.PI/180)).toFixed(3);
//     newPos.Cz = (depth*Math.cos(angle*Math.PI/180)).toFixed(3);
//     newPos.Dx = (+newPos.Cx + +newPos.Bx);
//     newPos.Dz = (+newPos.Cz + +newPos.Bz);
//     newPos.Az = -newPos.Bz;
//
//     newPos.Cz = newPos.Cz  - newPos.Bz;
//     newPos.Bx = newPos.Bx + x;
//     newPos.Cx = newPos.Cx + x;
//     newPos.Dx = newPos.Dx + x;

export const transformCoordinates = (position1, position2)=>{
  let p1 = merge({},position1);
  let p2 = merge({},position2);
  let {width, depth} = p1;
  // let toRad = (angleInDeg) => angleInDeg*Math.PI/180.0;
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
};
