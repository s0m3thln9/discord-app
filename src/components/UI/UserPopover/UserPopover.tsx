import UserImage from '../UserImage/UserImage.tsx'
import { CopyUsername, Edit } from '../../../assets/svgs.tsx'
import { useAppSelector } from '../../../hooks/typedHooks.ts'
import hypeSquadBalance from '../../../assets/img/hype-squad-balance.png'
import Divider from '../Divider/Divider.tsx'
import UserProfileOption from './UserProfileOption/UserProfileOption.tsx'
import Tooltip from '../Tooltip/Tooltip.tsx'
import { cn } from '../../../utils/cn.ts'
import { useEffect, useRef, useState } from 'react'

const UserPopover = ({ isUserPopoverOpen, setIsUserPopoverOpen }) => {

	const user = useAppSelector(state => state.auth.user)

	const [copyTooltip, setCopyTooltip] = useState({text: 'Click to copy username', bg: 'default'})

	const popoverRef = useRef(null)

	const regDate = user?.createdAt ? new Date(user.createdAt).toLocaleDateString(
		'en-US',
		{
			year: 'numeric',
			month: 'short',
			day: 'numeric',
		},
	) : null

	useEffect(() => {
		const handleClickAway = (e) => {
			if (!popoverRef.current.contains(e.target)) setIsUserPopoverOpen(false)
		}

		document.addEventListener('click', handleClickAway)

		return () => document.removeEventListener('click', handleClickAway)
	})

	const copyUsername = () => {
		if (user) navigator.clipboard.writeText(user.username).then()
		setCopyTooltip({text: 'Copied!', bg: 'green'})
		setTimeout(() => setCopyTooltip({text: 'Click to copy username', bg: 'default'}), 1000)
	}

	const copyUserId = () => {
		if (user) navigator.clipboard.writeText(user.id.toString()).then()
		setIsUserPopoverOpen(false)
	}

	if (!user) return null

	return (
		<div ref={popoverRef} className={cn('w-[21.25rem] rounded-lg shadow-div bg-user-info absolute -top-2 -left-6 -translate-y-full z-10', isUserPopoverOpen ? 'opacity-100' : 'opacity-0')}>
			<div className={'h-[3.75rem] rounded-tl-lg rounded-tr-lg bg-[#17181c] flex justify-end'}>
				<div
					className={'bg-[#101114] hover:bg-[#090a0b] rounded-full w-7 h-7 cursor-pointer p-[0.3125rem] mr-3 mt-3'}>
					<Tooltip text={'Edit Profile'} vertical={'top'} horizontal={'center'} y={'xsm'}>
						<Edit width={18} height={18} />
					</Tooltip>
				</div>
			</div>
			<div className={'flex bg-user-info justify-between'}>
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
				<div className={'w-[1.875rem] h-[1.875rem] bg-[#111214] rounded-lg p-1 cursor-pointer mr-4 mt-3'}>
					<Tooltip text={'HypeSquad Balance'} vertical={'top'} horizontal={'center'} y={'smm'}>
						<img className={'w-[1.375rem] h-[1.375rem]'} src={hypeSquadBalance} alt="" />
					</Tooltip>
				</div>
			</div>
			<div className={'-mt-8 mx-4 mb-4 bg-[#111214] rounded-lg'}>
				<Tooltip text={copyTooltip.text} horizontal={'center'} vertical={'top'} y={'xs'} className={'w-fit'} bg={copyTooltip.bg}>
					<div className={'flex w-fit cursor-pointer group'} onClick={copyUsername}>
						<div className={'pl-3 pt-3'}>
							<h2 className={'break-words text-xl font-semibold text-white'}>{user.displayName}</h2>
							<p className={'break-all text-clip text-white'}>{user.username}</p>
						</div>
						<div className={'pt-[1.125rem] pl-1'}>
							<CopyUsername className={'opacity-0 group-hover:opacity-100'}/>
						</div>
					</div>
				</Tooltip>
				<Divider className={'mt-3 mx-3'} />
				<div className={'px-3 pt-3'}>
					<h3 className={'uppercase text-white text-xs font-bold'}>Discord member since</h3>
					<p className={'text-[#dbdee1] mt-1'}>{regDate}</p>
				</div>
				<Divider className={'mt-3 mx-3'} />
				<div className={'py-1.5 px-2'}>
					<UserProfileOption type={'status'} label={'Online'} extraIcon={true} optionPopover={true} />
					<UserProfileOption type={'customStatus'} label={'Set Custom Status'} />
					<Divider className={'my-2 mx-1'} />
					<UserProfileOption type={'switch'} label={'Switch Accounts'} optionPopover={true} />
					<Divider className={'my-2 mx-1'} />
					<UserProfileOption type={'copy'} label={'Copy User ID'} onClick={copyUserId}/>
				</div>
			</div>
		</div>
	)
}

export default UserPopover