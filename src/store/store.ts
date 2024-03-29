import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authUserSlice.ts'
import friendsReducer from './slices/friendsSlice.ts'
import chatsReducer from './slices/chatsSlice.ts'
import groupsReducer from './slices/groupsSlice.ts'
import { api } from '../api/api.ts'
import { setupListeners } from '@reduxjs/toolkit/query/react'
import friendRequestsReducer from './slices/friendRequestsSlice.ts'
import messagesReducer from './slices/messagesSlice.ts'

export const store = configureStore({
	reducer: {
		[api.reducerPath]: api.reducer,
		auth: authReducer,
		friends: friendsReducer,
		chats: chatsReducer,
		groups: groupsReducer,
		friendRequests: friendRequestsReducer,
		messages: messagesReducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
