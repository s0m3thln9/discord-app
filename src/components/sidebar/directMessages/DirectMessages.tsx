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
		<section className={'pb-0 pl-2.5 pr-0.5 pt-2.5'}>
			<div className={'group flex items-center justify-between px-2'}>
				<h4 className={'cursor-default text-xs uppercase text-[#949ba4] group-hover:text-[#dbdee1]'}>
					Direct Messages
				</h4>
				<div className="group flex h-4 w-4 cursor-pointer items-center justify-center">
					<Tooltip
						text={'Create DM'}
						vertical={'center'}
						horizontal={'left'}
						x={'smm'}
						className={'flex items-center justify-center'}
					>
						<Plus className={'h-[0.625rem] w-[0.625rem] fill-[#949ba4] group-hover:fill-[#dbdee1]'} />
					</Tooltip>
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
