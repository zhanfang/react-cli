import { connect } from 'react-redux'
import { changeUsername } from '../actions/User'

function mapStateToProps(state, props) {
  return {
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeUsername: () => dispatch(changeUsername())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)
