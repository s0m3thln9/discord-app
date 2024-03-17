import { ErrorMessage, SuccessMessage } from './responseMessages.ts'
import { UserShowableData, UserWithoutPassword } from './user.ts'

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
	| SuccessMessage<'Successfully got friends', { friends: UserWithoutPassword[] }>

type GetFriendsRequestsErrorMessages = 'Unauthorized'

export type GetFriendRequestsResponse =
	| SuccessMessage<'Successfully got friend requests', { friendRequestsWithUsers: FriendRequestsWithUsers[] }>
	| ErrorMessage<GetFriendsRequestsErrorMessages>

export type FriendRequestsWithUsers = {
	friendRequest: FriendRequest
	fromUser: UserShowableData
	toUser: UserShowableData
}

type SendRequestErrorMessages =
	| 'Unauthorized'
	| "You're already friends with that user"
	| 'Incorrect username'
	| "You can't yourself to friends"

export type SendFriendRequestResponse =
	| SuccessMessage<'Friend request send', { friend: UserShowableData }>
	| ErrorMessage<SendRequestErrorMessages>

type DeleteFriendRequestErrorMessages = 'Unauthorized' | 'Wrong request id provided'

export type DeleteFriendRequestResponse =
	| SuccessMessage<'Request deleted successfully', { deletedRequest: FriendRequest }>
	| ErrorMessage<DeleteFriendRequestErrorMessages>
