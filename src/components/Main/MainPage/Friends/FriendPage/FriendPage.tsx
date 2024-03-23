import Header from './Header/Header.tsx'
import Chat from './Chat/Chat.tsx'
import { useAppSelector } from '../../../../../hooks/typedHooks.ts'
import { useParams } from 'react-router-dom'
import { NoImageColors } from '../../../../../types/user.ts'

type HeaderProps = {
	image: string
	color: NoImageColors
	onlineStatus: 'offline' | 'online' | 'idle' | 'doNotDisturb' | false
	displayName: string
	username: string
}

type Props = {
	type: 'friend' | 'group'
}

const FriendPage = ({ type }: Props) => {
	const { id } = useParams()
	const users = useAppSelector(state => state.friends.friends)
	const groups = useAppSelector(state => state.groups.groups)
	const friend = users.find(f => f.id === +(id || '0'))
	const group = groups.find(g => g.id === id)

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
			<Header
				image={header.image}
				color={header.color}
				onlineStatus={header.onlineStatus}
				displayName={header.displayName}
			/>
			<Chat
				id={id || '0'}
				type={type}
				displayName={header.displayName}
				color={header.color}
				username={header.username}
				image={header.image}
			/>
		</div>
	)
}

export default FriendPage
