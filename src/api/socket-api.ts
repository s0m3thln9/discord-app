import { io } from 'socket.io-client'
import { NewMessageBody, SendMessageResponse } from '../types/messages.ts'

const socket = io('http://localhost:8080')

export const socketSendMessage = (newMessageBody: NewMessageBody) => {
	socket.emit('sendMessage', newMessageBody)
}

export const sendingMessageResponse = (callback: (response: SendMessageResponse) => void) => {
	socket.on('sendMessageResponse', callback)
}
