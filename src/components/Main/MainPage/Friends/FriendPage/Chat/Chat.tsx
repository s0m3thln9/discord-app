import ChatMessages from './ChatMessages/ChatMessages.tsx'
import ChatInput from './ChatInput/ChatInput.tsx'
import Cookies from 'js-cookie'
import { useEffect } from 'react'
import { GetMessagesResponse, NewMessageBody, SendMessageResponse } from '../../../../../../types/messages.ts'
import { useAppDispatch, useAppSelector } from '../../../../../../hooks/typedHooks.ts'
import { getAllMessages, sendingMessageResponse, socketSendMessage } from '../../../../../../api/socket-api.ts'
import { addMessageToArray, getMessages } from '../../../../../../store/slices/messagesSlice.ts'
import { NoImageColors } from '../../../../../../types/user.ts'

type Props = {
	id: number | string
	type: 'friend' | 'group'
	displayName: string
	color: NoImageColors
	image: string
	username: string
}

const Chat = ({ id, type, displayName, color, username, image }: Props) => {
	const jwt = Cookies.get('jwt')
	const user = useAppSelector(state => state.auth.user)
	const dispatch = useAppDispatch()
	const chat = useAppSelector(state => state.messages.chats.find(chat => chat.id === id))

	useEffect(() => {
		if (!chat) {
			getAllMessages(
				jwt || '',
				type === 'friend' ? +id : 0,
				type === 'group' ? `${id}` : '0',
				handleGetMessagesAdd,
			)
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
		const newMessageBody: NewMessageBody =
			type === 'friend'
				? {
						jwt,
						receiverId: +id,
						text: newMessageText.trim(),
						username: user.username,
					}
				: {
						jwt,
						groupId: `${id}`,
						text: newMessageText.trim(),
						username: user.username,
					}
		socketSendMessage(newMessageBody)
	}

	return (
		<section className={'flex grow flex-col'}>
			<ChatMessages
				id={id}
				displayName={displayName}
				color={color}
				image={image}
				username={username}
				type={type}
			/>
			<ChatInput handleSend={handleSend} displayName={displayName} />
		</section>
	)
}

export default Chat
