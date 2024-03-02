import { cn } from '../../../utils/cn.ts'
import Tooltip from '../Tooltip/Tooltip.tsx'
import { cva, VariantProps } from 'class-variance-authority'

interface Props extends VariantProps<typeof statusIndicatorVariants> {
	tooltip: boolean | undefined
}

const StatusIndicator = ({ onlineStatus, color, tooltip = false }: Props) => {
	return tooltip ? (
		<Tooltip
			text={`${onlineStatus?.length && onlineStatus[0].toUpperCase()}${onlineStatus?.substring(1)}`}
			vertical={'top'}
			horizontal={'center'}
			y={'lgm'}
			x={'tooltip'}
		>
			<Indicator onlineStatus={onlineStatus} color={color} />
		</Tooltip>
	) : (
		<Indicator onlineStatus={onlineStatus} color={color} />
	)
}

const Indicator = ({ onlineStatus, color }: VariantProps<typeof statusIndicatorVariants>) => {
	return <div className={cn(statusIndicatorVariants({ onlineStatus, color }))}></div>
}

const statusIndicatorVariants = cva(
	'absolute -bottom-0.5 -right-0.5 h-4 w-4 rounded-full border-[0.2rem] group-hover:border-hover group-hover:before:bg-hover',
	{
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
				userInfo: 'border-user-info',
				content: 'border-content before:bg-content',
			},
		},
	},
)

export default StatusIndicator
