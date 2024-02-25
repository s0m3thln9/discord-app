import TextButton from '../UI/Button/TextButton.tsx'
import { Link } from 'react-router-dom'
import { Close, DSLogo, DSNitro, Friends, Headphones, Mic, Plus, Settings, Shop } from '../../../public/svgs.tsx'
import Tooltip from '../UI/Tooltip/Tooltip.tsx'
import SecondaryButton from '../UI/SecondaryButton/SecondaryButton.tsx'
import { useAppDispatch, useAppSelector } from '../../hooks/typedHooks.ts'
import { useGetFriendsQuery, useGetGroupsQuery } from '../../api/api.ts'
import { addFriends } from '../../store/slices/friendsSlice.ts'
import { useEffect } from 'react'
import { addFriendsToChannels, addGroupsToChannels } from '../../store/slices/chatsSlice.ts'
import { addGroups } from '../../store/slices/groupsSlice.ts'

const Content = () => {
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
	}, [friends])

	const channels = useAppSelector(state => state.chats.channels)
	const user = useAppSelector(state => state.auth.user)
	const pathname = window.location.href

	return (
		<aside className={'bg-[#2b2c31]'}>
			<section className={'border-b-[1px] border-[#202225] h-12 pt-2.5 p-2.5'}>
				<TextButton>Find or start a conversation</TextButton>
			</section>
			<div className={'h-[calc(100svh-6.25rem)] w-60 overflow-y-scroll overflow-x-hidden pb-2.5'}>
				<section className={'pt-2.5 pl-2.5 pr-0.5'}>
					<nav>
						<ul>
							<li>
								<Link
									to={'/'}
									className={`group rounded-[0.3125rem] px-2.5 py-[0.8125rem] flex items-center text-[#8e9297] hover:no-underline`}
								>
									<Friends
										className={`group-hover:fill-white fill-[#8e9297] ${pathname === 'http://localhost:5173/' ? 'fill-white' : ''}`}
									/>
									<p
										className={`ml-[1.0625rem] group-hover:text-white ${pathname === 'http://localhost:5173/' ? 'text-white' : ''}`}
									>
										Friends
									</p>
								</Link>
							</li>
							<li className={'mt-0.5'}>
								<Link
									to={'/'}
									className={
										'group rounded-[0.3125rem] px-2.5 py-[0.8125rem] flex items-center text-[#8e9297] hover:no-underline'
									}
								>
									<DSNitro
										className={`group-hover:fill-white fill-[#8e9297] ${pathname === 'http://localhost:5173/nitro' ? 'fill-white' : ''}`}
									/>
									<p
										className={`ml-[1.0625rem] group-hover:text-white ${pathname === 'http://localhost:5173/nitro' ? 'text-white' : ''}`}
									>
										Nitro
									</p>
								</Link>
							</li>
							<li className={'mt-0.5'}>
								<Link
									to={'/'}
									className={
										'group rounded-[0.3125rem] px-2.5 py-[0.8125rem] flex items-center text-[#8e9297] hover:no-underline'
									}
								>
									<Shop
										className={`group-hover:fill-white fill-[#8e9297] ${pathname === 'http://localhost:5173/shop' ? 'fill-white' : ''}`}
									/>
									<p
										className={`ml-[1.0625rem] group-hover:text-white ${pathname === 'http://localhost:5173/shop' ? 'text-white' : ''}`}
									>
										Shop
									</p>
								</Link>
							</li>
						</ul>
					</nav>
				</section>
				<section className={'direct-messages pt-2.5 pl-2.5 pr-0.5 pb-0'}>
					<div className={'group flex items-center justify-between px-2'}>
						<h4 className={'group-hover:text-[#dbdee1] text-[#949ba4] uppercase text-xs  cursor-default'}>
							Direct Messages
						</h4>
						<div className="flex items-center justify-center w-4 h-4 cursor-pointer relative group group/tooltip">
							<Plus className={'h-2 w-2 group-hover:fill-[#dbdee1] fill-[#949ba4]'} />
							{/*<Tooltip
								text={'Create DM'}
								position={{ vertical: 'top', horizontal: 'center' }}
								space={{ vertical: '0', horizontal: '0' }}
							/>*/}
						</div>
					</div>
					<ul className={'mt-1'}>
						{channels.map(channel => (
							<li key={channel.id} className={'pt-0.5'}>
								<Link
									to={'/'}
									className={
										'flex justify-between items-center text-[#949ba4] rounded px-2 h-[2.625rem] hover:no-underline hover:bg-[#35373c] group'
									}
								>
									<div className={'aside-dm-title flex items-center'}>
										<div className={'aside-dm-image-container w-8 h-8 relative'}>
											{channel.image ? (
												<img
													src={channel.image}
													alt="userImage"
													className={'rounded-full h-8'}
												/>
											) : (
												<div
													className={
														'w-8 h-8 rounded-full flex items-center justify-center shrink-0'
													}
													style={{ background: channel.color }}
												>
													<DSLogo width={20} height={20} />
												</div>
											)}

											{channel.type === 'user' ? (
												<div
													className={`status-indicator ${
														channel.onlineStatus === 'offline'
															? 'bg-[#949ba4] before:flex before:h-[0.3rem] before:w-[0.3rem] ' +
																'before:rounded-full'
															: channel.onlineStatus === 'online'
																? 'bg-[#00b35e]'
																: ''
													} absolute bottom-[-0.125rem] right-[-0.125rem] 
														w-4 h-4 rounded-full flex items-center justify-center border-[0.225rem] border-[#2b2c31] group-hover:border-[#35373c] tooltip-container
														 before:bg-[#2b2c31] group-hover:before:bg-[#35373c] group/tooltip`}
												>
													<Tooltip
														text={`${channel.onlineStatus[0].toUpperCase()}${channel.onlineStatus.substring(1)}`}
														position={{ vertical: 'top', horizontal: 'center' }}
														space={{ vertical: '0', horizontal: '0' }}
													/>
												</div>
											) : (
												''
											)}
										</div>
										<p className={'group-hover:text-[#dbdee1] ml-3 font-medium'}>{channel.name}</p>
									</div>
									<div className={'aside-dm-close-btn group p-1 hidden group-hover:flex'}>
										<Close className={'group-hover:fill-[#dbdee1] w-3 h-3'} />
									</div>
								</Link>
							</li>
						))}
					</ul>
				</section>
			</div>
			<section
				className={
					'px-2 py-[0.3125rem] flex items-center justify-between bg-[#232428] h-[3.25rem] text-sm group'
				}
			>
				<div className="user-info rounded py-0 px-0.5 flex items-center w-[55%] hover:bg-[#35373c] h-full group/user">
					<div className="user-info-image-container relative">
						{user?.userImage ? (
							<img src={user?.userImage} alt="" />
						) : (
							<div
								className={'w-8 h-8 rounded-full flex items-center justify-center shrink-0'}
								style={{ background: user?.color }}
							>
								<DSLogo width={20} height={20} />
							</div>
						)}
						<div
							className={`status-indicator ${
								user?.onlineStatus === 'offline'
									? 'bg-[#232428] before:flex before:h-[0.3rem] before:w-[0.3rem] ' +
										'before:rounded-full'
									: user?.onlineStatus === 'online'
										? 'bg-[#00b35e]'
										: ''
							} absolute bottom-[-0.125rem] right-[-0.125rem] 
														w-4 h-4 rounded-full flex items-center justify-center border-[0.225rem] border-[#232428] group-hover/user:border-[#35373c] tooltip-container
														 before:bg-[#2b2c31] group-hover/user:before:bg-[#35373c]`}
						></div>
					</div>
					<div className="title leading-4 grow flex flex-col	justify-between ml-2 w-0">
						<p className={'text-[#f2f3f5] cursor-default'}>{user?.displayName}</p>
						<div className={'h-4 overflow-hidden text-xs text-[#c7c9cb] cursor-default'}>
							<p
								className={
									'overflow-hidden text-ellipsis whitespace-nowrap transition-all group-hover:-translate-y-4 '
								}
							>
								{user?.textStatus}
							</p>
							<p
								className={
									'overflow-hidden text-ellipsis whitespace-nowrap transition-all group-hover:-translate-y-4'
								}
							>
								{user?.username}
							</p>
						</div>
					</div>
				</div>
				<div className={'flex'}>
					<SecondaryButton className={'relative group group/tooltip'}>
						<Mic className={'fill-[#b0b6be] group-hover:fill-[#bbbfc5]'} />
						<Tooltip text={'Mute'} position={{ vertical: 'top', horizontal: 'center' }} />
					</SecondaryButton>
					<SecondaryButton className={'relative group group/tooltip'}>
						<Headphones className={'fill-[#b0b6be] group-hover:fill-[#bbbfc5]'} />
						<Tooltip text={'Deafen'} position={{ vertical: 'top', horizontal: 'center' }} />
					</SecondaryButton>
					<SecondaryButton className={'relative group group/tooltip'}>
						<Settings className={'fill-[#b0b6be] group-hover:fill-[#bbbfc5]'} />
						<Tooltip text={'User Settings'} position={{ vertical: 'top', horizontal: 'center' }} />
					</SecondaryButton>
				</div>
			</section>
		</aside>
	)
}

export default Content
