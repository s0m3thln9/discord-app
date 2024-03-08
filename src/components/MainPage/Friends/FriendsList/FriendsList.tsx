import { useAppDispatch, useAppSelector } from '../../../../hooks/typedHooks.ts'
import FriendItem from './FriendItem/FriendItem.tsx'
import { Filter } from '../Friends.tsx'
import { PublicUser } from '../../../../types/user.ts'
import { useGetFriendRequestsMutation } from '../../../../api/api.ts'
import { useEffect } from 'react'
import { addFriendRequest } from '../../../../store/slices/friendRequests.ts'
import { FriendRequestsWithUsers } from '../../../../types/friends.ts'

type Props = {
	filter: Filter
}

const FriendsList = ({ filter }: Props) => {
	const friends = useAppSelector(state => state.friends.friends)

	const [getFriendRequest] = useGetFriendRequestsMutation()
	const dispatch = useAppDispatch()

	useEffect(() => {
		const fetchFriendRequest = async () => {
			const getFriendRequestsResponse = await getFriendRequest().unwrap()
			dispatch(addFriendRequest(getFriendRequestsResponse))
		}
		fetchFriendRequest().then()
	}, [dispatch, getFriendRequest])

	const friendRequestsWithUsers = useAppSelector(state => state.friendRequests.friendRequestsWithUsers)

	let filteredFriends: PublicUser[] = []
	switch (filter) {
		case 'all':
			filteredFriends = friends
			break
		case 'online':
			filteredFriends = friends.filter(friend => friend.onlineStatus === 'online')
			break
	}

	let filteredFriendRequests: FriendRequestsWithUsers[] = []
	switch (filter) {
		case 'pending':
			filteredFriendRequests = friendRequestsWithUsers.filter(req => req.sentRequests.status === 'pending')
			break
		case 'blocked':
			filteredFriendRequests = friendRequestsWithUsers.filter(req => req.sentRequests.status === 'blocked')
			break
	}

	return (
		<section className={'flex grow flex-col'}>
			<input
				type="text"
				placeholder={'Search'}
				className={'ml-[1.875rem] mr-5 mt-4 h-[1.875rem] rounded bg-[#1e1f22] px-2 text-white'}
			/>
			<h2 className={'mb-2 ml-[1.875rem] mr-5 mt-4 text-xs font-semibold uppercase text-[#b5bac1]'}>
				{`${filter[0].toUpperCase()}${filter.substring(1)}`} - {filteredFriends.length}
			</h2>
			<ul className={'grow'}>
				{(filter === 'all' || filter === 'online') &&
					filteredFriends.map(friend => <FriendItem friend={friend} key={friend.id} />)}
				{(filter === 'pending' || filter === 'blocked') &&
					filteredFriendRequests.map(request => (
						<FriendItem friend={request.user} key={request.sentRequests.id} />
					))}
			</ul>
		</section>
	)
}

export default FriendsList
