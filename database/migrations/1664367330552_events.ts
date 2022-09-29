import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
	protected tableName = 'events'

	public async up() {
		this.schema.createTable(this.tableName, (table) => {
			table.uuid('id').primary().defaultTo(this.db.rawQuery('uuid_generate_v4()').knexQuery)
			table.timestamp('created_at').notNullable()
			table.timestamp('updated_at').notNullable()
			table.integer('type')
			table.json('payload').notNullable()

			table.uuid('user_id').references('id').inTable('users').onDelete('CASCADE')
		})
	}

	public async down() {
		this.schema.dropTable(this.tableName)
	}
}
