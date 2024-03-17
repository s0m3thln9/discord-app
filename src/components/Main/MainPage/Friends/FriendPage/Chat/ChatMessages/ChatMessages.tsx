import MessageCom from './Message/MessageCom.tsx'
import { useAppSelector } from '../../../../../../../hooks/typedHooks.ts'
import { useParams } from 'react-router-dom'
import useGetFriend from '../../../../../../../hooks/useGetFriend.ts'
import UserImage from '../../../../../../UI/UserImage/UserImage.tsx'

const ChatMessages = () => {
	const { id } = useParams()
	const chat = useAppSelector(state => state.messages.chats.find(chat => chat.id === +(id || '0')))
	const messages = chat?.messages || []
	const friend = useGetFriend(id)
	if (!friend) return null
	return (
		<div className={'flex h-[calc(100svh-10rem)] grow flex-col overflow-y-scroll pt-6'}>
			<div className={'ml-4'}>
				<UserImage
					image={friend.userImage || ''}
					color={friend.color}
					bgColor={'content'}
					onlineStatus={'group'}
					size={'lg'}
				/>
				<h2 className={'text-3xl font-bold text-white'}>{friend.displayName}</h2>
				<h2 className={'text-lg font-bold text-white'}>{friend.username}</h2>
			</div>
			<p className={'ml-4 mt-2 text-sm'}>
				This is the beginning of your direct message history with <strong>{friend.displayName}</strong>
			</p>
			<div className={'mt-4 pb-4'}>
				{messages.map((message, i) => (
					<MessageCom key={message.id} message={message} previous={i > 0 ? messages[i - 1] : null} />
				))}
			</div>
		</div>
	)
}

export default ChatMessages
