export default(sequelize, DataType) => {
	const User = sequelize.define('Users', {
		id: {
			type: DataType.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: DataType.STRING,
			allowNull: false,
		},
		age: {
			type: DataType.INTEGER,
			allowNull: false,
		},
		gender: {
			type: DataType.STRING(1),
			allowNull: false,
		},
	});

	return User;
};
  