import Message from './Message/Message.tsx'
import { useAppSelector } from '../../../hooks/typedHooks.ts'
import UserImage from '../../UI/UserImage/UserImage.tsx'
import { ChatPrisma } from '../../../types/chat.ts'
import { HeaderProps } from '../../Main/MainPage/Friends/FriendPage/FriendPage.tsx'

type Props = {
	type: 'friend' | 'group'
	header: HeaderProps
	chat: ChatPrisma
}

const ChatMessages = ({ chat, header, type }: Props) => {
	const user = useAppSelector(state => state.auth.user)
	const friends = useAppSelector(state => state.friends.friends)

	if (!user) return null

	return (
		<div className={'flex h-[calc(100svh-10rem)] grow flex-col overflow-y-scroll pt-6'}>
			<div className={'ml-4'}>
				<UserImage
					image={header.image}
					color={header.color}
					bgColor={'content'}
					onlineStatus={false}
					size={'lg'}
					isGroup={type === 'group'}
				/>
				<h2 className={'text-3xl font-bold text-white'}>{header.displayName}</h2>
				<h2 className={'text-lg font-bold text-white'}>{header.username}</h2>
			</div>
			<p className={'ml-4 mt-2 text-sm'}>
				This is the beginning of your direct message history with <strong>{header.displayName}</strong>
			</p>
			<div className={'mt-4 pb-4'}>
				{chat.messages.map((message, i) => {
					let sender
					if (message.senderId === user.id) {
						sender = user
					} else {
						sender = friends.find(friend => friend.id === message.senderId)
					}
					if (!sender) return null
					return (
						<Message
							key={message.id}
							message={message}
							previous={i > 0 ? chat.messages[i - 1] : null}
							senderImage={sender.userImage || ''}
							senderColor={sender.color}
							senderDisplayName={sender.displayName}
						/>
					)
				})}
			</div>
		</div>
	)
}

export default ChatMessages
