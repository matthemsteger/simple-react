import React from 'react';
import style from './fakePage.scss';

export default function FakePage(props) {
	return (
		<section className={style.section}>
			<div className={style.container}>
				<div className={style.heading}>
					<h1 className={style.title}>{props.title}</h1>
					<h2 className={style.subtitle}>{props.subtitle}</h2>
				</div>
				<hr />
				<div className={style.content}>
					{props.children}
				</div>
			</div>
		</section>
	);
}

FakePage.propTypes = {
	children: React.PropTypes.node,
	title: React.PropTypes.string.isRequired,
	subtitle: React.PropTypes.string.isRequired
};

FakePage.defaultProps = {
	children: undefined
};
