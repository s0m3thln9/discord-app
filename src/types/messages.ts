import { ErrorMessage, SuccessMessage } from './responseMessages'

export type NewMessageBody = {
	text: string
	username: string
	receiverId: number
	jwt: string
}

export type Message = {
	id: number
	text: string
	senderId: number
	receiverId: number
	createdAt: Date
	updatedAt: Date
}

type SendMessageErrorMessages = 'Unauthorized'
export type SendMessageResponse =
	| SuccessMessage<'Message sent successfully', { message: Message }>
	| ErrorMessage<SendMessageErrorMessages>

type GetMessagesErrorMessages = 'Unauthorized'
export type GetMessagesResponse =
	| SuccessMessage<'Successfully got message', { messages: Message[] }>
	| ErrorMessage<GetMessagesErrorMessages>
