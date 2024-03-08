import { ErrorMessage, SuccessMessage } from './Messages.ts'
import { PublicUser, UserShowableData } from './user.ts'

export type FriendRequest = {
	id: number
	status: 'pending' | 'blocked'
	fromId: number
	toId: number
	createdAt: Date
}

type GetFriendsErrorMessages = 'Unauthorized'

export type GetFriendsResponse =
	| ErrorMessage<GetFriendsErrorMessages>
	| SuccessMessage<'Successfully got friends', { friends: PublicUser[] }>

type GetFriendsRequestsErrorMessages = 'Unauthorized'

export type GetFriendRequestsResponse =
	| SuccessMessage<'Successfully got friend requests', { friendRequestsWithUsers: FriendRequestsWithUsers[] }>
	| ErrorMessage<GetFriendsRequestsErrorMessages>

export type FriendRequestsWithUsers = { sentRequests: FriendRequest; user: UserShowableData }
