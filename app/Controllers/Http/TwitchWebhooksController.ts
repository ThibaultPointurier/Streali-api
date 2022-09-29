import User from 'App/Models/User'
import {
	kTwitchMessageId,
	kTwitchMessageSignature,
	kTwitchMessageTimestamp,
	Twitch,
} from 'App/Services/Twitch'
import { TwitchEventTypeMap } from 'App/Enums/TwitchEventType'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class TwitchWebhooksController {
	public async handleEvents({ request, response }: HttpContextContract) {
		const signatureCheck = Twitch.verifyChallenge(
			request.header(kTwitchMessageId)!,
			request.header(kTwitchMessageSignature)!,
			request.header(kTwitchMessageTimestamp)!,
			request.raw()!
		)

		if (!signatureCheck) {
			return response.badRequest({ status: 400, message: 'Invalid signature' })
		}

		const payload = request.all()

		if (payload.subscription.status === 'webhook_callback_verification_pending') {
			return payload.challenge
		}

		const user = await User.findByOrFail('oauthProviderId', payload.event.broadcaster_user_id)

		if (Object.keys(TwitchEventTypeMap).includes(payload.subscription.type)) {
			await user.related('events').create({
				payload: payload.event,
				type: TwitchEventTypeMap[payload.subscription.type],
			})
		}

		return response.ok({ status: 200, message: 'Event received' })
	}
}
