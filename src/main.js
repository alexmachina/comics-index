import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import createHistory  from 'history/createBrowserHistory'
import IndexContainer from './containers/IndexContainer'
import WrittersContainer from './containers/writters/WrittersContainer'
import HomeContainer from './containers/HomeContainer.jsx'
import ArtistsContainer from './containers/artists/ArtistsContainer'
import LoginContainer from './containers/authentication/LoginContainer'
import 'font-awesome-webpack'
import './css/queries.css'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import menuVisibleOnResize from './events.js'
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/sagas'
import { CookiesProvider } from 'react-cookie'

const sagaMiddleware = createSagaMiddleware()


const middleware = routerMiddleware(hashHistory)

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(sagaMiddleware, middleware)
    )


sagaMiddleware.run(rootSaga)

const history = syncHistoryWithStore(hashHistory, store)

menuVisibleOnResize(() => store.getState().ui.menu.visible, store.dispatch)




export default class App extends React.Component {
  render() {
      return(
	  <Provider store={store}>
            <CookiesProvider>
	      <Router history={history}>

                <Route exact path="/login" component={LoginContainer} />
                <Route path="/" component={IndexContainer}>
                  <IndexRoute component={HomeContainer} />
                  <Route path="/writters" component={WrittersContainer}/>
                  <Route path="/artists" component={ArtistsContainer}/>
                </Route>
              </Router>

            </CookiesProvider>
	  </Provider>
      )
  }
}
