import { Message } from '../../types/messages.ts'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Chat = {
	id: number
	messages: Message[]
}

type InitialState = {
	chats: Chat[]
}

const initialState: InitialState = {
	chats: [],
}

const messagesSlice = createSlice({
	name: 'chats',
	initialState,
	reducers: {
		addMessageToArray: (state, action: PayloadAction<{ id: number; message: Message }>) => {
			const chat = state.chats.find(chat => chat.id === action.payload.id)
			if (!chat) return state
			const existing = chat.messages.find(message => message.id === action.payload.message.id)
			if (existing) return state
			chat?.messages.push(action.payload.message)
		},
		getMessages: (state, action: PayloadAction<{ id: number; messages: Message[] }>) => {
			const chat = state.chats.find(chat => chat.id === action.payload.id)
			if (chat) return state

			state.chats.push({
				id: action.payload.id,
				messages: action.payload.messages,
			})
		},
	},
})

export const { addMessageToArray, getMessages } = messagesSlice.actions

export default messagesSlice.reducer
