import { createHmac, timingSafeEqual } from 'node:crypto'
import { request } from 'undici'
import Config from '@ioc:Adonis/Core/Config'

export const kTwitchMessageId = 'Twitch-Eventsub-Message-Id'.toLowerCase()
export const kTwitchMessageSignature = 'Twitch-Eventsub-Message-Signature'.toLowerCase()
export const kTwitchMessageTimestamp = 'Twitch-Eventsub-Message-Timestamp'.toLowerCase()

export class Twitch {
	constructor(private oauthProviderId: string) {}

	public static verifyChallenge(
		messageId: string,
		messageSignature: string,
		messageTimestamp: string,
		body: string
	): boolean {
		const message = messageId + messageTimestamp + body
		const signature =
			'sha256=' +
			createHmac('sha256', Config.get('twitch.eventsubSecret')).update(message).digest('hex')

		return timingSafeEqual(Buffer.from(signature), Buffer.from(messageSignature))
	}

	public static send(url: string, body: Record<string, unknown>) {
		return request(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${Config.get('twitch.appToken')}`,
				'Client-Id': Config.get('twitch.clientId'),
			},
			body: JSON.stringify(body),
		})
	}

	public async setupWebhooks() {
		const url = 'https://api.twitch.tv/helix/eventsub/subscriptions'
		const bodies = this.computeBodies()

		return Promise.allSettled(Object.values(bodies).map((body) => Twitch.send(url, body)))
	}

	private computeBodies() {
		return {
			follow: this.computeBody('channel.follow'),
			subscribe: this.computeBody('channel.subscribe'),
			cheer: this.computeBody('channel.cheer'),
			subscriptionGift: this.computeBody('channel.subscription.gift'),
			raid: this.computeBody('channel.raid', 'to_broadcaster_user_id'),
			hypeTrainBegin: this.computeBody('channel.hype_train.begin'),
			hypeTrainProgress: this.computeBody('channel.hype_train.progress'),
			hypeTrainEnd: this.computeBody('channel.hype_train.end'),
			goalBegin: this.computeBody('channel.goal.begin'),
			goalEnd: this.computeBody('channel.goal.end'),
		}
	}

	private computeBody(type: string, conditionLabel = 'broadcaster_user_id') {
		return {
			type,
			version: '1',
			condition: {
				[conditionLabel]: this.oauthProviderId,
			},
			transport: {
				method: 'webhook',
				callback: Config.get('twitch.eventsubCallbackUrl'),
				secret: Config.get('twitch.eventsubSecret'),
			},
		}
	}
}
