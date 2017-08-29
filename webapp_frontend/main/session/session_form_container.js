import { connect } from 'react-redux';

import { login, logout, signup, error } from './session_actions';
import SessionForm from './session_form';


const mapStateToProps = ({ session, currentUser }) => {
  return {
    loggedIn: Boolean(session.currentUser),
    currentUser: session.currentUser,
    errors: session.errors
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  // const formType = location.pathname.slice(1);
  // const processForm = (formType === 'login') ? login : signup;
  return {
  //   processForm: user => dispatch(processForm(user)),
  //   formType,
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user)),
    logout: user => dispatch(logout(user)),
    error: err => dispatch(error(err))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
