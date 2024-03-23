import { ButtonHTMLAttributes, ReactNode } from 'react'
import { cva, VariantProps } from 'class-variance-authority'
import { cn } from '../../../utils/cn'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
	children: ReactNode
}

const Button = ({ children, variant, disabled, className, ...props }: Props) => {
	return (
		<button className={cn(buttonVariants({ variant, className }), disabled && 'opacity-50')} {...props}>
			{children}
		</button>
	)
}

const buttonVariants = cva('flex items-center justify-center hover:bg-[#393c41] rounded', {
	variants: {
		variant: {
			primary:
				'w-full h-11 px-4 font-medium rounded-[0.1875rem] bg-[#5865f2] text-[#fff] transition-[.4s] cursor-pointer py-0.5 hover:bg-[#505bdb]',
			secondary: 'h-8 w-8',
			text: 'px-2 text-[#949ba4] text-start leading-5 hover:text-[#dbdee1] w-fit h-fit',
			danger: 'px-2 text-[#949ba4] text-start leading-5 hover:text-[#dbdee1] w-fit h-fit bg-[#da373c]',
			icon: 'h-9 w-9 rounded-full bg-[#2b2d31] group-hover:bg-[#1e1f22] group/iconBtn',
			link: 'px-6 py-2 text-[white] hover:bg-[none] hover:underline',
			active: 'px-2 text-[#949ba4] w-full text-start leading-5 bg-[#43444b] text-[#fff]',
		},
	},
	defaultVariants: {
		variant: 'secondary',
	},
})

export default Button
