export const responseErrorHandler = (err, req, res) =>{
	console.error(err);
	res.status(err.errorCode).send({name:err.name,message:err.message});
};
