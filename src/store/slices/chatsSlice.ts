import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ChatPrisma } from '../../types/chat.ts'
import { SendMessageResponse } from '../../types/messages.ts'

type InitialState = {
	chats: ChatPrisma[]
}

const initialState: InitialState = {
	chats: [],
}

export const chatsSlice = createSlice({
	name: 'chats',
	initialState,
	reducers: {
		addChats: (state, action: PayloadAction<ChatPrisma[]>) => {
			action.payload.forEach(chat => {
				if (!state.chats.find(c => c.id === chat.id)) {
					state.chats.push(chat)
				}
			})
		},

		addMessage: (state, action: PayloadAction<{ chatId: number; response: SendMessageResponse }>) => {
			const response = action.payload.response
			const chat = state.chats.find(chat => chat.id === action.payload.chatId)
			if (!chat || !response.success || !response.payload) return state
			const message = chat.messages.find(message => message.id === response.payload?.message.id)
			if (!message) {
				chat.messages.push(response.payload.message)
			}
		},
	},
})

export const { addChats, addMessage } = chatsSlice.actions

export default chatsSlice.reducer
