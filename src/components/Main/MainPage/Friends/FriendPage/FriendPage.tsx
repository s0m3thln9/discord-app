import Header from './Header/Header.tsx'
import Chat from '../../../../Chat/Chat.tsx'
import { useAppSelector } from '../../../../../hooks/typedHooks.ts'
import { useParams } from 'react-router-dom'
import { NoImageColors } from '../../../../../types/user.ts'
import UserImage from '../../../../UI/UserImage/UserImage.tsx'

export type HeaderProps = {
	image: string
	color: NoImageColors
	onlineStatus: 'offline' | 'online' | 'idle' | 'doNotDisturb' | false
	displayName: string
	username: string
}
const FriendPage = () => {
	const { id } = useParams()
	const groups = useAppSelector(state => state.groups.groups)
	const group = groups.find(g => g.chatId === +(id || '0'))
	const chats = useAppSelector(state => state.chats.chats)
	const user = useAppSelector(state => state.auth.user)
	const chat = chats.find(f => f.id === +(id || '0'))
	const type = group ? 'group' : 'friend'
	if (!chat || !user) return null

	const friend = chat.participants.find(participant => participant.id !== user.id)

	const header: HeaderProps =
		type === 'friend'
			? {
					image: friend?.userImage || '',
					color: friend?.color || 'blue',
					onlineStatus: friend?.onlineStatus || 'offline',
					displayName: friend?.displayName || '',
					username: friend?.username || '',
				}
			: {
					image: group?.image || '',
					color: group?.color || 'blue',
					onlineStatus: false,
					displayName: group?.name || '',
					username: group?.name || '',
				}

	return (
		<div className={'flex grow flex-col'}>
			<Header header={header} />
			<div className={'flex grow'}>
				<Chat type={type} chat={chat} header={header} user={user} />
				<div className={'w-[15rem] bg-sidebar pl-4 pr-2 pt-6 text-xs font-semibold uppercase text-[#949ba4]'}>
					<h4>members—{chat.participants.length}</h4>
					<ul>
						{chat.participants.map(participant => (
							<li key={participant.id}>
								<UserImage
									image={participant.userImage}
									color={participant.color}
									onlineStatus={participant.onlineStatus}
									bgColor={'sidebar'}
									tooltip={true}
								/>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default FriendPage
