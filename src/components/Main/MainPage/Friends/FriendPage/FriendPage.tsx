import Header from './Header/Header.tsx'
import Chat from '../../../../Chat/Chat.tsx'
import { useAppSelector } from '../../../../../hooks/typedHooks.ts'
import { useParams } from 'react-router-dom'
import { NoImageColors } from '../../../../../types/user.ts'

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
			<Chat type={type} chat={chat} header={header} />
		</div>
	)
}

export default FriendPage
