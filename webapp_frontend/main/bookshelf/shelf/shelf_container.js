import { connect } from 'react-redux';
import Shelf from './shelf';

const mapStateToProps = (state, props) => {
  let {session, books} = state;
  let {draggable, id} = props;
  return {
    currentUser: session.currentUser,
    draggable,
    books,
    shelf: state.shelves[id],
  };
};

const mapDispatchToProps = (dispatch) => {
  return ({
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shelf);
