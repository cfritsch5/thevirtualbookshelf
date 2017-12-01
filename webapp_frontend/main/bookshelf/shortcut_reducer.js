import {merge} from 'lodash';

let defaultState = {movementTypeToggle: false};
//  true means rotate
//  false means move
//  for manipulating books

export const ShortcutReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SHIFT':
      let movementTypeToggle = !state.movementTypeToggle;
    // console.log("ShortcutReducer SHIFT", state, movementTypeToggle);
    return merge({},state,{movementTypeToggle});
    default:
    return state;
  }
};

export default ShortcutReducer;
