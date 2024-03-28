import { ErrorMessage, SuccessMessage } from './responseMessages'
import { NoImageColors } from './user.ts'

export type Group = {
	id: number
	name: string
	image: string | null
	color: NoImageColors
	members: number
	chatId: number
	createdAt: string
	updatedAt: string
}

export type GetGroupsResponse =
	| SuccessMessage<'Successfully got groups', { groups: Group[] }>
	| ErrorMessage<'Unauthorized'>
