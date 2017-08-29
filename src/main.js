import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import IndexContainer from './containers/IndexContainer.jsx'
import 'font-awesome-webpack'
import './css/queries.css'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { menuVisibleOnResize } from './events.js'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'


const store = createStore(rootReducer,
			  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
			  applyMiddleware(routerMiddleware(createBrowserHistory())))

menuVisibleOnResize(() => store.getState().ui.menu.visible, store.dispatch)

const history = syncHistoryWithStore(createBrowserHistory(), store)


export default class App extends React.Component {
  render() {
      return(
	  <Provider store={store}>
	    <Router history={history}>
              <Route path="/" component={IndexContainer} />
	    </Router>
	  </Provider>
    )
  }
}
