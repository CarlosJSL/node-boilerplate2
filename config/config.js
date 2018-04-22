export default{
	production:{
		database: 'testNewBoilerplate',
		username: 'admin',
		password: '123',
		params: {
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