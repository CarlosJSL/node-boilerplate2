export const responseErrorHandler = (err, req, res,next) =>{
	console.error(err);
	res.status(err.errorCode).send({name:err.name,message:err.message});
};
