import React from 'react';
import GlobalNavigation from './globalNavigation';
import style from './app.scss';

export default function App(props) {
	return (
		<div className={style.container}>
			<GlobalNavigation firstLevelRoutes={props.route.childRoutes} />
			{props.children}
		</div>
	);
}

App.propTypes = {
	children: React.PropTypes.node,
	route: React.PropTypes.shape({
		childRoutes: React.PropTypes.array
	}).isRequired
};

App.defaultProps = {
	children: undefined
};
