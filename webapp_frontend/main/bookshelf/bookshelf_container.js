import { connect } from 'react-redux';
import BookShelf from './bookshelf';
import {logout } from '../session/session_actions';
import {fetchbooks} from './bookshelf_actions';


const mapStateToProps = ({session,books,shelves}) => ({
  currentUser: session.currentUser,
  books,
  shelves,
});

const mapDispatchToProps = (dispatch) => {
  return ({
    logout: user => dispatch(logout(user)),
    fetchbooks: () => dispatch(fetchbooks())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookShelf);
