import {merge} from 'lodash';

let position = {
  x: 0,
  y: 0,
  angle: 0,
  width: 0,
  depth: 0,
  A: { x: null, z: null },
  B: { x: null, z: null },
  C: { x: null, z: null },
  D: { x: null, z: null },
};

const PositionReducer = (state = {}, action) => {
  // console.log("POSITION REDUCER");
  switch (action.type) {
    case "NEW_POSITION":
      // console.log("position action", action,state);
      // let positions = {};
      let _id = action.position.id;
      let positions = {};
      // let newPos = {[action.position.id]: {angle: action.pos.angle}};
      Object.keys(action.position).forEach((id)=>{
        let newPos = merge({},position, state[id], action.position[id]);
        let x = newPos.x;
        let angle = newPos.angle;
        let {width, depth} = newPos;
        // let x = action.position[id].x || state.x || 0;
        // let angle = action.position[id].angle || state.angle || 0;
        // let {width, depth} = state[id] || action.position[id];
        // points = {
        //   A: { x: x,     z: 0 },
        //   B: { x: width*Math.cos(angle*Math.PI/180), z: width*Math.sin(angle*Math.PI/180) },
        //   C: { x: depth*Math.cos(angle*Math.PI/180), z: depth*Math.sin(angle*Math.PI/180) },
        //   D: { x: width, z: depth },
        // };
        // console.log( position);
        newPos.A.x = x;
        newPos.A.z = 0;
        newPos.B.x = Math.round(width*Math.cos(angle*Math.PI/180));
        newPos.B.z = Math.round((width/2)*Math.sin(angle*Math.PI/180));
        newPos.C.x = Math.round(depth*Math.sin(angle*Math.PI/180));
        newPos.C.z = Math.round(depth*Math.cos(angle*Math.PI/180));
        newPos.D.x = Math.round(newPos.C.x + newPos.B.x);
        newPos.D.z = Math.round(newPos.C.z + newPos.B.z);

        newPos.C.z = newPos.C.z  - newPos.B.z;
        newPos.B.x = newPos.B.x + x;
        newPos.C.x = newPos.C.x + x;
        newPos.D.x = newPos.D.x + x;

        // console.log(merge(position,points));
        positions[id] = newPos;
      });
      // let new_pos = merge( action.position, points);
      return merge({}, state, positions);
    default:
      return state;
  }
};

export default PositionReducer;

/*
So Collision detection:
thoughts -
books are limited to being on a shelf - so they are always aligned on that axis
but they can change angle.
basically if the bounding box locations are not overlapping, and the angles dont
overlapp the books do not overlap

so if book 1 is at x:1 y:200 width:35 height:200 depth: 150 and angle 0
and book 2 is at x:50 y: 200 width: 50 height: 150 depth 150 and angle -45

*/
