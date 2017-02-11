import 'babel-polyfill';
import Koa from 'koa';
import _debug from 'debug';
import serve from 'koa-static';
import path from 'path';

const debug = _debug('simple:server');

const server = new Koa();

server.use(async (ctx, next) => {
	const start = new Date();
	await next();
	const ms = new Date() - start;
	debug('%s %s - %dms', ctx.method, ctx.url, ms);
});

server.use(serve(path.resolve(`${__dirname}/../public`)));

const port = process.env.PORT || 3000;
debug('starting server on port %s', port);
server.listen(port);
