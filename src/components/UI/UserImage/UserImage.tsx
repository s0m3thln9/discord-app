import { DSLogo } from '../../../../public/svgs.tsx'
import StatusIndicator from '../OnlineStatusIndicator/StatusIndicator.tsx'

type Props = {
	image: string
	onlineStatus: 'offline' | 'online' | 'idle' | 'doNotDisturb' | 'group'
	color: 'orange' | 'red' | 'green' | 'blue' | 'yellow'
	tooltip?: boolean
	className?: string
	bgColor: 'sidebar' | 'content' | 'userInfo' | null | undefined
}

const UserImage = ({ image, onlineStatus, color, className, bgColor, tooltip }: Props) => {
	return (
		<div className={`relative inline-block ${className ? className : ''}`}>
			{image ? (
				<img src={image} className={'h-8 rounded-full'} alt={'user image'} />
			) : (
				<div
					className={'flex h-8 w-8 shrink-0 items-center justify-center rounded-full'}
					style={{ background: color }}
				>
					<DSLogo width={20} height={20} />
				</div>
			)}
			{onlineStatus !== 'group' && (
				<StatusIndicator onlineStatus={onlineStatus || 'offline'} color={bgColor} tooltip={tooltip} />
			)}
		</div>
	)
}

export default UserImage
