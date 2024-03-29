import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UsersSchema extends BaseSchema {
	protected tableName = 'users'

	public async up() {
		this.schema.createTable(this.tableName, (table) => {
			table.uuid('id').primary().defaultTo(this.db.rawQuery('uuid_generate_v4()').knexQuery)
			table.timestamp('created_at').notNullable()
			table.timestamp('updated_at').notNullable()
			table.string('twitch_username', 255).notNullable()
			table.string('avatar_url', 255).notNullable()
			table.string('username').notNullable().unique()
			table.string('email', 255).notNullable().unique()
			table.string('oauth_provider_id').notNullable()
			table.string('oauth_provider_name').notNullable()

			table.unique(['oauth_provider_id', 'oauth_provider_name'])
		})
	}

	public async down() {
		this.schema.dropTable(this.tableName)
	}
}
