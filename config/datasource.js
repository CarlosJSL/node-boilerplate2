import Sequelize from 'sequelize';
import fs  from 'fs' ;
import path  from 'path';

let database = null;

const loadModels = (sequelize) => {
	let models = [];

	fs.readdirSync(__dirname.replace('/config','/src'))
		.map(file => path.join(__dirname.replace('/config','/src'), file))
		.filter(path => fs.statSync(path).isDirectory() && !path.includes('test')
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
		const sequelize = new Sequelize('postgres://postgres:123@db/testNewBoilerplate');

		database = {
			sequelize,
			Sequelize,
			models: {},
		};

		database.models =  loadModels(sequelize);
		database.models.Users.hasMany(database.models.Books,{foreignKey: 'user_id',constraints: false});

		// relações
		return database;
	} else{
		return database;

	}
};
