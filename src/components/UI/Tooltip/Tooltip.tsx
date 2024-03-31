// import { cva, VariantProps } from 'class-variance-authority'
// import { cn } from '../../../utils/cn'
// import React from 'react'
// import { twMerge } from 'tailwind-merge'
//
// interface Props extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof tooltipVariations> {
// 	text: string
// 	children?: React.ReactNode
// }
//
// const Tooltip = ({ children, text, vertical, horizontal, x, y, bg, className, ...props }: Props) => {
// 	return (
// 		<div className={twMerge('', className)} {...props}>
// 			<div className={twMerge('group/tooltip relative h-full w-full')}>
// 				{children}
// 				<div
// 					className={cn(tooltipVariations({ vertical, horizontal, x, y, bg }))}
// 					style={{ boxShadow: '0 1rem 1rem 0 rgba(0, 0, 0, 0.2)' }}
// 				>
// 					<div className={cn(tooltipArrowVariations({ vertical, horizontal, bg }))}>
// 						<p className={'whitespace-nowrap text-sm font-medium'}>{text}</p>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }
//
// const tooltipVariations = cva(
// 	'absolute pointer-events-none z-10 w-fit scale-95 rounded text-white opacity-0 shadow-lg transition-all group-hover/tooltip:scale-100 group-hover/tooltip:opacity-100',
// 	{
// 		variants: {
// 			horizontal: {
// 				left: 'right-full -translate-x-[1rem]',
// 				center: 'left-1/2 translate-x-[-50%]',
// 				right: 'left-full',
// 			},
// 			vertical: {
// 				top: 'bottom-full -translate-y-[1rem]',
// 				center: 'top-1/2 -translate-y-[50%]',
// 				bottom: 'top-full translate-y-[1rem]',
// 			},
// 			x: {
// 				xs: 'translate-x-2',
// 				sm: 'translate-x-3',
// 				md: 'translate-x-4',
// 				lg: 'translate-x-5',
// 				xl: 'translate-x-6',
// 				xsm: '-translate-x-2',
// 				smm: '-translate-x-3',
// 				mdm: '-translate-x-4',
// 				lgm: '-translate-x-5',
// 				xlm: '-translate-x-6',
// 				tooltip: 'translate-x-[-1.4rem]',
// 			},
// 			y: {
// 				xs: 'translate-y-2',
// 				sm: 'translate-y-3',
// 				md: 'translate-y-4',
// 				lg: 'translate-y-5',
// 				xl: 'translate-y-6',
// 				xsm: '-translate-y-2',
// 				smm: '-translate-y-3',
// 				mdm: '-translate-y-4',
// 				lgm: '-translate-y-5',
// 				xlm: '-translate-y-6',
// 			},
// 			bg: {
// 				default: 'bg-[#111214]',
// 				green: 'bg-[#23a559]',
// 				red: 'bg-[#f23f42]',
// 			},
// 		},
// 		defaultVariants: {
// 			bg: 'default'
// 		}
// 	},
// )
//
// const tooltipArrowVariations = cva(
// 	'relative px-3 py-2 before:absolute before:bg-[#111214] before:h-2 before:w-2 before:rotate-45',
// 	{
// 		variants: {
// 			vertical: {
// 				top: 'before:bottom-0 before:translate-y-[50%]',
// 				center: 'before:top-1/2 before:-translate-y-[50%]',
// 				bottom: 'before:top-0 before:-translate-y-[50%]',
// 			},
// 			horizontal: {
// 				left: 'before:right-0 before:translate-x-[50%]',
// 				center: 'before:left-1/2 before:translate-x-[-50%]',
// 				right: 'before:left-0 before:translate-x-[-50%]',
// 			},
// 			bg: {
// 				default: 'before:bg-[#111214]',
// 				green: 'before:bg-[#23a559]',
// 				red: 'before:bg-[#f23f42]',
// 			},
// 		},
// 		defaultVariants: {
// 			bg: 'default'
// 		}
// 	},
// )
//
// export default Tooltip

import React, { JSX, ReactNode, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { cn } from '../../../utils/cn.ts'
import { cva } from 'class-variance-authority'
import { clsx } from 'clsx'

type TooltipPlacementType = 'top' | 'bottom' | 'left' | 'right'
type TooltipXYType =
	| '-2xl'
	| '-xl'
	| '-lg'
	| '-md'
	| '-sm'
	| '-xs'
	| '-2xs'
	| '0'
	| '2xs'
	| 'xs'
	| 'sm'
	| 'md'
	| 'lg'
	| 'xl'
	| '2xl'
export type TooltipBackgroundType = 'default' | 'green' | 'red'

interface ITooltipProps {
	children: ReactNode
	content?: JSX.Element
	text?: string
	className?: string
	placement?: TooltipPlacementType
	x?: TooltipXYType
	y?: TooltipXYType
	bg?: TooltipBackgroundType
	click?: () => void
	animation?: boolean
	width?: string | 'full'
	height?: string | 'full'
}

const Tooltip: React.FC<ITooltipProps> = ({
	children,
	content,
	text,
	className,
	placement,
	x,
	y,
	bg,
	click,
	animation,
	width,
	height,
}) => {
	const [isClicked, setIsClicked] = useState(false)

	const tooltipRef = useRef<HTMLDivElement>(null)

	const showTooltip = () => {
		if (tooltipRef.current) {
			tooltipRef.current.style.opacity = '1'
		}
	}

	const closeTooltip = () => {
		if (tooltipRef.current) {
			tooltipRef.current.style.opacity = '0'
		}
	}

	const handleMouseEnter = () => {
		if (!isClicked) showTooltip()
	}

	const handleMouseLeave = () => {
		closeTooltip()
		setIsClicked(false)
	}

	const handleClick = () => {
		setIsClicked(true)
		closeTooltip()
		if (click) {
			click(showTooltip, closeTooltip)
		}
	}

const Tooltip = ({ children, text, vertical, horizontal, x, y, className, ...props }: Props) => {
	return (
		<div className={twMerge('relative', className)}>
			<div
				className={cn(
					'flex border-none',
					width === 'full' ? 'w-full' : width ? `w-[${width}]` : '',
					height === 'full' ? 'h-full' : height ? `h-[${height}]` : '',
				)}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				onClick={handleClick}
			>
				{children}
			</div>
			<div className={cn(tooltipContainerVariations({ placement, x, y, bg }))} ref={tooltipRef}>
				<div className={cn(tooltipArrowVariations({ placement, bg }))}>
					{content ? (
						content
					) : (
						<p className={clsx('whitespace-nowrap text-sm font-medium', animation && 'shake-text')}>
							{text}
						</p>
					)}
				</div>
			</div>
		</div>
	)
}

const tooltipContainerVariations = cva(
	'absolute pointer-events-none z-10 w-fit rounded text-white shadow-tooltip opacity-0 transition-opacity',
	{
		variants: {
			placement: {
				top: 'left-1/2 translate-x-[-50%] bottom-full -translate-y-2',
				bottom: 'left-1/2 translate-x-[-50%] top-full translate-y-2',
				left: 'right-full -translate-x-2 top-1/2 -translate-y-[50%]',
				right: 'left-full translate-x-2 top-1/2 top-1/2 -translate-y-[50%]',
			},
			x: {
				'-2xl': '-translate-x-7',
				'-xl': '-translate-x-6',
				'-lg': '-translate-x-5',
				'-md': '-translate-x-4',
				'-sm': '-translate-x-3',
				'-xs': '-translate-x-2',
				'-2xs': '-translate-x-1',
				'0': 'translate-x-0',
				'2xs': 'translate-x-1',
				xs: 'translate-x-2',
				sm: 'translate-x-3',
				md: 'translate-x-4',
				lg: 'translate-x-5',
				xl: 'translate-x-6',
				'2xl': 'translate-x-7',
			},
			y: {
				'-2xl': '-translate-y-7',
				'-xl': '-translate-y-6',
				'-lg': '-translate-y-5',
				'-md': '-translate-y-4',
				'-sm': '-translate-y-3',
				'-xs': '-translate-y-2',
				'-2xs': '-translate-y-1',
				'0': 'translate-y-0',
				'2xs': 'translate-y-1',
				xs: 'translate-y-2',
				sm: 'translate-y-3',
				md: 'translate-y-4',
				lg: 'translate-y-5',
				xl: 'translate-y-6',
				'2xl': 'translate-y-7',
			},
			bg: {
				default: 'bg-[#111214]',
				green: 'bg-[#23a559]',
				red: 'bg-[#f23f42]',
			},
		},
		defaultVariants: {
			placement: 'top',
			bg: 'default',
		},
	},
)

const tooltipArrowVariations = cva('relative px-3 py-2 before:absolute before:h-2 before:w-2 before:rotate-45', {
	variants: {
		placement: {
			top: 'before:left-1/2 before:translate-x-[-50%] before:bottom-0 before:translate-y-[50%]',
			bottom: 'before:left-1/2 before:translate-x-[-50%] before:top-0 before:-translate-y-[50%]',
			left: 'before:right-0 before:translate-x-[50%] before:top-1/2 before:-translate-y-[50%]',
			right: 'before:left-0 before:translate-x-[-50%] before:top-1/2 before:-translate-y-[50%]',
		},
		bg: {
			default: 'before:bg-[#111214]',
			green: 'before:bg-[#23a559]',
			red: 'before:bg-[#f23f42]',
		},
	},
	defaultVariants: {
		placement: 'top',
		bg: 'default',
	},
})

export default Tooltip
