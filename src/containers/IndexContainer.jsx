import React from 'react'
import IndexComponent from '../components/IndexComponent.jsx'
import LoginContainer from '../containers/authentication/LoginContainer'
import { connect } from 'react-redux'
import { withCookies, Cookies } from 'react-cookie'


const mapStateToProps = state => {
    return {
        token: state.data.authDomain.token
    }
}

class IndexContainer extends React.Component {
    render() {
        const cookies = new Cookies()

        const ComponentToRender =
            this.props.token || cookies.get('token') ? <IndexComponent {...this.props} />
            : <LoginContainer />

    return ComponentToRender
  }
}

export default withCookies(IndexContainer)
