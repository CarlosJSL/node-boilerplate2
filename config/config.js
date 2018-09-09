export default{
	production:{
		database: '																																																																						',
		username: 'postgres',
		password: '123',
		params: {
			port: '5432',
			host:'0.0.0.0',
			dialect: 'postgres',
			logging: false
		},
	},																															
	development:{
		database: 'testNewBoilerplate',
		username: 'postgres',
		password: '123',
		params: {
			dialect: 'postgres',
			logging: false
		},
	},
	test:{
		database: 'testNewBoilerplate',
		username: 'postgres',
		password: 'postgres',
		params: {
			dialect: 'postgres',
			logging: false
		},
	},
};