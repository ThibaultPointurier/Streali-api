import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'
import TwitchEventType from 'App/Enums/TwitchEventType'

export default class Event extends BaseModel {
	@column({ isPrimary: true })
	public id: string

	@column.dateTime({ autoCreate: true })
	public createdAt: DateTime

	@column.dateTime({ autoCreate: true, autoUpdate: true })
	public updatedAt: DateTime

	@column()
	public type: TwitchEventType

	@column()
	public payload: Record<string, unknown>

	@column()
	public userId: string

	@belongsTo(() => User)
	public user: BelongsTo<typeof User>
}
