import { Arrow, CopyId, NoNotifications, StatusSmile, SwitchAccounts } from '../../../../assets/svgs.tsx'
import { Indicator } from '../../OnlineStatusIndicator/StatusIndicator.tsx'
import OptionPopover from '../../OptionPopover/OptionPopover.tsx'
import { cn } from '../../../../utils/cn.ts'
import { MouseEventHandler } from 'react'

type Props = {
	type: 'status' | 'customStatus' | 'switch' | 'copy'
	label: string
	extraIcon?: boolean
	optionPopover?: unknown
	onClick?: MouseEventHandler<HTMLDivElement>
}

const UserProfileOption = ({ type, label, extraIcon, optionPopover, onClick }: Props) => {
	return (
		<div
			onClick={onClick}
			className={cn(
				'group my-0.5 flex min-h-8 w-full cursor-pointer items-center justify-between rounded-sm px-2 py-1.5',
				type === 'copy' ? 'hover:bg-[#4752c4]' : 'hover:bg-[#232528]',
			)}
		>
			<div className={'relative mr-2 flex h-5 w-5 items-center justify-center'}>
				{type === 'status' ? (
					<Indicator onlineStatus={'online'} hover={'option'} color={'user-info'} />
				) : type === 'customStatus' ? (
					<StatusSmile width={18} height={18} />
				) : type === 'switch' ? (
					<SwitchAccounts className={'fill-[#b5bac1] group-hover:fill-[#dbdee1]'}></SwitchAccounts>
				) : type === 'copy' ? (
					<CopyId className={'fill-[#b5bac1] group-hover:fill-[#fff]'}></CopyId>
				) : (
					<></>
				)}
			</div>
			<div className={'flex flex-auto items-center justify-between'}>
				<p className={'group-hover:text-[#dbdee1]'}>{label}</p>
				{extraIcon && <NoNotifications />}
			</div>
			<div className={'ml-2 flex items-center'}>
				{optionPopover && <Arrow className={'-rotate-90 stroke-[#b5bac1] group-hover:stroke-[#dbdee1]'} />}
				{optionPopover && <OptionPopover />}
			</div>
		</div>
	)
}

export default UserProfileOption
