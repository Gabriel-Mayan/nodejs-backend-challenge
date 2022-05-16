const { getTasksPaginated, getOverduePaginated } = require('../helpers/handleKnex');

const getAllTasks = async (request, response) => {
	try {
		let task = '';
		const { page, pageSize, filterOverdue } = request.query;

		if (filterOverdue === 'true') {
			task = await getTasksOverduePaginated('task', page, pageSize);
		}
		else {
			task = await getTasksPaginated(page, pageSize);
		}

		return response.status(200).json(task);
	} catch (error) {
		return response.status(400).json(error.message)
	}
}

module.exports = { getAllTasks };