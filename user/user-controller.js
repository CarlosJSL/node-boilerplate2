import userRepository from './user-repository';

exports.getAllUsers =  async  (req, res) =>  {
	try {
		const result =  await userRepository.findAll();
		res.status(200).send(result);
	} catch (err) {
		res.status(500).send({message: 'Ocorreu um erro durante o processamento da requisição'});
		throw(err);
	}
}; 

exports.addUser =  async  (req, res) =>  {
	try {
		const result =  await userRepository.create(req.body);
		res.status(201).send(result);
	} catch (err) {
		res.status(500).send({message: 'Ocorreu um erro durante o processamento da requisição'});
		throw(err);
	}
}; 

exports.excludeUser =  async  (req, res) =>  {
	try {
		const result =  await userRepository.delete(req.params.id);
		res.status(200).send({message: "O usuário foi excluído com sucesso!"});
	} catch (err) {
		res.status(500).send({message: 'Ocorreu um erro durante o processamento da requisição'});
		throw(err);
	}
}; 

exports.updateUser =  async  (req, res) =>  {
	try {
		const result =  await userRepository.update(req.params.id,req.body);
		res.status(201).send({message: "O usuário foi atualizado com sucesso!"});
	} catch (err) {
		res.status(500).send({message: 'Ocorreu um erro durante o processamento da requisição'});
		throw(err);
	}
}; 