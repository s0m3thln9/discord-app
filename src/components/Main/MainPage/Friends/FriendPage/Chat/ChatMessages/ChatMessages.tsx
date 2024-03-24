import Message from './Message/Message.tsx'
import { useAppSelector } from '../../../../../../../hooks/typedHooks.ts'
import UserImage from '../../../../../../UI/UserImage/UserImage.tsx'
import { NoImageColors } from '../../../../../../../types/user.ts'

type Props = {
	type: 'friend' | 'group'
	id: number | string
	image: string
	color: NoImageColors
	displayName: string
	username: string
}

const ChatMessages = ({ id, image, color, displayName, username, type }: Props) => {
	const chat = useAppSelector(state => state.messages.chats.find(chat => chat.id === id))

	const messages = chat?.messages || []
	const user = useAppSelector(state => state.auth.user)
	const users = useAppSelector(state => state.friends.friends)

	if (!user) return null

	return (
		<div className={'flex h-[calc(100svh-10rem)] grow flex-col overflow-y-scroll pt-6'}>
			<div className={'ml-4'}>
				<UserImage
					image={image}
					color={color}
					bgColor={'content'}
					onlineStatus={false}
					size={'lg'}
					isGroup={type === 'group'}
				/>
				<h2 className={'text-3xl font-bold text-white'}>{displayName}</h2>
				<h2 className={'text-lg font-bold text-white'}>{username}</h2>
			</div>
			<p className={'ml-4 mt-2 text-sm'}>
				This is the beginning of your direct message history with <strong>{displayName}</strong>
			</p>
			<div className={'mt-4 pb-4'}>
				{messages.map((message, i) => {
					let sender = users.find(user => user.id === message.senderId)
					if (!sender && message.senderId === user.id) {
						sender = user
					}
					if (!sender) return null
					return (
						<Message
							key={message.id}
							message={message}
							previous={i > 0 ? messages[i - 1] : null}
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
