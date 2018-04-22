import bookController from './book-controller';


module.exports = (app) => {
	app.get('/api/book', bookController.getAllBooks);
	app.post('/api/book', bookController.addBook);
	app.delete('/api/book/:id', bookController.excludeBook);
	app.put('/api/book/:id', bookController.updateBook);
};