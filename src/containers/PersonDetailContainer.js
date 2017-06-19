import {connect} from 'react-redux';
import PersonDetail from '../components/PersonDetail';

function mapStateToProps(state) {
  return {
    people: state.people
  };
}

export default connect(
  mapStateToProps, null
)(PersonDetail);
