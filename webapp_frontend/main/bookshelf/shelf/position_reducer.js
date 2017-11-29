import {merge} from 'lodash';

const PositionReducer = (state = {}, action) => {
  console.log("POSITION REDUCER");
  switch (action.type) {
    case "NEW_POSITION":
      console.log("position action", action,state);
      // let newPos = {[action.position.id]: {angle: action.pos.angle}};
      return merge({}, state, action.position);
    default:
      return state;
  }
};

export default PositionReducer;
