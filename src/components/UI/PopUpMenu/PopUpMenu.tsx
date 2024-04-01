import { ClassNameValue, twMerge } from 'tailwind-merge'
import { ReactNode } from 'react'

interface IPopUpMenuProps {
	children: ReactNode,
	className?: ClassNameValue,
}

const PopUpMenu = ({ children, className }: IPopUpMenuProps) => {
	return (
		<div
			className={twMerge('absolute rounded-md bg-[#111214] top-0 -right-3 z-10 translate-x-full p-1.5', className)}>
			{children}
		</div>
	)
}

export default PopUpMenu