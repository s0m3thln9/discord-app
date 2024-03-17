import ChatMessages from './ChatMessages/ChatMessages.tsx'
import ChatInput from './ChatInput/ChatInput.tsx'
import Cookies from 'js-cookie'
import { useEffect } from 'react'
import { Message, NewMessageBody } from '../../../../../../types/messages.ts'
import { useAppDispatch, useAppSelector } from '../../../../../../hooks/typedHooks.ts'
import socket, { socketSendMessage } from '../../../../../../api/socket-api.ts'
import { addMessageToArray, getMessages } from '../../../../../../store/slices/messagesSlice.ts'
import { useParams } from 'react-router-dom'

const Chat = () => {
	const jwt = Cookies.get('jwt')
	const user = useAppSelector(state => state.auth.user)
	const { id } = useParams()
	const dispatch = useAppDispatch()
	const chat = useAppSelector(state => state.messages.chats.find(chat => chat.id === +(id || '0')))

	const getMessagesHandler = (messages: Message[]) => {
		dispatch(getMessages({ id: +(id || '0'), messages }))
	}

	useEffect(() => {
		if (!chat) {
			socket.on('allMessages', getMessagesHandler)
			socket.emit('getMessages', { jwt, userId: +(id || '0') })
		}
		socket.on('sendMessageResponse', message =>
			dispatch(addMessageToArray({ message: message.message, id: +(id || '0') })),
		)
		return () => {
			socket.off('sendMessageResponse', addMessageToArray)
		}
	}, [socket])

	const handleSend = (newMessageText: string) => {
		if (!user || !jwt) return
		const newMessageBody: NewMessageBody = {
			jwt,
			receiverId: +(id || '0'),
			text: newMessageText,
			username: user.username,
		}
		socketSendMessage(newMessageBody)
	}

	return (
		<section className={'flex grow flex-col'}>
			<ChatMessages />
			<ChatInput handleSend={handleSend} />
		</section>
	)
}

export default Chat
