import { useAppDispatch, useAppSelector } from '../../hooks/typedHooks.ts'
import { useGetFriendsQuery, useGetGroupsQuery } from '../../api/api.ts'
import { useEffect } from 'react'
import { addFriends } from '../slices/friendsSlice.ts'
import { addFriendsToChannels, addGroupsToChannels } from '../slices/chatsSlice.ts'
import { addGroups } from '../slices/groupsSlice.ts'

export const getChannels = () => {
	const friends = useAppSelector(state => state.friends.friends)
	const groups = useAppSelector(state => state.groups.groups)

	const friendsQuery = useGetFriendsQuery()
	const groupsQuery = useGetGroupsQuery()

	const dispatch = useAppDispatch()
	useEffect(() => {
		if (!friendsQuery.isLoading && friendsQuery.data) {
			dispatch(addFriends(friendsQuery.data))
			dispatch(addFriendsToChannels(friends))
		}
		if (!groupsQuery.isLoading && groupsQuery.data) {
			dispatch(addGroups(groupsQuery.data))
			dispatch(addGroupsToChannels(groups))
		}
	}, [friends, groups])

	return useAppSelector(state => state.chats.channels)
}
