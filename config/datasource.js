import Sequelize from 'sequelize';
import config from './config';
import fs  from 'fs' ;
import path  from 'path';

let database = null;

const loadModels = (sequelize) => {
	let models = [];

	fs.readdirSync(__dirname.replace('/config',''))
		.map(file => path.join(__dirname.replace('/config',''), file))
		.filter(path => fs.statSync(path).isDirectory() && !path.includes('node_modules') 
														&& !path.includes('.git') 
														&& !path.includes('config')
														&& !path.includes('test')
		).forEach(folder => {
			fs.readdirSync(folder)
				.map(file => folder + '/' + file)
				.filter(path => path.includes('-model.js'))
				.forEach(path => {
					const model = sequelize.import(path);
					models[model.name] = model;
				});
		});
	return models;
}

export default  () => {
	if(!database){
		const sequelize = new Sequelize(
			config[process.env.NODE_ENV].database,
			config[process.env.NODE_ENV].username,
			config[process.env.NODE_ENV].password,
			config[process.env.NODE_ENV].params
		);

		database = {
			sequelize,
			Sequelize,
			models: {},
		};

		database.models =  loadModels(sequelize);
		
		// relações
		return database;
	} else{
		return database;

	}
};
