import { ErrorMessage, SuccessMessage } from './responseMessages'

export type NewMessageBody = {
	text: string
	username: string
	receiverId?: number
	groupId?: string
	jwt: string
}

export type MessageType = {
	id: number
	text: string
	senderId: number
	receiverId?: number
	createdAt: Date
	updatedAt: Date
}

type SendMessageErrorMessages = 'Unauthorized'
export type SendMessageResponse =
	| SuccessMessage<'Message sent successfully', { message: MessageType }>
	| ErrorMessage<SendMessageErrorMessages>

type GetMessagesErrorMessages = 'Unauthorized'
export type GetMessagesResponse =
	| SuccessMessage<'Successfully got message', { messages: MessageType[] }>
	| ErrorMessage<GetMessagesErrorMessages>
