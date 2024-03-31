import Tooltip from '../../../../UI/Tooltip/Tooltip.tsx'
import { useAppSelector } from '../../../../../hooks/typedHooks.ts'
import UserImage from '../../../../UI/UserImage/UserImage.tsx'
import Button from '../../../../UI/Button/Button.tsx'
import React, { useState } from 'react'
import { Headphones, HeadphonesOff, Mic, MicOff, Settings } from '../../../../../assets/svgs.tsx'
import mute from '../../../../../assets/audio/mute.mp3'
import unmute from '../../../../../assets/audio/unmute.mp3'
import deafen from '../../../../../assets/audio/deafen.mp3'
import undeafen from '../../../../../assets/audio/undeafen.mp3'
import UserPopover from '../../../../UI/UserPopover/UserPopover.tsx'

type Props = {
	toggleSettings: () => void
}

const UserInfo = ({ toggleSettings }: Props) => {
	const user = useAppSelector(state => state.auth.user)

	const [isMicEnabled, setIsMicEnabled] = useState(true)
	const [isMicDisabledWithHeadphones, setIsMicDisabledWithHeadphones] = useState(false)
	const [isHeadphonesEnabled, setIsHeadphonesEnabled] = useState(true)
	const [isUserPopoverOpen, setIsUserPopoverOpen] = useState(false)

	const toggleMic = () => {
		const sound = isMicEnabled ? new Audio(mute) : new Audio(unmute)
		sound.volume = 0.2
		setIsMicEnabled(isMicEnabledPrev => !isMicEnabledPrev)
		if (!isHeadphonesEnabled) {
			toggleHeadphones()
			return
		}
		sound.play().catch(error => console.log(error))
	}

	const toggleHeadphones = () => {
		const sound = isHeadphonesEnabled ? new Audio(deafen) : new Audio(undeafen)
		sound.volume = 0.2
		setIsHeadphonesEnabled(isHeadphonesEnabledPrev => !isHeadphonesEnabledPrev)
		if (isMicDisabledWithHeadphones) {
			setIsMicEnabled(true)
			setIsMicDisabledWithHeadphones(false)
		} else if (isMicEnabled) {
			setIsMicEnabled(false)
			setIsMicDisabledWithHeadphones(true)
		}
		sound.play().catch(error => console.log(error))
	}

	const handleClick = e => {
		e.stopPropagation()
		setIsUserPopoverOpen(isUserPopoverOpenPrev => !isUserPopoverOpenPrev)
		sound.play().catch(error => console.log(error))
	}

	if (!user) {
		return <p>Loading...</p>
	}

	return (
		<section
			className={
				'group/userInfo relative flex h-[3.25rem] items-center justify-between bg-[#232428] px-2 py-[0.3125rem] text-sm'
			}
		>
			<UserPopover isUserPopoverOpen={isUserPopoverOpen} setIsUserPopoverOpen={setIsUserPopoverOpen} />
			<div
				className="group flex h-full w-[55%] cursor-pointer items-center rounded px-0.5 py-0 hover:bg-[#35373c]"
				onClick={handleClick}
			>
				<UserImage
					image={user?.userImage || ''}
					color={user?.color}
					onlineStatus={user?.onlineStatus}
					bgColor={'userInfo'}
					size={'sm'}
				/>
				<div className="title ml-2 flex w-0 grow flex-col justify-between leading-4">
					<p className={'w-full cursor-default overflow-hidden text-ellipsis whitespace-nowrap text-white'}>
						{user?.displayName}
					</p>
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
				<Tooltip text={isMicEnabled ? 'Turn Off Microphone' : 'Turn On Microphone'}>
					<Button variant={'secondary'} className={'group'} onClick={toggleMic}>
						{isMicEnabled ? (
							<Mic className={'fill-[#b0b6be] group-hover:fill-[#bbbfc5]'} />
						) : (
							<MicOff className={'fill-[#ec3e40] group-hover:fill-[#eb3d40]'} />
						)}
					</Button>
				</Tooltip>
				<Tooltip text={isHeadphonesEnabled ? 'Deafen' : 'Undeafen'}>
					<Button variant={'secondary'} className={'group'} onClick={toggleHeadphones}>
						{isHeadphonesEnabled ? (
							<Headphones className={'fill-[#b0b6be] group-hover:fill-[#bbbfc5]'} />
						) : (
							<HeadphonesOff className={'fill-[#ec3e40] group-hover:fill-[#eb3d40]'} />
						)}
					</Button>
				</Tooltip>
				<Tooltip text={'User Settings'}>
					<Button variant={'secondary'} className={'group'} onClick={toggleSettings}>
						<Settings className={'fill-[#b0b6be] group-hover:fill-[#bbbfc5]'} />
					</Button>
				</Tooltip>
			</div>
		</section>
	)
}

export default UserInfo
