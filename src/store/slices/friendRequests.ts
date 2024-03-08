import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FriendRequestsWithUsers, GetFriendRequestsResponse } from '../../types/friends.ts'

type InitialState = {
	friendRequestsWithUsers: FriendRequestsWithUsers[]
}

const initialState: InitialState = {
	friendRequestsWithUsers: [],
}

const friendRequestsSlice = createSlice({
	name: 'friendRequests',
	initialState: initialState,
	reducers: {
		addFriendRequest: (state, action: PayloadAction<GetFriendRequestsResponse>) => {
			if (!action.payload.success) return

			state.friendRequestsWithUsers = action.payload.payload?.friendRequestsWithUsers || []
		},
	},
})

export const { addFriendRequest } = friendRequestsSlice.actions

export default friendRequestsSlice.reducer
