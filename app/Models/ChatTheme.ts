import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'
import { ChatData } from 'App/Validators/ChatValidator'

export default class ChatTheme extends BaseModel {
	@column({ isPrimary: true })
	public id: string

	@column.dateTime({ autoCreate: true })
	public createdAt: DateTime

	@column.dateTime({ autoCreate: true, autoUpdate: true })
	public updatedAt: DateTime

	@column()
	public title: string

	@column()
	public global: ChatData['global']

	@column()
	public name: ChatData['name']

	@column()
	public message: ChatData['message']

	@column()
	public userId: string

	@belongsTo(() => User)
	public user: BelongsTo<typeof User>
}
