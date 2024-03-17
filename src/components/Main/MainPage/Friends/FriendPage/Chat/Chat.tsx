import ChatMessages from './ChatMessages/ChatMessages.tsx'
import ChatInput from './ChatInput/ChatInput.tsx'
import Cookies from 'js-cookie'
import { useEffect } from 'react'
import { GetMessagesResponse, NewMessageBody, SendMessageResponse } from '../../../../../../types/messages.ts'
import { useAppDispatch, useAppSelector } from '../../../../../../hooks/typedHooks.ts'
import { getAllMessages, sendingMessageResponse, socketSendMessage } from '../../../../../../api/socket-api.ts'
import { addMessageToArray, getMessages } from '../../../../../../store/slices/messagesSlice.ts'
import { useParams } from 'react-router-dom'

const Chat = () => {
	const jwt = Cookies.get('jwt')
	const user = useAppSelector(state => state.auth.user)
	const params = useParams()
	const id = +(params.id || '0')
	const dispatch = useAppDispatch()
	const chat = useAppSelector(state => state.messages.chats.find(chat => chat.id === id))

	useEffect(() => {
		if (!chat) {
			getAllMessages(jwt || '', id, handleGetMessagesAdd)
		}
		sendingMessageResponse(handleNewMessageAdd)
	}, [])

	const handleNewMessageAdd = (response: SendMessageResponse) => {
		if (response.success && response.payload) {
			dispatch(addMessageToArray({ message: response.payload.message, id }))
		}
	}

	const handleGetMessagesAdd = (response: GetMessagesResponse) => {
		if (response.success && response.payload) {
			dispatch(getMessages({ id: id, messages: response.payload.messages }))
		}
	}

	const handleSend = (newMessageText: string) => {
		if (!user || !jwt || newMessageText === '') return
		const newMessageBody: NewMessageBody = {
			jwt,
			receiverId: id,
			text: newMessageText.trim(),
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
