const knex = require('../services/knex');

const insertInfo = async (table, values) => {
	const insertedInfo = await knex(table).insert(values).returning('*');
	return insertedInfo[0];
};

const findOneBy = async (table, conditons) => {
	const info = await knex(table).where(conditons).first();
	return info;
};

const getInfoPaginated = async (table, conditons, page, pageSize) => {
	page = page || 1;
	pageSize = pageSize || 12;

	const info = await knex(table).where(conditons).limit(pageSize).offset((page - 1) * pageSize);
	return info;
};

module.exports = { insertInfo, findOneBy, getInfoPaginated }
