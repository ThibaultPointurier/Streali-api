import Env from '@ioc:Adonis/Core/Env'

const twitchConfig = {
	clientId: Env.get('TWITCH_CLIENT_ID'),
	clientSecret: Env.get('TWITCH_CLIENT_SECRET'),
	appToken: Env.get('TWITCH_APP_TOKEN'),
	eventsubSecret: Env.get('TWITCH_EVENTSUB_SECRET'),
	eventsubCallbackUrl: Env.get('TWITCH_EVENTSUB_CALLBACK_URL'),
}

export default twitchConfig
