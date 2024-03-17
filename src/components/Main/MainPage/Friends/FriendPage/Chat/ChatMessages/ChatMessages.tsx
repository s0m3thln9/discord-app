import MessageCom from './Message/MessageCom.tsx'
import { useAppSelector } from '../../../../../../../hooks/typedHooks.ts'
import { useParams } from 'react-router-dom'

const ChatMessages = () => {
	const { id } = useParams()
	const chat = useAppSelector(state => state.messages.chats.find(chat => chat.id === +(id || '0')))
	const messages = chat?.messages || []
	console.log('chat', messages)
	return (
		<div className={'flex h-[calc(100svh-10rem)] grow flex-col overflow-y-scroll'}>
			{messages.map(message => (
				<MessageCom key={message.id} message={message} />
			))}
		</div>
	)
}

export default ChatMessages
