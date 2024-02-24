import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../../types/AuthProvider.ts'

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
		},
	},
})

export const { authUser, logOut } = authUserSlice.actions

export default authUserSlice.reducer
