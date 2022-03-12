const knex = require('../services/knex');

const insertInfo = async (table, values) => await knex(table).insert(values);
const findOneBy = async (table, conditons) => await knex(table).where(conditons).first();
const getInfo = async (table, conditons) => await knex(table).where(conditons);

const updateInfo = async (table, conditions, values) => {
	values.updatedAt = new Date();
	await knex(table).where(conditions).update(values);
};

const getInfoPaginated = async (table, conditons, page, pageSize) => {
	page = page | 1;
	pageSize = pageSize | 12;

	const info = await knex(table).where(conditons).limit(pageSize).offset((page - 1) * pageSize);
	return info;
};

module.exports = { insertInfo, findOneBy, updateInfo, getInfoPaginated, getInfo }
