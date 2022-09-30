import ChatValidator from 'App/Validators/ChatValidator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ChatTheme from 'App/Models/ChatTheme'

export default class ChatThemesController {
	public async index({ auth }: HttpContextContract) {
		await auth.user!.load('chatThemes')

		return auth.user!.chatThemes
	}

	public async show({ params }: HttpContextContract) {
		return await ChatTheme.query().where('id', params.id).preload('user').firstOrFail()
	}

	public async store({ auth, request }: HttpContextContract) {
		const data = await request.validate(ChatValidator)

		return auth.user!.related('chatThemes').create(data)
	}

	public async update({ auth, params, request }: HttpContextContract) {
		const data = await request.validate(ChatValidator)

		const chatTheme = await auth
			.user!.related('chatThemes')
			.query()
			.where('id', params.id)
			.firstOrFail()

		await chatTheme.merge(data).save()

		return chatTheme
	}

	public async destroy({ auth, params, response }: HttpContextContract) {
		const chatTheme = await auth
			.user!.related('chatThemes')
			.query()
			.where('id', params.id)
			.firstOrFail()

		await chatTheme!.delete()

		return response.noContent()
	}
}
