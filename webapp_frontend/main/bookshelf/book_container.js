import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import Book from './book';
const mapStateToProps = ({book}) => ({
  book: book
});

const mapDispatchToProps = (dispatch) => {
  return ({
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Book);
