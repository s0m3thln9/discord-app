import { twMerge } from 'tailwind-merge'
import { HTMLAttributes, ReactNode } from 'react'

interface Props extends HTMLAttributes<HTMLHeadingElement> {
	children: ReactNode
}

const Headline = ({ children, className }: Props) => {
	return <h2 className={twMerge('text-xs font-bold uppercase text-[rgb(181,186,193)]', className)}>{children}</h2>
}

export default Headline
