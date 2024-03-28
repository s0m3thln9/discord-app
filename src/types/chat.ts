import { MessageType } from './messages.ts'
import { ErrorMessage, SuccessMessage } from './responseMessages.ts'
import { UserWithoutPassword } from './user.ts'

export type ChatPrisma = {
	id: number
	messages: MessageType[]
	createdAt: string
	updatedAt: string
	participants: UserWithoutPassword[]
}

export type getChatsResponse =
	| SuccessMessage<'Successfully got chats', { chats: (ChatPrisma & { messages: MessageType[] })[] }>
	| ErrorMessage<'Unauthorized'>
