import { ErrorMessage, SuccessMessage } from './responseMessages'

export type NewMessageBody = {
	text: string
	username: string
	chatId: number
	jwt: string
}

export type MessageType = {
	id: number
	text: string
	senderId: number
	chatId: number
	createdAt: string
	updatedAt: string
}

type SendMessageErrorMessages = 'Unauthorized'
export type SendMessageResponse =
	| SuccessMessage<'Message sent successfully', { message: MessageType }>
	| ErrorMessage<SendMessageErrorMessages>
