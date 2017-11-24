import { connect } from 'react-redux';
import Header from './header';
import {logout } from '../session/session_actions';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
});

const mapDispatchToProps = (dispatch) => {
  return ({
    logout: user => dispatch(logout(user))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
