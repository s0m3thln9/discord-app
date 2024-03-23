import { ReactNode } from 'react'
import { cn } from '../../../utils/cn.ts'

type Props = {
	isOpen: boolean
	handleClose: () => void
	children: ReactNode
	className?: string
}

const Modal = ({ isOpen, handleClose, children, className }: Props) => {
	return (
		<div
			className={`absolute left-1/2 top-1/2 z-10 flex h-full w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-[rgba(0,0,0,0.7)] p-4 transition duration-300
				${isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}
				`}
			onMouseDown={e => {
				if (e.target === e.currentTarget) {
					handleClose()
				}
			}}
		>
			<div
				className={cn(
					`min-h-[12.5rem] min-w-[28rem] rounded bg-content transition duration-300`,
					className,
					isOpen ? 'scale-100' : 'scale-75',
				)}
			>
				{children}
			</div>
		</div>
	)
}

export default Modal
