import ChatMessages from './ChatMessages/ChatMessages.tsx'
import ChatInput from './ChatInput/ChatInput.tsx'
import { useAppDispatch, useAppSelector } from '../../hooks/typedHooks.ts'
import { ChatPrisma } from '../../types/chat.ts'
import { HeaderProps } from '../Main/MainPage/Friends/FriendPage/FriendPage.tsx'
import { sendingMessageResponse, socketSendMessage } from '../../api/socket-api.ts'
import { NewMessageBody, SendMessageResponse } from '../../types/messages.ts'
import { useEffect } from 'react'
import Cookies from 'js-cookie'
import { addMessage } from '../../store/slices/chatsSlice.ts'

type Props = {
	type: 'friend' | 'group'
	chat: ChatPrisma
	header: HeaderProps
}

const Chat = ({ type, chat, header }: Props) => {
	const jwt = Cookies.get('jwt')
	const user = useAppSelector(state => state.auth.user)
	const dispatch = useAppDispatch()

	useEffect(() => {
		const handleNewMessageAdd = (response: SendMessageResponse) => {
			if (response.success && response.payload) {
				dispatch(addMessage({ chatId: chat.id, response }))
			}
		}
		sendingMessageResponse(handleNewMessageAdd)
	}, [])

	const handleSend = (newMessageText: string) => {
		if (!user || !jwt || newMessageText === '') return
		const newMessageBody: NewMessageBody =
			type === 'friend'
				? {
						jwt,
						text: newMessageText.trim(),
						username: user.username,
						chatId: chat.id,
					}
				: {
						jwt,
						text: newMessageText.trim(),
						username: user.username,
						chatId: chat.id,
					}
		socketSendMessage(newMessageBody)
	}

	if (!user) return null

	return (
		<section className={'flex grow flex-col'}>
			<ChatMessages header={header} type={type} chat={chat} />
			<ChatInput handleSend={handleSend} displayName={header.displayName} />
		</section>
	)
}

export default Chat
