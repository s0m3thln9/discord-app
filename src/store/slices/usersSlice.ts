import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserShowableData } from '../../types/user.ts'

const initialState: UserShowableData[] = []

export const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		addUser: (state, action: PayloadAction<{ user: UserShowableData }>) => {
			if (!state.find(user => user.id === action.payload.user.id)) {
				state.push(action.payload.user)
			}
		},
	},
})

export const { addUser } = usersSlice.actions

export default usersSlice.reducer
