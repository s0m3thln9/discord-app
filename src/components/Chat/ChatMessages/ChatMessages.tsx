import Message from './Message/Message.tsx'
import { useAppSelector } from '../../../hooks/typedHooks.ts'
import UserImage from '../../UI/UserImage/UserImage.tsx'
import { ChatPrisma } from '../../../types/chat.ts'
import { HeaderProps } from '../../Main/MainPage/Friends/FriendPage/FriendPage.tsx'
import { useGetUserWithIdMutation } from '../../../api/api.ts'
import { useDispatch } from 'react-redux'
import { addUser } from '../../../store/slices/usersSlice.ts'
import { MessageType } from '../../../types/messages.ts'
import { UserShowableData, UserWithoutPassword } from '../../../types/user.ts'
import { useCallback, useEffect } from 'react'

type Props = {
	type: 'friend' | 'group'
	header: HeaderProps
	chat: ChatPrisma
}

const ChatMessages = ({ chat, header, type }: Props) => {
	const user = useAppSelector(state => state.auth.user)
	const friends = useAppSelector(state => state.friends)
	const users = useAppSelector(state => state.users)
	const dispatch = useDispatch()
	const [getUser] = useGetUserWithIdMutation()

	if (!user) return null

	let requestedUsers: number[] = []
	const getUserWithId = async (id: number) => {
		const response = await getUser(id).unwrap()
		if (response.success && response.payload) {
			console.log(response)
			requestedUsers.push(id)
			dispatch(addUser(response.payload))
		}
	}

	useEffect(() => {
		const fetchUsers = async () => {
			for (const message of chat.messages) {
				const sender = findSender(message)
				if (!sender) {
					console.log(message, sender)
					await getUserWithId(message.senderId)
				}
			}
		}

		fetchUsers().then()
	}, [])

	const findSender = useCallback(
		(message: MessageType): UserShowableData | UserWithoutPassword | 'requested' | undefined => {
			if (message.senderId === user.id) {
				return user
			}
			let sender: UserWithoutPassword | number | undefined = friends.find(
				friend => friend.id === message.senderId,
			)
			if (sender) {
				return sender
			}
			sender = requestedUsers.find(userId => userId === message.senderId)
			if (sender) {
				return 'requested'
			}
			return users.find(user => user.id === message.senderId)
		},
		[user, friends, users],
	)

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
					const sender = findSender(message)
					if (!sender || sender === 'requested') return 'No sender found...'
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
