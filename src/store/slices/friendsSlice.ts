import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GetFriendsResponse } from '../../types/friends.ts'
import { UserShowableData } from '../../types/user.ts'

const initialState: UserShowableData[] = []

export const friendsSlice = createSlice({
	name: 'friends',
	initialState,
	reducers: {
		addFriends: (state, action: PayloadAction<GetFriendsResponse>) => {
			if (!action.payload.success) {
				return state
			}
			return action.payload.payload?.friends || []
		},
	},
})

export const { addFriends } = friendsSlice.actions

export default friendsSlice.reducer
