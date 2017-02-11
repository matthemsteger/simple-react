import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory, Router} from 'react-router';
import {syncHistoryWithStore, routerMiddleware} from 'react-router-redux';
import {Provider} from 'react-redux';
import routes from './routes';
import createStore from './redux/createStore';

const reduxRouterMiddleware = routerMiddleware(browserHistory);
const store = createStore({}, reduxRouterMiddleware);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
	<Provider store={store}>
		<Router history={history} routes={routes} />
	</Provider>
	, document.getElementById('root')
);
