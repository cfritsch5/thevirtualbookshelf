import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import Home from './home';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
  location: location.pathname.slice(1)
});

const mapDispatchToProps = (dispatch,{location}) => {
  return ({});
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Home));
