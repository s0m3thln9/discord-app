import { Headphones, HeadphonesOff, Mic, MicOff, Settings } from '../../../../../../public/svgs.tsx'
import Tooltip from '../../../../UI/Tooltip/Tooltip.tsx'
import { useAppSelector } from '../../../../../hooks/typedHooks.ts'
import UserImage from '../../../../UI/UserImage/UserImage.tsx'
import Button from '../../../../UI/Button/Button.tsx'
import { useState } from 'react'

type Props = {
	toggleSettings: () => void
}

const UserInfo = ({ toggleSettings }: Props) => {

	const user = useAppSelector(state => state.auth.user)

	const [isMicEnabled, setIsMicEnabled] = useState(true)
	const [isMicDisabledWithHeadphones, setIsMicDisabledWithHeadphones] = useState(false)
	const [isHeadphonesEnabled, setIsHeadphonesEnabled] = useState(true)

	const toggleMic = () => {
		const sound = isMicEnabled ? new Audio('/public/audio/mute.mp3') : new Audio('/public/audio/unmute.mp3')
		sound.volume = 0.2
		setIsMicEnabled((isMicEnabledPrev) => !isMicEnabledPrev)
		if (!isHeadphonesEnabled) {
			toggleHeadphones()
			return
		}
		sound.play().catch((error) => console.log(error))
	}

	const toggleHeadphones = () => {
		const sound = isHeadphonesEnabled ? new Audio('/public/audio/deafen.mp3') : new Audio('/public/audio/undeafen.mp3')
		sound.volume = 0.2
		setIsHeadphonesEnabled((isHeadphonesEnabledPrev) => !isHeadphonesEnabledPrev)
		if (isMicDisabledWithHeadphones) {
			setIsMicEnabled(true)
			setIsMicDisabledWithHeadphones(false)
		} else if (isMicEnabled) {
			setIsMicEnabled(false)
			setIsMicDisabledWithHeadphones(true)
		}
		sound.play().catch((error) => console.log(error))
	}

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
					<Button variant={'secondary'} className={'group'} onClick={toggleMic}>
						{isMicEnabled ?
							<Mic className={'fill-[#b0b6be] group-hover:fill-[#bbbfc5]'} />
							:
							<MicOff className={'fill-[#ec3e40] group-hover:fill-[#eb3d40]'} />
						}
					</Button>
				</Tooltip>
				<Tooltip text={'Deafen'} vertical={'top'} horizontal={'center'} y={'smm'}>
					<Button variant={'secondary'} className={'group'} onClick={toggleHeadphones}>
						{isHeadphonesEnabled ?
							<Headphones className={'fill-[#b0b6be] group-hover:fill-[#bbbfc5]'} />
							:
							<HeadphonesOff className={'fill-[#ec3e40] group-hover:fill-[#eb3d40]'} />
						}
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
