import { Plus } from '../../../../public/svgs.tsx'
import Tooltip from '../../UI/Tooltip/Tooltip.tsx'
import { useAppDispatch, useAppSelector } from '../../../hooks/typedHooks.ts'
import { useGetFriendsQuery, useGetGroupsQuery } from '../../../api/api.ts'
import { useEffect } from 'react'
import { addFriends } from '../../../store/slices/friendsSlice.ts'
import { addFriendsToChannels, addGroupsToChannels } from '../../../store/slices/chatsSlice.ts'
import { addGroups } from '../../../store/slices/groupsSlice.ts'
import ChatChannel from './Channel/ChatChannel.tsx'

const DirectMessages = () => {
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
	const channels = useAppSelector(state => state.chats.channels)
	return (
		<section className={'pt-2.5 pl-2.5 pr-0.5 pb-0'}>
			<div className={'group flex items-center justify-between px-2'}>
				<h4 className={'group-hover:text-[#dbdee1] text-[#949ba4] uppercase text-xs  cursor-default'}>
					Direct Messages
				</h4>
				<div className="flex items-center justify-center w-4 h-4 cursor-pointer relative group group/tooltip">
					<Plus className={'h-2 w-2 group-hover:fill-[#dbdee1] fill-[#949ba4]'} />
					<Tooltip
						text={'Create DM'}
						position={{ vertical: 'center', horizontal: 'left' }}
						space={{ vertical: '0', horizontal: '0' }}
					/>
				</div>
			</div>
			<ul className={'mt-1'}>
				{channels.map(channel => (
					<ChatChannel channel={channel} key={`${channel.id}${channel.type}`} />
				))}
			</ul>
		</section>
	)
}

export default DirectMessages
