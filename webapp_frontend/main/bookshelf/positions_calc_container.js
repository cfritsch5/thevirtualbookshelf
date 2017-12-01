import { connect } from 'react-redux';
import PositionsCalc from './positions_calc';
import { updatePosition } from './shortcut_actions';

const mapStateToProps = (state,props) => {
    return {
      fullState: state,
      props
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
)(PositionsCalc);
