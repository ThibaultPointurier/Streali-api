/**
 * Config source: https://git.io/JOdi5
 *
 * Feel free to let us know via PR, if you find something broken in this config
 * file.
 */

import Env from '@ioc:Adonis/Core/Env'
import { AllyConfig } from '@ioc:Adonis/Addons/Ally'

/*
|--------------------------------------------------------------------------
| Ally Config
|--------------------------------------------------------------------------
|
| The `AllyConfig` relies on the `SocialProviders` interface which is
| defined inside `contracts/ally.ts` file.
|
*/
const allyConfig: AllyConfig = {
	/*
  |--------------------------------------------------------------------------
  | Twitch driver
  |--------------------------------------------------------------------------
  */
	twitch: {
		driver: 'TwitchDriver',
		clientId: Env.get('TWITCH_CLIENT_ID'),
		clientSecret: Env.get('TWITCH_CLIENT_SECRET'),
		callbackUrl: 'http://localhost:3333/oauth/twitch/callback',
		scopes: [
			'bits:read',
			'channel:read:charity',
			'channel:read:polls',
			'channel:read:goals',
			'channel:read:hype_train',
			'channel:read:predictions',
			'channel:read:redemptions',
			'channel:read:subscriptions',
			'channel:read:vips',
			'user:read:email',
			'user:read:follows',
			'user:read:subscriptions',
		],
	},
}

export default allyConfig
