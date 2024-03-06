import { ReactNode } from 'react'

type Props = {
	isOpen: boolean
	setIsOpen: (value: boolean) => void
	children: ReactNode
}

const DialogPopover = ({ isOpen, setIsOpen, children }: Props) => {
	return (
		<div
			className={`absolute left-1/2 top-1/2 z-10 flex h-full w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-[rgba(0,0,0,0.7)] p-4 transition duration-300
				${isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}
				`}
			onClick={e => {
				if (e.target === e.currentTarget) {
					setIsOpen(false)
				}
			}}
		>
			<div
				className={`min-h-[12.5rem] min-w-[28rem] rounded bg-content transition duration-300 ${isOpen ? 'scale-100' : 'scale-75'}`}
			>
				{children}
			</div>
		</div>
	)
}

export default DialogPopover
