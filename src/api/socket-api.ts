import { io } from 'socket.io-client'
import { GetMessagesResponse, NewMessageBody, SendMessageResponse } from '../types/messages.ts'

const socket = io('http://93.177.124.188:8080')

export const socketSendMessage = (newMessageBody: NewMessageBody) => {
	socket.emit('sendMessage', newMessageBody)
}

export const getAllMessages = (jwt: string, userId: number, callback: (response: GetMessagesResponse) => void) => {
	socket.emit('getMessages', { jwt, userId })
	socket.on('allMessages', callback)
}

export const sendingMessageResponse = (callback: (response: SendMessageResponse) => void) => {
	socket.on('sendMessageResponse', callback)
}
