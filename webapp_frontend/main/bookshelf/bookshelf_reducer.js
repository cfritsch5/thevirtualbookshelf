import {merge} from 'lodash';

const BookReducer = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_BOOKS':
    // console.log(" in book reducer action, state:",action,state);
      return merge({}, action.books);
    case 'SET_POSITIONS':
      return state;
    default:
      return state;
  }
};

export default BookReducer;
