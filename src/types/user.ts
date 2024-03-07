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

export type UpdateUserErrorMessages = 'Unauthorized'

export type UpdateUserData = {
	email?: string
	displayName?: string
	username?: string
	birthdayYear?: number
	birthdayMonth?: string
	birthdayDay?: number
	password?: string
	userImage?: string | null
	color?: 'orange' | 'red' | 'green' | 'blue' | 'yellow'
	textStatus?: string
	onlineStatus?: 'offline' | 'online' | 'idle' | 'doNotDisturb'
	phoneNumber?: string
	updatedAt?: string
}

export type UpdateUserResponse =
	| SuccessMessage<'Data successfully updated', void>
	| ErrorMessage<UpdateUserErrorMessages>
