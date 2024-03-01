import { ErrorMessage, SuccessMessage } from './Messages.ts'
import { PublicUser } from './AuthProvider.ts'

type GetFriendsErrorMessages = 'Unauthorized'

export type GetFriendsResponse =
	| ErrorMessage<GetFriendsErrorMessages>
	| SuccessMessage<'Successfully got friends', { friends: PublicUser[] }>
