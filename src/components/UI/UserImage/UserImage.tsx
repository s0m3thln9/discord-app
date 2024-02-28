import { DSLogo } from '../../../../public/svgs.tsx'
import StatusIndicator from '../OnlineStatusIndicator/StatusIndicator.tsx'

type Props = {
	image: string
	onlineStatus: 'offline' | 'online' | 'idle' | 'doNotDisturb'
	color: 'orange' | 'red' | 'green' | 'blue' | 'yellow'
	className?: string
}

const UserImage = ({ image, onlineStatus, color, className }: Props) => {
	return (
		<div className={`inline-block relative ${className}`}>
			{image ? (
				<img src={image} className={'rounded-full h-8'} alt={'user image'} />
			) : (
				<div
					className={'w-8 h-8 rounded-full flex items-center justify-center shrink-0'}
					style={{ background: color }}
				>
					<DSLogo width={20} height={20} />
				</div>
			)}
			<StatusIndicator onlineStatus={onlineStatus || 'offline'} tooltip={false} color={'#232428'} />
		</div>
	)
}

export default UserImage
