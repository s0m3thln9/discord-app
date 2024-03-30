import { MessageType } from './messages.ts'
import { ErrorMessage, SuccessMessage } from './responseMessages.ts'
import { UserShowableData } from './user.ts'

export type ChatPrisma = {
	id: number
	messages: MessageType[]
	createdAt: string
	updatedAt: string
	participants: UserShowableData[]
}

export type getChatsResponse =
	| SuccessMessage<'Successfully got chats', { chats: ChatPrisma[] }>
	| ErrorMessage<'Unauthorized'>
