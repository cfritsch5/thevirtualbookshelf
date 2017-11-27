import { combineReducers } from 'redux';
import SessionReducer from './session/session_reducer';
import BookShelfReducer from './bookshelf/bookshelf_reducer';
import ShelfReducer from './bookshelf/shelf/shelf_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  books: BookShelfReducer,
  shelves: ShelfReducer,
});

export default RootReducer;
