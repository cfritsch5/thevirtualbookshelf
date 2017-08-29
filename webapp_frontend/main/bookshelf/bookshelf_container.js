import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import BookShelf from './bookshelf';
import {logout } from '../session/session_actions';
import {fetchbooks} from './book_actions';

const mapStateToProps = ({ session, books }) => ({
  currentUser: session.currentUser,
  books: books
});

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchbooks: () => dispatch(fetchbooks()),
    logout: user => dispatch(logout(user))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookShelf);
