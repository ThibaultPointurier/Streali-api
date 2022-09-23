export type ChatGlobal = {
	space_between_messages: number
	alignment: string
	layout: string
	order: ChatOrder
}

export type ChatName = {
	text: ChatText
	background: string
	shadow: ChatShadow
	border: ChatBorder
	margin: ChatMargin
	padding: ChatMargin
	radius: ChatBorderRadius
	badges: ChatBadges
}

export type ChatMessage = {
	text: ChatText
	background: string
	shadow: ChatShadow
	border: ChatBorder
	margin: ChatMargin
	padding: ChatMargin
	radius: ChatBorderRadius
}

export type ChatOrder = Array<{ id: string; name: string }>

export type ChatText = {
	fontFamily: string
	fontSize: number
	fontWeight: string
	color: string
	textAlign: string
	textDecoration: string
	fontStyle: string
	letterSpacing: number
	lineHeight: number
	textShadow: ChatTextShadow
}

export type ChatTextShadow = {
	shadowOffsetX: number
	shadowOffsetY: number
	shadowBlur: number
	shadowColor: string
}

export type ChatShadow = {
	shadowOffsetX: number
	shadowOffsetY: number
	shadowBlur: number
	shadowColor: string
}

export type ChatBorder = {
	top: ChatBorderSettings
	right: ChatBorderSettings
	bottom: ChatBorderSettings
	left: ChatBorderSettings
}

export type ChatBorderSettings = {
	color: string
	width: number
	style: string
}

export type ChatMargin = {
	top: number
	right: number
	bottom: number
	left: number
}

export type ChatBorderRadius = {
	top_left: number
	top_right: number
	bottom_right: number
	bottom_left: number
}

export type ChatBadges = {
	enabled: boolean
	position: string
	style: string
	size: number
	space: number
	space_between: number
}
