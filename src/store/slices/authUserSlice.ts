import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UpdateUserData, User } from '../../types/user.ts'

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
		updateUserData: (state, action: PayloadAction<UpdateUserData>) => {
			if (!state.user) {
				state.user = null
				return
			}
			state.user = {
				...state.user,
				id: state.user.id,
				createdAt: state.user.createdAt,
				...action.payload,
			}
		},
	},
})

export const { authUser, logOut, updateUserData } = authUserSlice.actions

export default authUserSlice.reducer
