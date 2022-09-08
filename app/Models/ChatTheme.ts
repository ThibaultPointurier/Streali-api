import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'

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
	public global: Global

	@column()
	public name: NameChat

	@column()
	public message: Message

	@column()
	public userId: string

	@belongsTo(() => User)
	public user: BelongsTo<typeof User>
}

export type Global = {
	spaceBetweenMessages: number
	align: 'left' | 'center' | 'right'
	layout: 'stack' | 'inline'
}

export type NameChat = {
	fullWidth: boolean
	fontFamily: string
	fontSize: string
	textAlign: 'left' | 'center' | 'right'
	textColor: string
	backgroundColor: string
	borderColor: string
	borderWidth: number
	padding: {
		top: number
		bottom: number
		left: number
		right: number
	}
	margin: {
		top: number
		bottom: number
		left: number
		right: number
	}
	borderRadius: {
		topLeft: number
		topRight: number
		bottomRight: number
		bottomLeft: number
	}
}

export type Message = {
	fullWidth: boolean
	fontFamily: string
	fontSize: string
	textAlign: 'left' | 'center' | 'right'
	textColor: string
	backgroundColor: string
	borderColor: string
	borderWidth: number
	padding: {
		top: number
		bottom: number
		left: number
		right: number
	}
	margin: {
		top: number
		bottom: number
		left: number
		right: number
	}
	borderRadius: {
		topLeft: number
		topRight: number
		bottomRight: number
		bottomLeft: number
	}
}
