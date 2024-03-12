import { Headphones, Mic, Settings } from '../../../../../../public/svgs.tsx'
import Tooltip from '../../../../UI/Tooltip/Tooltip.tsx'
import { useAppSelector } from '../../../../../hooks/typedHooks.ts'
import UserImage from '../../../../UI/UserImage/UserImage.tsx'
import Button from '../../../../UI/Button/Button.tsx'

type Props = {
	toggleSettings: () => void
}

const UserInfo = ({ toggleSettings }: Props) => {
	const user = useAppSelector(state => state.auth.user)
	if (!user) {
		return <p>Loading...</p>
	}
	return (
		<section
			className={
				'group/userInfo flex h-[3.25rem] items-center justify-between bg-[#232428] px-2 py-[0.3125rem] text-sm'
			}
		>
			<div className="group flex h-full w-[55%] items-center rounded px-0.5 py-0 hover:bg-[#35373c]">
				<UserImage
					image={user?.userImage || ''}
					color={user?.color}
					onlineStatus={user?.onlineStatus}
					bgColor={'userInfo'}
					size={'md'}
				/>
				<div className="title ml-2 flex w-0 grow	flex-col justify-between leading-4">
					<p className={'cursor-default text-white'}>{user?.displayName}</p>
					<div className={'h-4 cursor-default overflow-hidden text-xs text-[#c7c9cb]'}>
						<p
							className={
								'overflow-hidden text-ellipsis whitespace-nowrap transition-all group-hover/userInfo:-translate-y-4 '
							}
						>
							{user?.textStatus || user?.onlineStatus}
						</p>
						<p
							className={
								'overflow-hidden text-ellipsis whitespace-nowrap transition-all group-hover/userInfo:-translate-y-4'
							}
						>
							{user?.username}
						</p>
					</div>
				</div>
			</div>
			<div className={'flex'}>
				<Tooltip text={'Mute'} vertical={'top'} horizontal={'center'} y={'smm'}>
					<Button variant={'secondary'} className={'group'}>
						<Mic className={'fill-[#b0b6be] group-hover:fill-[#bbbfc5]'} />
					</Button>
				</Tooltip>
				<Tooltip text={'Deafen'} vertical={'top'} horizontal={'center'} y={'smm'}>
					<Button variant={'secondary'} className={'group'}>
						<Headphones className={'fill-[#b0b6be] group-hover:fill-[#bbbfc5]'} />
					</Button>
				</Tooltip>
				<Tooltip text={'User Settings'} vertical={'top'} horizontal={'center'} y={'smm'}>
					<Button variant={'secondary'} className={'group'} onClick={toggleSettings}>
						<Settings className={'fill-[#b0b6be] group-hover:fill-[#bbbfc5]'} />
					</Button>
				</Tooltip>
			</div>
		</section>
	)
}

export default UserInfo
