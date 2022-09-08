import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
	protected tableName = 'chat_themes'

	public async up() {
		this.schema.createTable(this.tableName, (table) => {
			table.uuid('id').primary().defaultTo(this.db.rawQuery('uuid_generate_v4()').knexQuery)
			table.timestamp('created_at', { useTz: true })
			table.timestamp('updated_at', { useTz: true })
			table.string('title').notNullable()
			table.json('name').notNullable()
			table.json('global').notNullable()
			table.json('message').notNullable()

			table.uuid('user_id').references('id').inTable('users').onDelete('CASCADE')
		})
	}

	public async down() {
		this.schema.dropTable(this.tableName)
	}
}
