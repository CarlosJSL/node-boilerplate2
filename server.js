import { normalizePort, onError, onListening } from './utils';
import loadDatabase from './config/datasource';
import http from 'http';
import app from './app';

const server  = http.createServer(app);
const port = normalizePort(process.env.port || 3000);
const db = loadDatabase();

db.sequelize.sync()
	.then(() =>{

		db.models.Users.destroy({ where: {} });
		db.models.Books.destroy({ where: {} });

		db.models.Books.create({  title: 'DBZ' ,user_id:1});
		db.models.Books.create({  title: 'DBS' ,user_id:1});

		db.models.Users.create({ id: 1, name: 'carlos', age: 22, gender: 'M'});

		server.listen(port);
		server.on('error',onError(server));
		server.on('listening', onListening(server));
	});
