import {merge} from 'lodash';

const ShelfReducer = (state = {}, action) => {
  let shelves = [[]];
  switch (action.type) {
    // case 'FILL_SHELF':
    //   return merge({}, action.books);
    case 'RECEIVE_BOOKS':
      Object.keys(action.books).map((id)=>{
        shelves[0].push(id);
      });
      console.log("in shelf reducer action, state", action, state);
      return merge({}, shelves);
    default:
      return state;
  }
};

export default ShelfReducer;
