import { DSLogo, Edit } from '../../../../public/svgs.tsx'
import StatusIndicator from '../OnlineStatusIndicator/StatusIndicator.tsx'
import { cva, VariantProps } from 'class-variance-authority'
import { cn } from '../../../utils/cn.ts'
import { Dispatch, SetStateAction } from 'react'

interface Props extends VariantProps<typeof userImageVariants> {
	image: string
	onlineStatus: 'offline' | 'online' | 'idle' | 'doNotDisturb' | 'group'
	color: 'orange' | 'red' | 'green' | 'blue' | 'yellow'
	tooltip?: boolean
	className?: string
	bgColor: 'sidebar' | 'content' | 'userInfo' | 'profile-bg' | null | undefined
	editable?: Dispatch<SetStateAction<boolean>>
}

const UserImage = ({ image, onlineStatus, color, className, bgColor, tooltip, size, border, editable }: Props) => {
	return (
		<div className={cn(userImageVariants({ size, border }), className)}>
			{image ? (
				<img src={image} className={cn(ImageVariants({ size }))} alt={'user image'} />
			) : (
				<div
					className={'flex h-8 w-8 shrink-0 items-center justify-center rounded-full'}
					style={{ background: color }}
				>
					<DSLogo width={20} height={20} />
				</div>
			)}
			{editable && (
				<div
					className={
						'absolute left-0 top-0 z-10 flex h-full w-full cursor-pointer items-center justify-center rounded-full opacity-0 backdrop-brightness-50 hover:opacity-100'
					}
					onClick={() => {
						editable(true)
					}}
				>
					<Edit />
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

const userImageVariants = cva('relative inline-block shrink-0', {
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

const ImageVariants = cva('rounded-full', {
	variants: {
		size: {
			md: 'h-8 w-8',
			lg: 'h-[5rem] w-[calc(5rem+0.8rem)]',
		},
	},
})

export default UserImage
