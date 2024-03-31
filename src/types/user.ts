import { ErrorMessage, SuccessMessage } from './responseMessages'

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
	color: NoImageColors
	textStatus: string
	onlineStatus: 'offline' | 'online' | 'idle' | 'doNotDisturb'
	phoneCode: number | null
	phoneNumber: string | null
	createdAt: string
	updatedAt: string
}

export type RegisterCredentials = {
	email: string
	displayName: string
	username: string
	password: number
	birthdayYear: number
	birthdayMonth: string
	birthdayDay: number
}

export type User = Omit<PrismaUser, 'password'>

export type UserWithoutPassword = Omit<User, 'password'>

export type UserShowableData = Omit<PrismaUser, 'email' | 'password' | 'phoneNumber' | 'updatedAt'>

type UpdateUserErrorMessages = 'Unauthorized'

type UpdateUsernameErrorMessages = 'Unauthorized' | 'Wrong password' | 'Password is required'

type UpdatePhoneNumberErrorMessages = 'Unauthorized' | 'Error updating phone number'

type UploadUserImageErrorMessages = 'Unauthorized' | 'Error parsing image' | 'Failed to update user'

export type UpdateDisplayNameResponse =
	| SuccessMessage<'DisplayName successfully updated', { user: UserWithoutPassword }>
	| ErrorMessage<UpdateUserErrorMessages>

export type UpdateUsernameResponse =
	| SuccessMessage<'Username successfully updated', { user: UserWithoutPassword }>
	| ErrorMessage<UpdateUsernameErrorMessages>

export type UpdatePhoneNumberResponse =
	| SuccessMessage<'Successfully updated phone number', { user: UserWithoutPassword }>
	| ErrorMessage<UpdatePhoneNumberErrorMessages>

export type GetUserWithIdResponse =
	| SuccessMessage<'Successfully got user', { user: UserShowableData }>
	| ErrorMessage<'Error getting user'>

export type NoImageColors = 'orange' | 'red' | 'green' | 'blue' | 'yellow' | 'purple' | 'lime' | 'pink' | 'crimson'

export type UploadUserImageResponse =
	| SuccessMessage<'Successfully uploaded', { user: UserWithoutPassword }>
	| ErrorMessage<UploadUserImageErrorMessages>
