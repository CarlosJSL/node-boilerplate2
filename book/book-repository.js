import loadDatabase from '../config/datasource';
const Book =  loadDatabase().models.Books;

exports.findAll = () => {
	return  Book.findAll({})
				.then(result => result)
				.catch(err => err);
};

exports.create = (data) => {
	return  Book.create(data)
				.then(result => result)
				.catch(err => err);
};

exports.delete = (idBook) => {
	return  Book.destroy({where:{id:idBook}})
				.then(result => result)
				.catch(err => err);
};

exports.update = (idBook,data) => {
	return  Book.update(data, { where: { id: idBook } })
				.then(result => result)
				.catch(err => err);
};