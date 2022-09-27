import { CustomMessages, schema } from '@ioc:Adonis/Core/Validator'
import {
	ChatGlobalSchema,
	ChatMessageSchema,
	ChatNameSchema,
} from 'App/Validators/Constants/ChatSchema'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export type ChatData = ChatValidator['schema']['props']

export default class ChatValidator {
	constructor(protected ctx: HttpContextContract) {}

	public schema = schema.create({
		title: schema.string(),
		global: ChatGlobalSchema,
		name: ChatNameSchema,
		message: ChatMessageSchema,
	})

	public messages: CustomMessages = {}
}
