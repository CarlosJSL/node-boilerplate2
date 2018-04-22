import bookRepository from './book-repository';

exports.getAllBooks =  async  (req, res) =>  {
	try {
		const result =  await bookRepository.findAll();
		res.status(200).send(result);
	} catch (err) {
		res.status(500).send({message: 'Ocorreu um erro durante o processamento da requisição'});
		throw(err);
	}
}; 

exports.addBook =  async  (req, res) =>  {
	try {
		const result =  await bookRepository.create(req.body);
		res.status(201).send(result);
	} catch (err) {
		res.status(500).send({message: 'Ocorreu um erro durante o processamento da requisição'});
		throw(err);
	}
}; 

exports.excludeBook =  async  (req, res) =>  {
	try {
		const result =  await bookRepository.delete(req.params.id);
		res.status(200).send({message: "O livro foi excluído com sucesso!"});
	} catch (err) {
		res.status(500).send({message: 'Ocorreu um erro durante o processamento da requisição'});
		throw(err);
	}
}; 

exports.updateBook =  async  (req, res) =>  {
	try {
		const result =  await bookRepository.update(req.params.id,req.body);
		res.status(201).send({message: "O livro foi atualizado com sucesso!"});
	} catch (err) {
		res.status(500).send({message: 'Ocorreu um erro durante o processamento da requisição'});
		throw(err);
	}
}; 