import { connect } from 'react-redux';
import BookShelf from './bookshelf';
import {logout } from '../session/session_actions';

const mapStateToProps = ({ session, books }) => ({
  currentUser: session.currentUser,
  books: books
});

const mapDispatchToProps = (dispatch) => {
  return ({
    logout: user => dispatch(logout(user))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookShelf);
