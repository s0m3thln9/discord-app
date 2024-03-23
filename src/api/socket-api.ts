import { io } from 'socket.io-client'
import { GetMessagesResponse, NewMessageBody, SendMessageResponse } from '../types/messages.ts'

const socket = io('http://localhost:8080')

export const socketSendMessage = (newMessageBody: NewMessageBody) => {
	socket.emit('sendMessage', newMessageBody)
}

export const getAllMessages = (
	jwt: string,
	userId: number | undefined,
	groupId: string | undefined,
	callback: (response: GetMessagesResponse) => void,
) => {
	if (userId) {
		socket.emit('getUserMessages', { jwt, userId })
	}
	if (groupId) {
		socket.emit('getGroupMessages', { jwt, groupId })
	}
	socket.on('allMessages', callback)
}

export const sendingMessageResponse = (callback: (response: SendMessageResponse) => void) => {
	socket.on('sendMessageResponse', callback)
}
