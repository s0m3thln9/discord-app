import { ErrorMessage, SuccessMessage } from './responseMessages'
import { NoImageColors } from './user.ts'

export type Group = {
	id: string
	name: string
	image: string | null
	color: NoImageColors
	createdAt: Date
	updatedAt: Date
	members: number
}

export type GetGroupsResponse =
	| SuccessMessage<'Successfully got groups', { groups: Group[] }>
	| ErrorMessage<'Unauthorized'>
