import { ReactNode } from 'react'

type Props = {
	children: ReactNode
}

const Button = ({ classes, children }: Props) => {
	return (
		<button
			className={`w-full h-11 flex items-center justify-center py-0.5 px-4 font-medium rounded-[0.1875rem] bg-[#5865f2] text-[#fff] transition-[.4s] cursor-pointer hover:bg-[#505bdb] ${classes}`}>
			{children}
		</button>
	)
}

export default Button