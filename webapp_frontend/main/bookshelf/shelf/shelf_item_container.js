import { connect } from 'react-redux';
import ShelfItem from './shelf_item';
import {updatePosition} from '../bookshelf_actions';

const mapStateToProps = (state, props) => {
  let {draggable, book, xPosition} = props;
  return {
    draggable,
    book,
    xPosition,
  };
};

const mapDispatchToProps = (dispatch) => {
  return ({
    updatePosition: pos => dispatch(updatePosition(pos)),
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShelfItem);
