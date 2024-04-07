import { cn } from '../../../utils/cn.ts'
import Tooltip from '../Tooltip/Tooltip.tsx'
import { cva, VariantProps } from 'class-variance-authority'

interface Props extends VariantProps<typeof statusIndicatorVariants> {
	tooltip?: boolean
	className?: string
}

const StatusIndicator = ({ onlineStatus, color, tooltip = false, size, className }: Props) => {
	return (
		<div className={cn(statusIndicatorContainerVariants({ size }), className)}>
			{tooltip ? (
				<Tooltip text={`${onlineStatus?.length && onlineStatus[0].toUpperCase()}${onlineStatus?.substring(1)}`}>
					<Indicator onlineStatus={onlineStatus} color={color} size={size} />
				</Tooltip>
			) : (
				<Indicator onlineStatus={onlineStatus} color={color} size={size} />
			)}
		</div>
	)
}

type IndicatorVars = VariantProps<typeof statusIndicatorVariants>

export const Indicator = ({ onlineStatus, color, size }: IndicatorVars) => {
	return <div className={cn(statusIndicatorVariants({ onlineStatus, color, size }))}></div>
}

const statusIndicatorVariants = cva('z-10 rounded-full', {
	variants: {
		onlineStatus: {
			offline:
				'bg-[#80848e] before:w-1.5 before:h-1.5 before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full',
			online: 'bg-[#23a55a]',
			idle: 'bg-[#fff]',
			doNotDisturb: 'bg-[#ad4d56]',
		},
		color: {
			sidebar: 'border-sidebar before:bg-sidebar',
			userInfo: 'border-user-info before:bg-user-info group-hover:border-[#35373c]',
			content: 'border-content before:bg-content',
			'profile-bg': 'border-profile-bg before:bg-profile-bg',
			hover: 'border-hover before:bg-hover',
			choosed: 'border-choosed before:bg-choosed',
			option: 'border-[#111214] before:bg-[#111214] group-hover/option:before:bg-[#232528] group-hover/option:border-[#232528] group-hover/option:bg-[#dbdee1]',
			popup: 'border-[#111214] before:bg-[#111214] group-hover/popup:before:bg-[#232528] group-hover/popup:border-[#232528] group-hover/popup:bg-[#fff]',
		},
		size: {
			sm: 'h-3 w-3 border-[0.125rem] before:w-[0.25rem] before:h-[0.25rem]',
			md: 'h-4 w-4 border-[0.2rem] before:w-[0.35rem] before:h-[0.35rem]',
			lg: 'h-7 w-7 border-[0.4rem] before:w-[0.5rem] before:h-[0.5rem]',
		},
	},
	defaultVariants: {
		size: 'md',
	},
})

const statusIndicatorContainerVariants = cva('absolute z-20', {
	variants: {
		size: {
			sm: 'h-3 w-3 -bottom-0.5 -right-0.5',
			md: 'h-4 w-4 -bottom-0.5 -right-0.5',
			lg: 'h-7 w-7 bottom-0 right-0',
		},
	},
})

export default StatusIndicator
