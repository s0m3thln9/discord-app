import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../../types/user.ts'

type InitialState = {
	user: null | User
	isAuth: boolean
}

const initialState: InitialState = {
	user: null,
	isAuth: false,
}

export const authUserSlice = createSlice({
	name: 'authUser',
	initialState,
	reducers: {
		authUser: (state, action: PayloadAction<User>) => {
			state.user = action.payload
			state.isAuth = true
		},
		logOut: state => {
			state.isAuth = false
			state.user = null
		},
		updateDisplayNameD: (state, action: PayloadAction<string>) => {
			if (!state.user) {
				state.user = null
				return
			}
			state.user = {
				...state.user,
				displayName: action.payload,
			}
		},

		updateUsernameD: (state, action: PayloadAction<string>) => {
			if (!state.user) {
				state.user = null
				return
			}
			state.user = {
				...state.user,
				username: action.payload,
			}
		},
	},
})

export const { authUser, logOut, updateUsernameD, updateDisplayNameD } = authUserSlice.actions

export default authUserSlice.reducer
