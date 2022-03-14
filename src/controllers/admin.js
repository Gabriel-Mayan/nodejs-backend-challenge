const { getInfoPaginated, getOverduePaginated } = require('../helpers/handleKnex');

const getAllTasks = async (request, response) => {
	try {
		let task = '';
		const conditions = { deletedAt: null }
		const { page, pageSize, filterOverdue } = request.query;

		if (filterOverdue === 'true') {
			task = await getOverduePaginated('task', conditions, page, pageSize);
		}
		else {
			task = await getInfoPaginated('task', conditions, page, pageSize);
		}

		return response.status(200).json(task);
	} catch (error) {
		return response.status(400).json('Erro ao listar as tarefas')
	}
}

module.exports = { getAllTasks };