import { combineReducers } from 'redux';
import SessionReducer from './session/session_reducer';
import BookReducer from './bookshelf/book_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  books: BookReducer
});

export default RootReducer;
