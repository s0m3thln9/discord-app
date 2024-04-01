import Header from './Header/Header.tsx'
import Chat from '../../../../Chat/Chat.tsx'
import { useAppSelector } from '../../../../../hooks/typedHooks.ts'
import { useParams } from 'react-router-dom'
import { NoImageColors } from '../../../../../types/user.ts'
import UserImage from '../../../../UI/UserImage/UserImage.tsx'
import { clsx } from 'clsx'
import { useState } from 'react'
import { Crown } from '../../../../../assets/svgs.tsx'
import Tooltip from '../../../../UI/Tooltip/Tooltip.tsx'

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
	const [isShowMembers, setIsShowMembers] = useState(true)
	if (!chat || !user) return null

	const friend = chat.participants.find(participant => participant.id !== user.id)

	const toggleMembersShow = () => {
		setIsShowMembers(prev => !prev)
	}

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
			<Header header={header} toggleMembersShow={toggleMembersShow} isShowMembers={isShowMembers} />
			<div className={'flex grow'}>
				<Chat type={type} chat={chat} header={header} user={user} />
				{isShowMembers && type === 'group' && (
					<div className={'w-[15rem] bg-sidebar'}>
						<h4 className={'pl-4 pr-2 pt-6 text-xs font-semibold uppercase text-[#949ba4]'}>
							members—{chat.participants.length}
						</h4>
						<ul>
							{chat.participants.map(participant => (
								<li
									key={participant.id}
									className={clsx(
										'group mx-2 flex h-11 cursor-pointer items-center rounded px-2 hover:bg-hover hover:opacity-100',
										participant.onlineStatus === 'offline' && 'opacity-50',
									)}
								>
									<UserImage
										image={participant.userImage}
										color={participant.color}
										onlineStatus={
											participant.onlineStatus !== 'offline' ? participant.onlineStatus : false
										}
										bgColor={'sidebar'}
										tooltip={true}
										size={'md'}
									/>
									<div className={'ml-3 text-[#949ba4]'}>
										<div className={'flex items-center'}>
											<p className={'text-base leading-5 group-hover:text-white'}>
												{participant.displayName}
											</p>
											{group?.ownerId === participant.id && (
												<Tooltip text={'Group Owner'} className={'ml-1'}>
													<Crown fill={'#f0b132'} className={'h-[0.875rem] w-[0.875rem]'} />
												</Tooltip>
											)}
										</div>
										<p className={'text-xs leading-4'}>{participant.textStatus}</p>
									</div>
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</div>
	)
}

export default FriendPage
