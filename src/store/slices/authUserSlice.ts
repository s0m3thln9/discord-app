import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserWithoutPassword } from '../../types/user.ts'

type InitialState = {
	user: null | UserWithoutPassword
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
		authUser: (state, action: PayloadAction<UserWithoutPassword>) => {
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

		updateUserPhoneNumber: (state, action: PayloadAction<{ phoneNumber: string; code: number }>) => {
			if (!state.user) {
				state.user = null
				return
			}
			state.user = {
				...state.user,
				phoneNumber: action.payload.phoneNumber,
				phoneCode: action.payload.code,
			}
		},

		updateUserImage: (state, action: PayloadAction<string>) => {
			if (!state.user) return state
			state.user.userImage = action.payload
		},
	},
})

export const { authUser, logOut, updateUsernameD, updateDisplayNameD, updateUserPhoneNumber, updateUserImage } =
	authUserSlice.actions

export default authUserSlice.reducer
