import StatusIndicator from '../OnlineStatusIndicator/StatusIndicator.tsx'
import { cva, VariantProps } from 'class-variance-authority'
import { cn } from '../../../utils/cn.ts'
import { Dispatch, SetStateAction } from 'react'
import { DSLogo, Edit, Group } from '../../../assets/svgs.tsx'
import { NoImageColors } from '../../../types/user.ts'
import getColor from '../../../utils/getColor.ts'

interface Props extends VariantProps<typeof userImageVariants> {
	image: string | null
	onlineStatus: 'offline' | 'online' | 'idle' | 'doNotDisturb' | false
	color: NoImageColors
	tooltip?: boolean
	className?: string
	bgColor: 'sidebar' | 'content' | 'userInfo' | 'profile-bg' | 'hover' | 'choosed' | null | undefined
	editable?: Dispatch<SetStateAction<boolean>>
	hover?: string
	isGroup?: boolean
}

const UserImage = ({
	image,
	onlineStatus,
	color,
	className,
	bgColor,
	tooltip,
	size,
	border,
	editable,
	isGroup,
	hover
}: Props) => {
	return (
		<div className={cn('box-content', userImageVariants({ size, border }), className)}>
			{image ? (
				<img src={image} className={cn(ImageVariants({ size }))} alt={'user image'} />
			) : (
				<div className={cn(UserImagePlaceholderVariants({ size }))} style={{ background: getColor(color) }}>
					{isGroup ? (
						<Group
							className={'fill-[white]'}
							width={size === 'sm' ? 16 : size === 'md' ? 20 : 48}
							height={size === 'sm' ? 16 : size === 'md' ? 20 : 48}
						/>
					) : (
						<DSLogo
							width={size === 'sm' ? 16 : size === 'md' ? 20 : 48}
							height={size === 'sm' ? 16 : size === 'md' ? 20 : 48}
						/>
					)}
				</div>
			)}
			{(editable || hover) && (
				<div
					className={
						'absolute left-0 top-0 z-10 flex h-full w-full cursor-pointer items-center justify-center rounded-full opacity-0 shadow-avatar hover:opacity-100'
					}
					onClick={() => {
						editable(true)
					}}
				>
					{editable ? <Edit /> : <p className={'text-[0.625rem] font-bold whitespace-nowrap text-[#fff] text-ellipsis uppercase'}>{hover}</p>}
				</div>
			)}
			{onlineStatus && (
				<StatusIndicator
					onlineStatus={onlineStatus || 'offline'}
					color={bgColor}
					tooltip={tooltip}
					size={size}
					className={!tooltip ? 'absolute -bottom-0.5 -right-0.5' : ''}
				/>
			)}
		</div>
	)
}

const userImageVariants = cva('relative content-box shrink-0', {
	variants: {
		size: {
			md: 'h-8 w-8',
			lg: 'h-20 w-20',
			sm: 'h-6 w-6',
		},
		border: {
			none: '',
			profile: 'inline-table border-[0.4rem] rounded-full border-profile-bg',
			'user-info': 'inline-table border-[0.4rem] rounded-full border-[#232428]',
		},
	},
	defaultVariants: {
		size: 'sm',
		border: 'none',
	},
})

const ImageVariants = cva('rounded-full', {
	variants: {
		size: {
			md: 'h-8 w-8',
			lg: 'h-20 w-20',
			sm: 'h-6 w-6',
		},
	},
	defaultVariants: {
		size: 'sm',
	},
})

const UserImagePlaceholderVariants = cva('flex shrink-0 items-center justify-center rounded-full h-full w-full', {
	variants: {
		size: {
			md: 'h-8 w-8',
			lg: 'h-20 w-20',
			sm: 'h-6 w-6',
		},
	},
	defaultVariants: {
		size: 'sm',
	},
})
export default UserImage
