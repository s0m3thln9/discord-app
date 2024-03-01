import { Headphones, Mic, Settings } from '../../../../public/svgs.tsx'
import SecondaryButton from '../../UI/Button/SecondaryButton.tsx'
import Tooltip from '../../UI/Tooltip/Tooltip.tsx'
import { useAppSelector } from '../../../hooks/typedHooks.ts'
import UserImage from '../../UI/UserImage/UserImage.tsx'

const UserInfo = () => {
	const user = useAppSelector(state => state.auth.user)
	if (!user) {
		return <p>Loading...</p>
	}
	return (
		<section
			className={
				'px-2 py-[0.3125rem] flex items-center justify-between bg-[#232428] h-[3.25rem] text-sm group/userInfo'
			}
		>
			<div className="rounded py-0 px-0.5 flex items-center w-[55%] hover:bg-[#35373c] h-full group">
				<UserImage image={user?.userImage || ''} color={user?.color} onlineStatus={user?.onlineStatus} />
				<div className="title leading-4 grow flex flex-col	justify-between ml-2 w-0">
					<p className={'text-[#f2f3f5] cursor-default'}>{user?.displayName}</p>
					<div className={'h-4 overflow-hidden text-xs text-[#c7c9cb] cursor-default'}>
						<p
							className={
								'overflow-hidden text-ellipsis whitespace-nowrap transition-all group-hover/userInfo:-translate-y-4 '
							}
						>
							{user?.textStatus}
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
	)
}

export default UserInfo
