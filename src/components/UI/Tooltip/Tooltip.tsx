import { cva, VariantProps } from 'class-variance-authority'
import { cn } from '../../../utils/cn'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import { clsx } from 'clsx'

interface Props
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof tooltipVariations>,
		VariantProps<typeof tooltipArrowVariations> {
	text: string
	children?: React.ReactNode
}

const Tooltip = ({ children, text, vertical, horizontal, x, y, className, width, ...props }: Props) => {
	return (
		<div className={twMerge('', className)} {...props}>
			<div className={twMerge('group/tooltip relative h-full w-full')}>
				{children}
				<div
					className={cn(tooltipVariations({ vertical, horizontal, x, y }))}
					style={{ boxShadow: '0 1rem 1rem 0 rgba(0, 0, 0, 0.2)' }}
				>
					<div className={cn(tooltipArrowVariations({ vertical, horizontal, width }))}>
						<p className={clsx(`text-sm font-medium`, !width && 'whitespace-nowrap')}>{text}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

const tooltipVariations = cva(
	'absolute pointer-events-none z-10 w-fit scale-95 rounded bg-[#1b1b1e] text-white opacity-0 shadow-lg transition-all group-hover/tooltip:scale-100 group-hover/tooltip:opacity-100',
	{
		variants: {
			horizontal: {
				left: 'right-full -translate-x-[1rem]',
				center: 'left-1/2 translate-x-[-50%]',
				right: 'left-full',
			},
			vertical: {
				top: 'bottom-full -translate-y-[1rem]',
				center: 'top-1/2 -translate-y-[50%]',
				bottom: 'top-full translate-y-[1rem]',
			},
			x: {
				xs: 'translate-x-2',
				sm: 'translate-x-3',
				md: 'translate-x-4',
				lg: 'translate-x-5',
				xl: 'translate-x-6',
				'-xs': '-translate-x-2',
				'-sm': '-translate-x-3',
				'-md': '-translate-x-4',
				'-lg': '-translate-x-5',
				'xl-': '-translate-x-6',

				tooltip: 'translate-x-[-1.4rem]',
			},
			y: {
				xs: 'translate-y-2',
				sm: 'translate-y-3',
				md: 'translate-y-4',
				lg: 'translate-y-5',
				xl: 'translate-y-6',
				'-xs': '-translate-y-2',
				'-sm': '-translate-y-3',
				'-md': '-translate-y-4',
				'-lg': '-translate-y-5',
				'-xl': '-translate-y-6',
			},
		},
	},
)

const tooltipArrowVariations = cva(
	'relative px-3 py-2 before:absolute before:bg-[#1b1b1e] before:h-2 before:w-2 before:rotate-45',
	{
		variants: {
			vertical: {
				top: 'before:bottom-0 before:translate-y-[50%]',
				center: 'before:top-1/2 before:-translate-y-[50%]',
				bottom: 'before:top-0 before:-translate-y-[50%]',
			},
			horizontal: {
				left: 'before:right-0 before:translate-x-[50%]',
				center: 'before:left-1/2 before:translate-x-[-50%]',
				right: 'before:left-0 before:translate-x-[-50%]',
			},
			width: {
				auto: 'w-fit',
				md: 'w-[15rem]',
			},
		},
		defaultVariants: {
			width: 'auto',
		},
	},
)

export default Tooltip
