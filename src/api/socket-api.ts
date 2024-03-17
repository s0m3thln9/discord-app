import { io } from 'socket.io-client'
import { NewMessageBody } from '../types/messages.ts'

const socket = io('http://localhost:8080')

export default socket

export const socketSendMessage = (newMessageBody: NewMessageBody) => {
	socket.emit('sendMessage', newMessageBody)
}
