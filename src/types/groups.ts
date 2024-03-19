import { ErrorMessage, SuccessMessage } from './responseMessages.ts'

export type Group = {
	id: number
	name: string
	image: string | null
	color: 'orange' | 'red' | 'green' | 'blue' | 'yellow'
	createdAt: Date
	updatedAt: Date
	members: number
}

export type GetGroupsResponse =
	| SuccessMessage<'Successfully got groups', { groups: Group[] }>
	| ErrorMessage<'Unauthorized'>
