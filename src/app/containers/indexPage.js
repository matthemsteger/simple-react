import React from 'react';
import style from './fakePage.scss';
import imageUrl from './style_typography_roboto1.png';

export default function IndexPage(props) {
	return (
		<section className={style.section}>
			<div className={style.container}>
				<div className={style.heading}>
					<h1 className={style.title}>{props.title}</h1>
					<h2 className={style.subtitle}>{props.subtitle}</h2>
				</div>
				<hr />
				<div className={style.content}>
					<img src={imageUrl} alt="words" className={style['main-image']} />
				</div>
			</div>
		</section>
	);
}

IndexPage.propTypes = {
	title: React.PropTypes.string.isRequired,
	subtitle: React.PropTypes.string.isRequired
};
