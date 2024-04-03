import { Arrow, CopyId, NoNotifications, StatusSmile, SwitchAccounts } from '../../../../assets/svgs.tsx'
import { Indicator } from '../../OnlineStatusIndicator/StatusIndicator.tsx'
import { cn } from '../../../../utils/cn.ts'
import { MouseEventHandler } from 'react'
import PopUpMenu from '../../PopUpMenu/PopUpMenu.tsx'
import Divider from '../../Divider/Divider.tsx'

import { clsx } from 'clsx'

type Props = {
	type: 'status' | 'customStatus' | 'switch' | 'copy'
	label: string
	extraIcon?: boolean
	popUpMenu?: string
	onClick?: MouseEventHandler<HTMLDivElement>
}

const popUpVariants = {
	'status': (
		<>
			<div className={'group/popup flex items-center px-2 py-1.5 rounded-sm hover:bg-[#4752c4]'}>
				<div>
					<Indicator onlineStatus={'online'} color={'popup'} size={'sm'} />
				</div>
				<div className={'ml-2'}>
					<p className={'text-[#b5bac1] group-hover/popup:text-[#fff]'}>Online</p>
				</div>
			</div>
			<Divider className={'mx-1 my-2'} />
			<div className={'group/popup flex items-center px-2 py-1.5 rounded-sm hover:bg-[#4752c4]'}>
				<div>
					<Indicator onlineStatus={'idle'} color={'popup'} size={'sm'} />
				</div>
				<div className={'ml-2'}>
					<p className={'text-[#b5bac1] group-hover/popup:text-[#fff]'}>Idle</p>
				</div>
			</div>
			<div className={'group/popup flex px-2 py-1.5 rounded-sm hover:bg-[#4752c4]'}>
				<div className={'pt-1'}>
					<Indicator onlineStatus={'doNotDisturb'} color={'popup'} size={'sm'} />
				</div>
				<div className={'ml-2'}>
					<p className={'text-[#b5bac1] group-hover/popup:text-[#fff]'}>Do Not Disturb</p>
					<p className={'text-[#b5bac1] group-hover/popup:text-[#fff] text-xs'}>You will not receive any desktop notifications</p>
				</div>
			</div>
			<div className={'group/popup flex px-2 py-1.5 rounded-sm hover:bg-[#4752c4]'}>
				<div className={'pt-1'}>
					<Indicator onlineStatus={'offline'} color={'popup'} size={'sm'} />
				</div>
				<div className={'ml-2'}>
					<p className={'text-[#b5bac1] group-hover/popup:text-[#fff]'}>Invisible</p>
					<p className={'text-[#b5bac1] group-hover/popup:text-[#fff] text-xs'}>You will not appear online, but will have full access to all of Discord</p>
				</div>
			</div>
			<Divider className={'mx-1 my-2'} />
		</>
	),
	'switch': (
		<>

		</>
	)


}


const UserProfileOption = ({ type, label, extraIcon, popUpMenu, onClick }: Props) => {
	return (
		<div
			onClick={onClick}
			className={cn(
				'relative group/option my-0.5 flex min-h-8 w-full cursor-pointer items-center justify-between rounded-sm px-2 py-1.5',
				type === 'copy' ? 'hover:bg-[#4752c4]' : 'hover:bg-[#232528]',
			)}
		>
			<div className={'relative mr-2 flex h-5 w-5 items-center justify-center'}>
				{type === 'status' ? (
					<Indicator onlineStatus={'online'} color={'option'} />
				) : type === 'customStatus' ? (
					<StatusSmile width={18} height={18} />
				) : type === 'switch' ? (
					<SwitchAccounts className={'fill-[#b5bac1] group-hover/option:fill-[#fff]'}></SwitchAccounts>
				) : type === 'copy' ? (
					<CopyId className={'fill-[#b5bac1] group-hover/option:fill-[#fff]'}></CopyId>
				) : (
					<></>
				)}
			</div>
			<div className={'flex flex-auto items-center justify-between'}>
				<p className={type === 'copy' ? 'group-hover/option:text-[#fff]' : 'group-hover/option:text-[#dbdee1]'}>{label}</p>
				{extraIcon && <NoNotifications />}
			</div>
			<div className={'ml-2 flex items-center'}>
				{popUpMenu && <Arrow className={'-rotate-90 stroke-[#b5bac1] group-hover/option:stroke-[#dbdee1]'} />}
				{popUpMenu && (
					<PopUpMenu>
						{popUpVariants[popUpMenu]}
					</PopUpMenu>
				)}
			</div>
		</div>
	)
}

export default UserProfileOption
