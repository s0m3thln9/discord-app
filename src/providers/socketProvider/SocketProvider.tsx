import { Context, createContext, ReactNode, useContext } from 'react'
import { NewMessageBody, SendMessageResponse } from '../../types/messages.ts'
import { addMessage } from '../../store/slices/chatsSlice.ts'
import { useAppDispatch } from '../../hooks/typedHooks.ts'
import socket from './socket.ts'
import Cookies from 'js-cookie'
import { ChatPrisma } from '../../types/chat.ts'

type SocketContext = {
	handleSend: (newMessageText: string, chat: ChatPrisma) => void
}

let SocketContext: Context<SocketContext>

const SocketProvider = ({ children }: { children: ReactNode }) => {
	const jwt = Cookies.get('jwt')
	const dispatch = useAppDispatch()

	socket.on('sendMessageResponse', (response: SendMessageResponse) => {
		if (response.success && response.payload) {
			dispatch(addMessage({ response }))
		}
	})

	const handleSend = (newMessageText: string, chat: ChatPrisma) => {
		console.log('handleSend', newMessageText)
		if (!jwt || newMessageText.trim() === '') return
		const newMessageBody: NewMessageBody = {
			jwt,
			text: newMessageText.trim(),
			chatId: chat.id,
		}
		sendMessage(newMessageBody)
	}

	const sendMessage = (newMessageBody: NewMessageBody) => {
		socket.emit('sendMessage', newMessageBody)
	}

	SocketContext = createContext<SocketContext>({
		handleSend,
	})

	return <SocketContext.Provider value={{ handleSend }}>{children}</SocketContext.Provider>
}

export default SocketProvider

export const useSocket = () => {
	return useContext(SocketContext)
}
