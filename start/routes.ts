import Route from '@ioc:Adonis/Core/Route'

Route.get('/', () => ({ uptime: process.uptime() }))

Route.get('/me', 'AuthController.me')
Route.get('/auth/check', 'AuthController.check')
Route.post('/auth/logout', 'AuthController.logout')
Route.get('/oauth/:provider/redirect', 'AuthController.redirect').where('provider', /twitch/)
Route.get('/oauth/:provider/callback', 'AuthController.callback').where('provider', /twitch/)

Route.group(() => {
	Route.get('/chat-themes', 'ChatThemesController.index')
	Route.post('/chat-themes', 'ChatThemesController.store')
	Route.get('/chat-themes/:id', 'ChatThemesController.show')
	Route.put('/chat-themes/:id', 'ChatThemesController.update')
	Route.delete('/chat-themes/:id', 'ChatThemesController.destroy')
}).middleware('auth')
