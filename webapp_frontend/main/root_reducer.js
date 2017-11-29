import { combineReducers } from 'redux';
import SessionReducer from './session/session_reducer';
import BookShelfReducer from './bookshelf/bookshelf_reducer';
import ShelfReducer from './bookshelf/shelf/shelf_reducer';
import PositionReducer from './bookshelf/shelf/position_reducer';
import ShortcutReducer from './bookshelf/shortcut_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  books: BookShelfReducer,
  shelves: ShelfReducer,
  positions: PositionReducer,
  shortcuts: ShortcutReducer,
});

export default RootReducer;
