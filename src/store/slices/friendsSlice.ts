import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GetFriendsResponse } from '../../types/friends.ts'
import { UserWithoutPassword } from '../../types/user.ts'

type InitialState = {
	friends: UserWithoutPassword[]
}

const initialState: InitialState = {
	friends: [],
}

export const friendsSlice = createSlice({
	name: 'friends',
	initialState,
	reducers: {
		addFriends: (state, action: PayloadAction<GetFriendsResponse>) => {
			if (!action.payload.success) {
				return state
			}
			state.friends = action.payload.payload?.friends || []
		},
	},
})

export const { addFriends } = friendsSlice.actions

export default friendsSlice.reducer
