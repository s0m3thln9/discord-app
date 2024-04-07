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
	user: UserWithoutPassword
}

const ChatMessages = ({ chat, header, type, user }: Props) => {
	const friends = useAppSelector(state => state.friends)
	const users = useAppSelector(state => state.users)
	const dispatch = useDispatch()
	const [getUser] = useGetUserWithIdMutation()

	let requestedUsers: number[] = []
	const getUserWithId = async (id: number) => {
		const response = await getUser(id).unwrap()
		if (response.success && response.payload) {
			requestedUsers.push(id)
			dispatch(addUser(response.payload))
		}
	}

	useEffect(() => {
		const fetchUsers = async () => {
			for (const message of chat.messages) {
				const sender = findSender(message)
				if (!sender) {
					await getUserWithId(message.senderId)
				}
			}
		}

		fetchUsers().then()
	}, [chat.messages])

	const findSender = useCallback(
		(message: MessageType): UserShowableData | UserWithoutPassword | 'requested' | undefined => {
			if (message.senderId === user.id) {
				return user
			}
			let sender: UserShowableData | number | undefined = friends.find(friend => friend.id === message.senderId)
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
		<div className={'h-[calc(100svh-6.25rem)] scroll-mb-0 justify-end overflow-y-scroll pt-4'}>
			<div className={'flex grow flex-col justify-end'}>
				<div className={''}>
					<div className={'ml-4'}>
						<UserImage
							image={header.image}
							color={header.color}
							bgColor={'content'}
							onlineStatus={false}
							size={'lg'}
							isGroup={type === 'group'}
						/>
						<h2 className={'my-2 text-[2rem] font-bold leading-10 text-white'}>{header.displayName}</h2>
						{type !== 'group' && (
							<h2 className={'text-2xl font-medium leading-[1.875rem] text-white'}>{header.username}</h2>
						)}
					</div>

					{type === 'friend' ? (
						<p className={'ml-4 mt-5 text-[1rem] leading-5'}>
							This is the beginning of your direct message history with{' '}
							<strong>{header.displayName}</strong>
						</p>
					) : (
						<p className={'ml-4 text-[1rem] leading-5'}>
							Welcome to the beginning of the <strong>{header.displayName}</strong>
						</p>
					)}

					<div className={'pb-4'}>
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
			</div>
		</div>
	)
}

export default ChatMessages
