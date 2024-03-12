import { HTMLAttributes, ReactNode } from 'react'
import { cn } from '../../../utils/cn.ts'

interface Props extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode
	isShown: boolean
	setIsShown: (isShown: boolean) => void
}

const ContextMenu = ({ children, isShown }: Props) => {
	return (
		<div
			className={cn(
				'pointer-events-none absolute left-0 top-0 opacity-0',
				isShown && 'pointer-events-auto opacity-100',
			)}
		>
			{children}
		</div>
	)
}

export default ContextMenu
