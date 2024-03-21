import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FriendRequestsWithUsers, GetFriendRequestsResponse } from '../../types/friends.ts'

type InitialState = {
	friendRequestsWithUsers: FriendRequestsWithUsers[]
	notifications: number
}

const initialState: InitialState = {
	friendRequestsWithUsers: [],
	notifications: 0,
}

const friendRequestsSlice = createSlice({
	name: 'friendRequests',
	initialState: initialState,
	reducers: {
		addFriendRequest: (state, action: PayloadAction<{ response: GetFriendRequestsResponse }>) => {
			if (!action.payload.response.success) return

			state.friendRequestsWithUsers = action.payload.response.payload?.friendRequestsWithUsers || []
		},

		deleteFriendRequestAC: (state, action: PayloadAction<{ requestId: number }>) => {
			if (!state.friendRequestsWithUsers.length) return

			state.friendRequestsWithUsers = state.friendRequestsWithUsers.filter(
				req => req.friendRequest.id !== action.payload.requestId,
			)
		},

		updateFriendRequestNotifications: (state, action: PayloadAction<{ id: number }>) => {
			let counter = 0
			state.friendRequestsWithUsers.forEach(friendRequest => {
				if (friendRequest.toUser.id === action.payload.id) {
					counter++
				}
			})
			state.notifications = counter || 0
		},
	},
})

export const { addFriendRequest, deleteFriendRequestAC, updateFriendRequestNotifications } = friendRequestsSlice.actions

export default friendRequestsSlice.reducer
