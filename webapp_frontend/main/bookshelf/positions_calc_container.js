import { connect } from 'react-redux';
import PositionsCalc from './positions_calc.jsx';
import { updatePosition } from './shortcut_actions';
import {merge} from 'lodash';

const mapStateToProps = (state,props) => {
    return merge({},state,props);
  //   {
  //     state
  //     props
  // };
};

const mapDispatchToProps = (dispatch) => {
  return ({
    updatePosition: pos => dispatch(updatePosition(pos)),
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PositionsCalc);
