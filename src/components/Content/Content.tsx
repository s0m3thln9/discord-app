import TextButton from '../UI/Button/TextButton.tsx'
import HomeNavigation from '../sidebar/HomeNavigation/HomeNavigation.tsx'
import DirectMessages from '../sidebar/directMessages/DirectMessages.tsx'
import UserInfo from '../sidebar/UserInfo/UserInfo.tsx'
import { Friends, Help, Inbox, Message, More, NewDMGroup } from '../../../public/svgs.tsx'
import IconButton from '../UI/Button/IconButton.tsx'
import Tooltip from '../UI/Tooltip/Tooltip.tsx'
import { useAppSelector } from '../../hooks/typedHooks.ts'
import UserImage from '../UI/UserImage/UserImage.tsx'

const Content = () => {
	const friends = useAppSelector(state => state.friends.friends)

	return (
		<>
			<aside className={'bg-sidebar'}>
				<section className={'border-b-[1px] border-[#202225] h-12 pt-2.5 p-2.5'}>
					<TextButton className={'h-7'} variant={'dark'}>
						Find or start a conversation
					</TextButton>
				</section>
				<div className={'h-[calc(100svh-6.25rem)] w-60 overflow-y-scroll overflow-x-hidden pb-2.5'}>
					<HomeNavigation />
					<DirectMessages />
				</div>
				<UserInfo />
			</aside>
			<main className={'grow'}>
				<section
					className={'border-b-[1px] border-[#202225] h-12 pt-2.5 p-2.5 flex items-center justify-between'}
				>
					<div className={'flex items-center'}>
						<div className={'flex items-center'}>
							<Friends fill={'#80848e'} className={'mx-2'} />
							<h2 className={'font-semibold text-[#f2f3f5] cursor-default'}>Friends</h2>
						</div>
						<ul className={'flex before:w-[1px] before:ml-4 before:mr-2 h-6 before:bg-[#3f4147]'}>
							<li className={'flex mx-2'}>
								<TextButton active>Online</TextButton>
							</li>
							<li className={'flex mx-2'}>
								<TextButton>All</TextButton>
							</li>
							<li className={'flex mx-2'}>
								<TextButton>Pending</TextButton>
							</li>
							<li className={'flex mx-2'}>
								<TextButton>Blocked</TextButton>
							</li>
							<li className={'flex mx-2'}>
								<TextButton variant={'green'}>Add Friend</TextButton>
							</li>
						</ul>
					</div>
					<div className={'flex items-center'}>
						<IconButton className={'relative group/tooltip mx-2'}>
							<NewDMGroup fill={'#b5bac1'} className={'group-hover:fill-[#dbdee1]'} />
							<Tooltip text={'New Group DM'} position={{ vertical: 'bottom', horizontal: 'center' }} />
						</IconButton>
						<IconButton
							className={
								'flex relative group/tooltip mx-2 before:w-[1px] before:mr-4 before:bg-[#3f4147] before:h-6'
							}
						>
							<Inbox fill={'#b5bac1'} className={'group-hover:fill-[#dbdee1]'} />
							<Tooltip text={'Inbox'} position={{ vertical: 'bottom', horizontal: 'center' }} />
						</IconButton>
						<IconButton className={'relative group/tooltip mx-2'}>
							<Help fill={'#b5bac1'} className={'group-hover:fill-[#dbdee1]'} />
							<Tooltip text={'Help'} position={{ vertical: 'bottom', horizontal: 'center' }} />
						</IconButton>
					</div>
				</section>
				<div className={'flex h-[calc(100svh-3rem)]'}>
					<section className={'flex flex-col grow'}>
						<input
							type="text"
							placeholder={'Search'}
							className={'bg-[#1e1f22] mt-4 mr-5 ml-[1.875rem] rounded px-2 h-[1.875rem] text-[#f2f3f5]'}
						/>
						<h2 className={'mt-4 mr-5 mb-2 ml-[1.875rem] uppercase text-[#b5bac1] font-semibold text-xs'}>
							Online - {friends.length}
						</h2>
						<ul className={'grow overflow-y-scroll'}>
							{friends.map(friend => (
								<li key={friend.id}>
									<div
										className={
											'ml-5 mr-5 hover:bg-hover flex items-center justify-between group h-[3.875rem] rounded-lg px-2.5'
										}
									>
										<div className={'flex'}>
											<UserImage
												image={friend.userImage || ''}
												color={friend.color}
												onlineStatus={friend.onlineStatus}
											/>
											<div className={'flex flex-col justify-between ml-3'}>
												<p className={'leading-4 text-[#f2f3f5]'}>
													{friend.displayName}{' '}
													<span className={'hidden group-hover:inline-block text-[#b5bac1]'}>
														{friend.username}
													</span>
												</p>
												<p className={'text-sm leading-4 text-[#b5bac1]'}>
													{friend.onlineStatus[0].toUpperCase()}
													{friend.onlineStatus.substring(1)}
												</p>
											</div>
										</div>
										<div className={'flex'}>
											<IconButton variant={'dark'}>
												<Message
													className={
														'group-hover/iconBtn:fill-[#dbdee1] fill-[#b5bac1] w-5 h-5'
													}
												/>
											</IconButton>
											<IconButton variant={'dark'} className={'ml-2'}>
												<More
													className={
														'group-hover/iconBtn:fill-[#dbdee1] fill-[#b5bac1] w-5 h-5'
													}
												/>
											</IconButton>
										</div>
									</div>
								</li>
							))}
						</ul>
					</section>
					<section className={'w-[22.5rem] p-4 border-l-[1px] border-l-[#3b3d43]'}>
						<h2 className={'mt-2 mb-4 text-[#f2f3f5] text-xl font-extrabold'}>Active Now</h2>
					</section>
				</div>
			</main>
		</>
	)
}

export default Content
