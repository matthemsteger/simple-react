import React, {Component} from 'react';
import {Link} from 'react-router';
import style from './globalNavigation.scss';

export default class GlobalNavigation extends Component {
	static propTypes = {
		firstLevelRoutes: React.PropTypes.arrayOf(React.PropTypes.shape({
			path: React.PropTypes.string.isRequired,
			navTitle: React.PropTypes.string.isRequired
		}))
	}

	static defaultProps = {
		firstLevelRoutes: []
	}

	constructor(props) {
		super(props);

		this.state = {
			isNavActive: false
		};
	}

	toggleNav = () => {
		this.setState({isNavActive: !this.state.isNavActive});
	}

	render() {
		const isActiveStyle = this.state.isNavActive ? style['is-active'] : '';
		return (
			<nav className={style.nav}>
				<span className={`${style['nav-toggle']} ${isActiveStyle}`} onClick={this.toggleNav}>
					<span />
					<span />
					<span />
				</span>
				<div className={`${style['nav-right']} ${style['nav-menu']} ${isActiveStyle}`}>
					<Link to="/" className={`${style['nav-item']}`}>
						Home
					</Link>
					{this.props.firstLevelRoutes.map((route) => {
						if (!route.navTitle) return null;

						return (
							<Link key={route.path} to={route.path} className={style['nav-item']}>
								{route.navTitle}
							</Link>
						);
					})}
				</div>
			</nav>
		);
	}
}
