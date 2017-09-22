import WrittersComponent from '../../components/writters/WrittersComponent.jsx'
import React from 'react'
import { connect } from 'react-redux'
import { set_writter_prop } from '../../actions/writters'
import { fetch_writters } from '../../actions/writters'
import { withRoute } from 'react-router'

const mapStateToProps = (state, ownProps) => {
    const writters = state.data.writtersDomain.writters
    const activePage = state.ui.pagination.activePage
    const errorMessage = state.ui.messages.message
    return {
        writters,
        activePage,
        errorMessage
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onWritterPropChange: (prop, value) =>
            dispatch(set_writter_prop(prop, value)),
        fetchWritters: page => dispatch(fetch_writters(page))
    }
}


class WrittersContainer extends React.Component {

    componentDidMount() {
        this.props.fetchWritters(1)
    }
    render() {
        return <WrittersComponent {...this.props} />
    }
}


WrittersContainer = connect(mapStateToProps, mapDispatchToProps)(WrittersContainer)

export default WrittersContainer
