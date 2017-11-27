import { connect } from 'react-redux';
import Shelf from './shelf';
import {fetchbooks} from '../bookshelf_actions';

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
