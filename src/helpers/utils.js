const { compareDate } = require('./handleDate');

const clearUserObject = (user) => {
	delete user.createdAt;
	delete user.updatedAt;
	delete user.deletedAt;
	delete user.password;

	return user;
};

const returnTaskStatus = (task) => {
	const test = compareDate(new Date(), task.deadline);

	if (task.completedAt) {
		return 'Tarefa completa'
	}
	if (!test) {
		return 'Tarefa atrasada'
	}
	return 'Tarefa em progresso'
};

module.exports = { clearUserObject, returnTaskStatus };
