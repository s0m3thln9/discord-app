import UserImage from '../UserImage/UserImage.tsx'
import { CopyUsername, Edit } from '../../../assets/svgs.tsx'
import { useAppSelector } from '../../../hooks/typedHooks.ts'
import hypeSquadBalance from '../../../assets/img/hype-squad-balance.png'
import Divider from '../Divider/Divider.tsx'
import UserProfileOption from './UserProfileOption/UserProfileOption.tsx'
import Tooltip, { TooltipBackgroundType } from '../Tooltip/Tooltip.tsx'
import { useEffect, useRef, useState } from 'react'
import { clsx } from 'clsx'
import { TimeoutId } from '@reduxjs/toolkit/dist/query/core/buildMiddleware/types'

interface ICopyTooltip {
	text: string
	bg: TooltipBackgroundType
	animation: boolean
}

const copyTooltipVariations: ICopyTooltip[] = [
	{ text: 'Click to copy username', bg: 'default', animation: false },
	{ text: 'Copied!', bg: 'green', animation: false },
	{ text: 'Double Copy!', bg: 'green', animation: false },
	{ text: 'Triple Copy!', bg: 'green', animation: false },
	{ text: 'Dominating!!', bg: 'green', animation: false },
	{ text: 'Rampage!!', bg: 'green', animation: false },
	{ text: 'Mega Copy!!', bg: 'green', animation: false },
	{ text: 'Unstoppable!!', bg: 'green', animation: false },
	{ text: 'Wicked Sick!!', bg: 'green', animation: false },
	{ text: 'Monster Copy!!!', bg: 'green', animation: false },
	{ text: 'GODLIKE!!!', bg: 'red', animation: true },
	{ text: 'BEYOND GODLIKE!!!!', bg: 'red', animation: true },
]

const UserPopover = ({ isUserPopoverOpen, setIsUserPopoverOpen }) => {
	const user = useAppSelector(state => state.auth.user)

	const [countOfClicks, setCountOfClicks] = useState(1)
	const [copyTooltip, setCopyTooltip] = useState<ICopyTooltip>(copyTooltipVariations[0])

	const popoverRef = useRef(null)
	const returnTooltipTimeoutRef = useRef<TimeoutId>(null)
	const closeTooltipTimeoutRef = useRef<TimeoutId>(null)

	const regDate = user?.createdAt
		? new Date(user.createdAt).toLocaleDateString('en-US', {
				year: 'numeric',
				month: 'short',
				day: 'numeric',
			})
		: null

	useEffect(() => {
		const handleClickAway = e => {
			if (!popoverRef.current.contains(e.target)) setIsUserPopoverOpen(false)
		}

		document.addEventListener('click', handleClickAway)

		return () => document.removeEventListener('click', handleClickAway)
	})

	const copyUsername = (show, close) => {
		if (user) navigator.clipboard.writeText(user.username).then()
		if (returnTooltipTimeoutRef.current) {
			clearTimeout(returnTooltipTimeoutRef.current)
			returnTooltipTimeoutRef.current = null
		}
		if (closeTooltipTimeoutRef.current) {
			clearTimeout(closeTooltipTimeoutRef.current)
			closeTooltipTimeoutRef.current = null
		}

		setCountOfClicks(
			countOfClicks < copyTooltipVariations.length - 1 ? countOfClicks + 1 : copyTooltipVariations.length - 1,
		)
		setCopyTooltip(copyTooltipVariations[countOfClicks])

		show()

		returnTooltipTimeoutRef.current = setTimeout(() => {
			setCountOfClicks(1)
			setCopyTooltip(copyTooltipVariations[0])
		}, 1100)
		closeTooltipTimeoutRef.current = setTimeout(() => {
			close()
		}, 1000)
	}

	const copyUserId = () => {
		if (user) navigator.clipboard.writeText(user.id.toString()).then()
		setIsUserPopoverOpen(false)
	}

	if (!user) return null

	return (
		<div
			ref={popoverRef}
			className={clsx(
				'absolute -left-6 -top-2 z-10 w-[21.25rem] -translate-y-full rounded-lg bg-user-info shadow-div',
				isUserPopoverOpen ? 'opacity-100' : 'pointer-events-none opacity-0',
			)}
		>
			<div className={'flex h-[3.75rem] justify-end rounded-tl-lg rounded-tr-lg bg-[#17181c]'}>
				<div
					className={
						'mr-3 mt-3 h-7 w-7 cursor-pointer rounded-full bg-[#101114] p-[0.3125rem] hover:bg-[#090a0b]'
					}
				>
					<Tooltip text={'Edit Profile'}>
						<Edit width={18} height={18} />
					</Tooltip>
				</div>
			</div>
			<div className={'flex justify-between bg-user-info'}>
				<UserImage
					image={user.userImage || ''}
					color={user.color}
					onlineStatus={user.onlineStatus}
					bgColor={'userInfo'}
					size={'lg'}
					border={'user-info'}
					className={'ml-4 -translate-y-[3rem]'}
					tooltip={true}
					hover={'View Profile'}
				/>
				<div className={'mr-4 mt-3 h-[1.875rem] w-[1.875rem] cursor-pointer rounded-lg bg-[#111214] p-1'}>
					<Tooltip text={'HypeSquad Balance'}>
						<img className={'h-[1.375rem] w-[1.375rem]'} src={hypeSquadBalance} alt="" />
					</Tooltip>
				</div>
			</div>
			<div className={'mx-4 -mt-8 mb-4 rounded-lg bg-[#111214]'}>
				<Tooltip
					text={copyTooltip.text}
					bg={copyTooltip.bg}
					className={'w-fit'}
					click={copyUsername}
					animation={copyTooltip.animation}
				>
					<div className={'group flex w-fit cursor-pointer'}>
						<div className={'pl-3 pt-3'}>
							<h2 className={'break-words text-xl font-semibold text-white'}>{user.displayName}</h2>
							<p className={'text-clip break-all text-white'}>{user.username}</p>
						</div>
						<div className={'pl-1 pt-[1.125rem]'}>
							<CopyUsername className={'opacity-0 group-hover:opacity-100'} />
						</div>
					</div>
				</Tooltip>
				<Divider className={'mx-3 mt-3'} />
				<div className={'px-3 pt-3'}>
					<h3 className={'text-xs font-bold uppercase text-white'}>Discord member since</h3>
					<p className={'mt-1 text-[#dbdee1]'}>{regDate}</p>
				</div>
				<Divider className={'mx-3 mt-3'} />
				<div className={'px-2 py-1.5'}>
					<UserProfileOption type={'status'} label={'Online'} extraIcon={true} optionPopover={true} />
					<UserProfileOption type={'customStatus'} label={'Set Custom Status'} />
					<Divider className={'mx-1 my-2'} />
					<UserProfileOption type={'switch'} label={'Switch Accounts'} optionPopover={true} />
					<Divider className={'mx-1 my-2'} />
					<UserProfileOption type={'copy'} label={'Copy User ID'} onClick={copyUserId} />
				</div>
			</div>
		</div>
	)
}

export default UserPopover
