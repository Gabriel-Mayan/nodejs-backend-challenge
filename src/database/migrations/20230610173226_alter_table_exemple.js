exports.up = async function (knex) {
	return knex.schema.alterTable('task', (table) => {
		table.dropColumn('userIdd');
		table.uuid('userId').nullable();
		table.foreign('userId').references('id').inTable('users');
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable('task');
};
