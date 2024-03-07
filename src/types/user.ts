import { ErrorMessage, SuccessMessage } from './Messages.ts'

type PrismaUser = {
	id: number
	email: string
	displayName: string
	username: string
	birthdayYear: number
	birthdayMonth: string
	birthdayDay: number
	password: string
	userImage: string | null
	color: 'orange' | 'red' | 'green' | 'blue' | 'yellow'
	textStatus: string
	onlineStatus: 'offline' | 'online' | 'idle' | 'doNotDisturb'
	phoneNumber: string
	createdAt: string
	updatedAt: string
}

export type RegisterUserData = {
	email: string
	displayName: string
	username: string
	password: number
	birthdayYear: number
	birthdayMonth: string
	birthdayDay: number
}

export type User = Omit<PrismaUser, 'password'>

export type PublicUser = Omit<User, 'email' | 'updatedAt'>

type UpdateUserErrorMessages = 'Unauthorized'

type UpdateUsernameErrorMessages = 'Unauthorized' | 'Wrong password'

export type UpdateDisplayNameResponse =
	| SuccessMessage<'DisplayName successfully updated', void>
	| ErrorMessage<UpdateUserErrorMessages>

export type UpdateUsernameResponse =
	| SuccessMessage<'Username successfully updated', void>
	| ErrorMessage<UpdateUsernameErrorMessages>
