import { UserWithoutPassword } from './user.ts'
import { ErrorMessage, SuccessMessage } from './responseMessages'

export type FriendRequest = {
	id: number
	status: 'pending' | 'blocked'
	fromId: number
	toId: number
	createdAt: string
}

type GetFriendsErrorMessages = 'Unauthorized'

export type GetFriendsResponse =
	| ErrorMessage<GetFriendsErrorMessages>
	| SuccessMessage<'Successfully got friends', { friends: (UserWithoutPassword & { chatId: number })[] }>

type GetFriendsRequestsErrorMessages = 'Unauthorized'

export type GetFriendRequestsResponse =
	| SuccessMessage<'Successfully got friend requests', { friendRequestsWithUsers: FriendRequestsWithUsers[] }>
	| ErrorMessage<GetFriendsRequestsErrorMessages>

export type FriendRequestsWithUsers = {
	friendRequest: FriendRequest
	fromUser: UserWithoutPassword & { chatId: number }
	toUser: UserWithoutPassword & { chatId: number }
}

type SendRequestErrorMessages =
	| 'Unauthorized'
	| "You're already friends with that user"
	| 'Incorrect username'
	| "You can't yourself to friends"

export type SendFriendRequestResponse =
	| SuccessMessage<'Friend request send', { friend: UserWithoutPassword & { chatId: number } }>
	| ErrorMessage<SendRequestErrorMessages>

type DeleteFriendRequestErrorMessages = 'Unauthorized' | 'Wrong request id provided'

export type DeleteFriendRequestResponse =
	| SuccessMessage<'Request deleted successfully', { deletedRequest: FriendRequest }>
	| ErrorMessage<DeleteFriendRequestErrorMessages>
