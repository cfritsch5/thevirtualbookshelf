import {merge} from 'lodash';

const BookReducer = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_BOOKS':
    // console.log(" in reducer:",action.books);
      return merge({}, action.books);
    default:
      return state;
  }
};

export default BookReducer;
