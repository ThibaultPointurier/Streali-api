/**
 * Contract source: https://git.io/JOdiQ
 *
 * Feel free to let us know via PR, if you find something broken in this contract
 * file.
 */

declare module '@ioc:Adonis/Addons/Ally' {
	import { TwitchDriver, TwitchDriverConfig } from 'adonis-ally-twitch/build/src/TwitchDriver'

	interface SocialProviders {
		twitch: {
			config: TwitchDriverConfig
			implementation: TwitchDriver
		}
	}
}
