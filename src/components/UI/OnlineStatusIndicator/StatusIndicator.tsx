import Tooltip from '../Tooltip/Tooltip.tsx'

type Props = {
	onlineStatus: 'offline' | 'online' | 'idle' | 'doNotDisturb' | 'group'
	tooltip: boolean
	color: string
}

const StatusIndicator = ({ onlineStatus, tooltip, color }: Props) => {
	return <Indicator onlineStatus={onlineStatus} tooltip={tooltip} color={color} />
}

type PropsIndicator = {
	onlineStatus: 'offline' | 'online' | 'idle' | 'doNotDisturb' | 'group'
	tooltip: boolean
	color: string
}

const Indicator = ({ onlineStatus, tooltip, color }: PropsIndicator) => {
	return (
		<div
			className={`online-indicator
			h-4 w-4 rounded-full border-[0.225rem] group-hover:border-hover absolute -right-0.5 -bottom-0.5 
			${onlineStatus === 'online' ? `bg-[#23a55a]` : onlineStatus === 'offline' ? `bg-[#80848e]` : ''}
		`}
			style={{ borderColor: color }}
		>
			{onlineStatus === 'online' ? (
				<div
					className={`relative before:w-[0.275rem] before:h-[0.275rem] before:absolute before:rounded-full before:translate-y-1/2 before:translate-x-1/2 group-hover:before:border-hover`}
				></div>
			) : (
				''
			)}
			{tooltip ? (
				<Tooltip
					text={`${onlineStatus.toUpperCase()}${onlineStatus.substring(1)}`}
					position={{ vertical: 'top', horizontal: 'center' }}
					space={{ vertical: '0', horizontal: '0' }}
				/>
			) : (
				''
			)}
		</div>
	)
}

export default StatusIndicator
