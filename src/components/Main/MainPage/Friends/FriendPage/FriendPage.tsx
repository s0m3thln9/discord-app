import Header from './Header/Header.tsx'
import Chat from './Chat/Chat.tsx'
import { useAppSelector } from '../../../../../hooks/typedHooks.ts'
import { useParams } from 'react-router-dom'

const FriendPage = () => {
	const { id } = useParams()
	const users = useAppSelector(state => state.friends.friends)
	const friend = users.find(f => f.id === +(id || '0'))

	if (!friend) return null

	return (
		<div className={'flex grow flex-col'}>
			<Header friend={friend} />
			<Chat />
		</div>
	)
}

export default FriendPage
