import React from 'react';
import {Route, IndexRoute} from 'react-router';
import _ from 'lodash';
import Chance from 'chance';
import App from './containers/app';
import FakePage from './containers/fakePage';
import IndexPage from './containers/indexPage';

function fakePageFactory({title, subtitle, paragraphs = []} = {}) {
	return function FakePageWrapper() {
		return (
			<FakePage title={title} subtitle={subtitle}>
				{paragraphs.map((paragraph, idx) => {
					const key = idx;
					return (
						<p key={key}>
							{paragraph}
						</p>
					);
				})}
			</FakePage>
		);
	};
}

const fakePages = _.times(5, (idx) => {
	const chance = new Chance(idx);
	return {
		path: `/fake${idx}`,
		title: `Fake Page #${idx}`,
		subtitle: chance.sentence(),
		paragraphs: _.times(chance.integer({min: 2, max: 5}), () => chance.paragraph())
	};
});

const routes = (
	<Route path="/" component={App}>
		<IndexRoute
			component={() =>
				(
					<IndexPage title="Simple React App" subtitle="A simple React App that uses react, redux, webpack, babel, bulma and css modules." />
				)
			}
		/>

		{fakePages.map((fakePage) => {
			const {title, subtitle, path, paragraphs} = fakePage;
			const navTitle = _.upperFirst(_.trimStart(path, '/'));
			const GeneratedFakePage = fakePageFactory({title, subtitle, paragraphs});

			return (
				<Route path={path} component={GeneratedFakePage} navTitle={navTitle} key={path} />
			);
		})}
	</Route>
);

export default routes;
