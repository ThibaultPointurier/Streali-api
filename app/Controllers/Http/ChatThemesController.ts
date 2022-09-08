import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ChatThemesController {
	public async index({ auth }: HttpContextContract) {
		await auth.user!.load('chatThemes')

		return auth.user!.chatThemes
	}

	public show({ auth, params }: HttpContextContract) {
		return auth
			.user!.related('chatThemes')
			.query()
			.preload('user', (q) => q.select('username'))
			.where('id', params.id)
			.firstOrFail()
	}

	public async store({ auth, request }: HttpContextContract) {
		const data = request.only(['title', 'global', 'name', 'message'])

		return auth.user!.related('chatThemes').create(data)
	}

	public async update({ auth, params, request }: HttpContextContract) {
		const data = request.only(['title', 'global', 'name', 'message'])

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
