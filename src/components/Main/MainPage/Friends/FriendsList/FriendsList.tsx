import { useAppDispatch, useAppSelector } from '../../../../../hooks/typedHooks.ts'
import FriendItem from './FriendItem/FriendItem.tsx'
import { Filter } from '../Friends.tsx'
import { UserWithoutPassword } from '../../../../../types/user.ts'
import { useGetFriendRequestsMutation } from '../../../../../api/api.ts'
import { useEffect, useState } from 'react'
import { addFriendRequest } from '../../../../../store/slices/friendRequestsSlice.ts'
import { FriendRequestsWithUsers } from '../../../../../types/friends.ts'
import FriendRequest from './FriendRequest/FriendRequest.tsx'
import noFriends from './../../../../../assets/img/noFriends.svg'
import noRequests from './../../../../../assets/img/noRequests.svg'
import blocked from './../../../../../assets/img/blocked.svg'

type Props = {
	filter: Filter
}

const FriendsList = ({ filter }: Props) => {
	const [search, setSearch] = useState('')

	const user = useAppSelector(state => state.auth.user)
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

	let filteredFriends: UserWithoutPassword[] = []
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
			filteredFriendRequests = friendRequestsWithUsers.filter(req => req.friendRequest.status === 'pending')
			break
		case 'blocked':
			filteredFriendRequests = friendRequestsWithUsers.filter(req => req.friendRequest.status === 'blocked')
			break
	}

	filteredFriends = filteredFriends.filter(
		friend =>
			friend.displayName.toUpperCase().indexOf(search.toUpperCase()) != -1 ||
			friend.displayName.toUpperCase().indexOf(search.toUpperCase()) != -1,
	)

	filteredFriendRequests = filteredFriendRequests.filter(request => {
		if (request.toUser.id === user?.id) {
			return (
				request.fromUser.displayName.toUpperCase().indexOf(search.toUpperCase()) != -1 ||
				request.fromUser.displayName.toUpperCase().indexOf(search.toUpperCase()) != -1
			)
		} else {
			return (
				request.toUser.displayName.toUpperCase().indexOf(search.toUpperCase()) != -1 ||
				request.toUser.displayName.toUpperCase().indexOf(search.toUpperCase()) != -1
			)
		}
	})

	if (!user) {
		return <p>Loading...</p>
	}

	return (
		<section className={'flex grow flex-col'}>
			<input
				type="text"
				placeholder={'Search'}
				className={'ml-[1.875rem] mr-5 mt-4 h-[1.875rem] rounded bg-[#1e1f22] px-2 text-white'}
				value={search}
				onChange={e => setSearch(e.target.value)}
			/>
			<h2 className={'mb-2 ml-[1.875rem] mr-5 mt-4 text-xs font-semibold uppercase text-[#b5bac1]'}>
				{`${filter[0].toUpperCase()}${filter.substring(1)}`} -{' '}
				{filter === 'all' || filter === 'online' ? filteredFriends.length : filteredFriendRequests.length}
			</h2>
			<ul className={'grow'}>
				{(filter === 'all' || filter === 'online') && filteredFriends.length === 0 ? (
					<div className={'flex h-full w-full flex-col items-center justify-center'}>
						<img src={noFriends} alt="no friends" />
						<p className={'mt-8 text-[#949ba4]'}>Wumpus looked, but couldn’t find anyone with that name.</p>
					</div>
				) : (
					filteredFriends.map(friend => <FriendItem friend={friend} key={friend.id} />)
				)}
				{(filter === 'pending' || filter === 'blocked') && filteredFriendRequests.length === 0 ? (
					<div className={'flex h-full w-full flex-col items-center justify-center'}>
						<img src={filter === 'pending' ? noRequests : blocked} alt="no friends" />
						<p className={'mt-8 text-[#949ba4]'}>
							{filter === 'pending'
								? "There are no pending friend requests. Here's Wumpus for now."
								: "You can't unblock the Wumpus."}
						</p>
					</div>
				) : (
					filteredFriendRequests.map(request => (
						<FriendRequest
							user={request.friendRequest.fromId === user.id ? request.toUser : request.fromUser}
							key={request.friendRequest.id}
							type={user.id === request.friendRequest.toId ? 'incoming' : 'outgoing'}
							requestId={request.friendRequest.id}
						/>
					))
				)}
				{filter.length === 0 && <img src={noFriends} alt="" />}
			</ul>
		</section>
	)
}

export default FriendsList
