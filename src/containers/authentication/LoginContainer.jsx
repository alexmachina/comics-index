import React from 'react'
import { connect } from 'react-redux'
import LoginComponent from '../../components/authentication/LoginComponent'
import { set_user_prop,
  user_auth } from '../../actions/auth'

  const mapStateToProps = (state) => {
    return {
      errorMessage: state.ui.messages.message,
      user: state.data.authDomain.user,
      isLoading: state.ui.loading.isLoading
    }
  },
  mapDispatchToProps = (dispatch, ownProps) => {
    return {
      onUserPropChange: (prop, value) =>
      dispatch(set_user_prop(prop, value)),
      onSubmit: (user) => {
        dispatch(user_auth(user))
      }

    }
  }

  class LoginContainer extends React.Component {
    render() {

      return <LoginComponent {...this.props} />
    }
  }

  export default connect(mapStateToProps,
    mapDispatchToProps)(LoginContainer)
