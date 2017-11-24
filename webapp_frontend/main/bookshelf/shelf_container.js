import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import Shelf from './shelf';
import {logout } from '../session/session_actions';
import {fetchbooks} from './book_actions';

const mapStateToProps = ({session, books},{draggable}) => {
  return {
    currentUser: session.currentUser,
    draggable,
    books,
  };
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchbooks: () => dispatch(fetchbooks())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shelf);
