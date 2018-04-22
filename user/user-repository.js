import loadDatabase from '../config/datasource';
const User =  loadDatabase().models.Users;
const Book = loadDatabase().models.Books;

exports.findAll = () => {
	return  User.findAll({include: [{ model: Book }]})
				.then(result => result)
				.catch(err => err);
};

exports.create = (data) => {
	return  User.create(data)
				.then(result => result)
				.catch(err => err);
};

exports.delete = (idUser) => {
	return  User.destroy({where:{id:idUser}})
				.then(result => result)
				.catch(err => err);
};

exports.update = (idUser,data) => {
	return  User.update(data, { where: { id: idUser } })
				.then(result => result)
				.catch(err => err);
};