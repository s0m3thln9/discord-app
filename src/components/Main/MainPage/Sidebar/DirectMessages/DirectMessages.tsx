import Tooltip from '../../../../UI/Tooltip/Tooltip.tsx'
import DirectMessage from './Channel/DirectMessage.tsx'
import { useAppDispatch, useAppSelector } from '../../../../../hooks/typedHooks.ts'
import { useGetChatsMutation, useGetFriendsMutation, useGetGroupsMutation } from '../../../../../api/api.ts'
import {
	addFriendsToDirectMessages,
	addGroupsToDirectMessages,
} from '../../../../../store/slices/directMessagesSlice.ts'
import { useEffect } from 'react'
import { addFriends } from '../../../../../store/slices/friendsSlice.ts'
import { addGroups } from '../../../../../store/slices/groupsSlice.ts'
import { Plus } from '../../../../../assets/svgs.tsx'
import { addChats } from '../../../../../store/slices/chatsSlice.ts'

const DirectMessages = () => {
	const isAuth = useAppSelector(state => state.auth.isAuth)
	const [friendsQuery] = useGetFriendsMutation()
	const [groupsQuery] = useGetGroupsMutation()
	const [getChats] = useGetChatsMutation()
	const dispatch = useAppDispatch()

	const fetchData = async () => {
		const friendsResponse = await friendsQuery().unwrap()
		const groupsResponse = await groupsQuery().unwrap()
		const getChatsResponse = await getChats().unwrap()

		//console.log('getChatsResponse', getChatsResponse)

		if (!groupsResponse.success || !friendsResponse.success || !getChatsResponse.success) {
			return
		}

		dispatch(addFriends(friendsResponse))
		dispatch(addGroups(groupsResponse))

		dispatch(addFriendsToDirectMessages(friendsResponse.payload?.friends || []))
		dispatch(addGroupsToDirectMessages(groupsResponse.payload?.groups || []))
		dispatch(addChats(getChatsResponse.payload?.chats || []))
	}

	useEffect(() => {
		fetchData().then()
	}, [friendsQuery, groupsQuery, getChats, dispatch])

	const directMessages = useAppSelector(state => state.directMessages.directMessages)

	if (!isAuth) {
		return <p>Loading...</p>
	}

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
						x={'-sm'}
						className={'flex items-center justify-center'}
					>
						<Plus className={'h-[0.625rem] w-[0.625rem] fill-[#949ba4] group-hover:fill-[#dbdee1]'} />
					</Tooltip>
				</div>
			</div>
			<ul className={'mt-1'}>
				{directMessages.map(directMessage => (
					<DirectMessage
						chatId={directMessage.chatId}
						directMessage={directMessage}
						key={directMessage.chatId}
					/>
				))}
			</ul>
		</section>
	)
}

export default DirectMessages
