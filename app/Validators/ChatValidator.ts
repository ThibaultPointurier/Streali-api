import { CustomMessages, schema } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import {
	ChatGlobalSchema,
	ChatMessageSchema,
	ChatNameSchema,
} from 'App/Validators/Constants/ChatSchema'

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
