import {merge} from 'lodash';

// book_id:{ shelf: shelf_id_num, position: pos_on_shelf}
// const exampleState= {
//   0: {shelf:0, position: 0},
//   1: {shelf:0, position: 1},
//   2: {shelf:1, position: 0},
//   3: {shelf:0, position: 2}
// };

const ShelfReducer = (state = {}, action) => {
  switch (action.type) {
    case 'FILL_SHELF':
    // console.log(" in reducer:",action.books);
    // let newState = {};
    // books for each with index
    //  {[book_id]: {shelf: 0, position: idx}}
    //  merge(newState, book)
    // end each
    // merge state & new state
      return merge({}, action.books);
    default:
      return state;
  }
};

export default ShelfReducer;
