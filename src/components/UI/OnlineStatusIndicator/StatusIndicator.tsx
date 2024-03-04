import { cn } from '../../../utils/cn.ts'
import Tooltip from '../Tooltip/Tooltip.tsx'
import { cva, VariantProps } from 'class-variance-authority'

interface Props extends VariantProps<typeof statusIndicatorVariants> {
	tooltip: boolean | undefined
}

const StatusIndicator = ({ onlineStatus, color, tooltip = false, size }: Props) => {
	return tooltip ? (
		<Tooltip
			text={`${onlineStatus?.length && onlineStatus[0].toUpperCase()}${onlineStatus?.substring(1)}`}
			vertical={'top'}
			horizontal={'center'}
			y={'lgm'}
			x={'tooltip'}
		>
			<Indicator onlineStatus={onlineStatus} color={color} size={size} />
		</Tooltip>
	) : (
		<Indicator onlineStatus={onlineStatus} color={color} size={size} />
	)
}

const Indicator = ({ onlineStatus, color, size }: VariantProps<typeof statusIndicatorVariants>) => {
	return <div className={cn(statusIndicatorVariants({ onlineStatus, color, size }))}></div>
}

const statusIndicatorVariants = cva('absolute  rounded-full group-hover:border-hover group-hover:before:bg-hover', {
	variants: {
		onlineStatus: {
			offline:
				'bg-[#80848e] before:w-[0.325rem] before:h-[0.325rem] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full',
			online: 'bg-[#23a55a]',
			idle: '',
			doNotDisturb: '',
		},
		color: {
			sidebar: 'border-sidebar before:bg-sidebar',
			userInfo: 'border-user-info before:bg-user-info',
			content: 'border-content before:bg-content',
			'profile-bg': 'border-profile-bg before:bg-profile-bg',
		},
		size: {
			md: 'h-4 w-4 border-[0.2rem] -bottom-0.5 -right-0.5',
			lg: 'h-7 w-7 border-[0.4rem] bottom-0 right-0',
		},
	},
	defaultVariants: {
		size: 'md',
	},
})

export default StatusIndicator
