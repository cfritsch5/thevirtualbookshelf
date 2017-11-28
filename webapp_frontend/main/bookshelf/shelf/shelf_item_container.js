import { connect } from 'react-redux';
import ShelfItem from './shelf_item';
import {updatePosition} from '../bookshelf_actions';

const mapStateToProps = (state, props) => {
  let {draggable, book} = props;
  return {
    draggable,
    book,
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
