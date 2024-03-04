import { DSLogo } from '../../../../public/svgs.tsx'
import StatusIndicator from '../OnlineStatusIndicator/StatusIndicator.tsx'
import { cva, VariantProps } from 'class-variance-authority'
import { cn } from '../../../utils/cn.ts'

interface Props extends VariantProps<typeof userImageVariants> {
	image: string
	onlineStatus: 'offline' | 'online' | 'idle' | 'doNotDisturb' | 'group'
	color: 'orange' | 'red' | 'green' | 'blue' | 'yellow'
	tooltip?: boolean
	className?: string
	bgColor: 'sidebar' | 'content' | 'userInfo' | 'profile-bg' | null | undefined
}

const UserImage = ({ image, onlineStatus, color, className, bgColor, tooltip, size, border }: Props) => {
	return (
		<div className={cn(userImageVariants({ size, border }), className)}>
			{image ? (
				<img src={image} className={`rounded-full`} alt={'user image'} />
			) : (
				<div
					className={'flex h-8 w-8 shrink-0 items-center justify-center rounded-full'}
					style={{ background: color }}
				>
					<DSLogo width={20} height={20} />
				</div>
			)}
			{onlineStatus !== 'group' && (
				<StatusIndicator
					onlineStatus={onlineStatus || 'offline'}
					color={bgColor}
					tooltip={tooltip}
					size={size}
				/>
			)}
		</div>
	)
}

const userImageVariants = cva('relative inline-block', {
	variants: {
		size: {
			md: 'h-8 w-8',
			lg: 'h-[calc(5rem+0.8rem)] w-[calc(5rem+0.8rem)]',
		},
		border: {
			none: '',
			profile: 'inline-table border-[0.4rem] rounded-full border-profile-bg',
		},
	},
	defaultVariants: {
		size: 'md',
		border: 'none',
	},
})

export default UserImage
