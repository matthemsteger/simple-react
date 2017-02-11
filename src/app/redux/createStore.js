import {applyMiddleware, compose, createStore} from 'redux';
import _ from 'lodash';
import _debug from 'debug';
import rootReducer from './rootReducer';

const debug = _debug('simple:app:redux:createStore');

function createCustomThunkMiddlware() {
	return function customThunkMiddlware({dispatch, getState}) {
		return (next) => (action) => {
			if (_.isFunction(action)) {
				const result = action(dispatch, getState);
				return result;
			}

			return next(action);
		};
	};
}

export default function createAppStore(initialState = {}, ...middlewares) {
	debug('creating app with environment %s', process.env.NODE_ENV);
	const composeEnhancers = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose; // eslint-disable-line no-underscore-dangle
	const enhancer = composeEnhancers(
		applyMiddleware(createCustomThunkMiddlware(), ...middlewares)
	);

	const store = createStore(rootReducer, initialState, enhancer);
	return store;
}
