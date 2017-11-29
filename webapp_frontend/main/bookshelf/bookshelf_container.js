import { connect } from 'react-redux';
import BookShelf from './bookshelf';
import {logout } from '../session/session_actions';
import {fetchbooks} from './bookshelf_actions';
import {appShortcut} from './shortcut_actions';

const mapStateToProps = ({session,books,shelves, shortcuts}) => ({
  currentUser: session.currentUser,
  books,
  shelves,
  shortcuts,
});

const mapDispatchToProps = (dispatch) => {
  return ({
    logout: user => dispatch(logout(user)),
    fetchbooks: () => dispatch(fetchbooks()),
    appShortcut: hotkey => dispatch(appShortcut(hotkey)),
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookShelf);
