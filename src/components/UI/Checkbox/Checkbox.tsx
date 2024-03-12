import { ReactNode } from 'react'

type Props = {
	id: string
	label: string | ReactNode
	classes?: string
}

const Checkbox = ({ id, label, classes }: Props) => {
	return (
		<label className={`relative inline-flex cursor-pointer ${classes}`} htmlFor={id}>
			<input className={'peer absolute hidden'} type="checkbox" id={id} />
			<span
				className={
					'pl-8 text-xs text-[#949ba4] before:absolute before:left-0 before:top-1/2 before:mr-2 before:inline-block before:h-6 before:w-6 before:shrink-0 before:grow-0 before:-translate-y-1/2 before:rounded-md before:border before:border-[#80848e] before:bg-center before:bg-no-repeat before:content-[""] peer-checked:before:bg-[#5865f2] peer-checked:before:bg-[url("/assets/img/checkbox.svg")]'
				}
			>
				{label}
			</span>
		</label>
	)
}

export default Checkbox
