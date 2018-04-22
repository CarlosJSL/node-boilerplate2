import userController from './user-controller';


module.exports = (app) => {
	app.get('/api/user', userController.getAllUsers);
	app.post('/api/user', userController.addUser);
	app.delete('/api/user/:id', userController.excludeUser);
	app.put('/api/user/:id', userController.updateUser);
};