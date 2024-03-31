import { twMerge } from 'tailwind-merge'
import React from 'react'

const Divider = ({ className }: React.HTMLAttributes<HTMLDivElement>) => {
	return <div className={twMerge('h-[1px] bg-[#2e2f34]', className)}></div>
}

export default Divider