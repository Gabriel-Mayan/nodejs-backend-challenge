exports.up = async function (knex) {
	return knex.schema.renameTable('task', 'tasks');
};

exports.down = function (knex) {
	return knex.schema.dropTable('task');
};
