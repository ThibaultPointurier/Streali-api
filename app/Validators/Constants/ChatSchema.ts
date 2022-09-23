import { schema } from '@ioc:Adonis/Core/Validator'

export const ChatOrderSchema = schema.object().members({
	id: schema.string(),
	name: schema.string(),
})

export const ChatShadowSchema = schema.object().members({
	shadowOffsetX: schema.number(),
	shadowOffsetY: schema.number(),
	shadowBlur: schema.number(),
	shadowColor: schema.string(),
})

export const ChatBorderSettingsSchema = schema.object().members({
	color: schema.string(),
	width: schema.number(),
	style: schema.string(),
})

export const ChatBorderSchema = schema.object().members({
	top: ChatBorderSettingsSchema,
	right: ChatBorderSettingsSchema,
	bottom: ChatBorderSettingsSchema,
	left: ChatBorderSettingsSchema,
})

export const ChatMarginSchema = schema.object().members({
	top: schema.number(),
	right: schema.number(),
	bottom: schema.number(),
	left: schema.number(),
})

export const ChatRadiusSchema = schema.object().members({
	top_left: schema.number(),
	top_right: schema.number(),
	bottom_right: schema.number(),
	bottom_left: schema.number(),
})

export const ChatBadgeSchema = schema.object().members({
	enabled: schema.boolean(),
	position: schema.enum(['left', 'right']),
	style: schema.enum(['twitch']),
	size: schema.number(),
	space: schema.number(),
	space_between: schema.number(),
})

export const ChatTextSchema = schema.object().members({
	fontFamily: schema.string(),
	fontSize: schema.number(),
	fontWeight: schema.string(),
	color: schema.string(),
	textAlign: schema.enum(['left', 'center', 'right']),
	textDecoration: schema.enum(['none', 'underline', 'line-through']),
	fontStyle: schema.string(),
	letterSpacing: schema.number(),
	lineHeight: schema.number(),
	textShadow: ChatShadowSchema,
})

export const ChatGlobalSchema = schema.object().members({
	space_between_messages: schema.number(),
	alignment: schema.enum(['left', 'center', 'right']),
	layout: schema.enum(['stack', 'inline']),
	order: schema.array().members(ChatOrderSchema),
})

export const ChatNameSchema = schema.object().members({
	text: ChatTextSchema,
	background: schema.string(),
	shadow: ChatShadowSchema,
	border: ChatBorderSchema,
	margin: ChatMarginSchema,
	padding: ChatMarginSchema,
	radius: ChatRadiusSchema,
	badges: ChatBadgeSchema,
})

export const ChatMessageSchema = schema.object().members({
	text: ChatTextSchema,
	background: schema.string(),
	shadow: ChatShadowSchema,
	border: ChatBorderSchema,
	margin: ChatMarginSchema,
	padding: ChatMarginSchema,
	radius: ChatRadiusSchema,
})
