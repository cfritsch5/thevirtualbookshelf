import {merge} from 'lodash';

const PositionReducer = (state = {}, action) => {
  // console.log("POSITION REDUCER");
  switch (action.type) {
    case "NEW_POSITION":
      // console.log("position action", action,state);
      // let newPos = {[action.position.id]: {angle: action.pos.angle}};
      return merge({}, state, action.position);
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
