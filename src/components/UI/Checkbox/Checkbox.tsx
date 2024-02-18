import { ReactNode } from 'react'

type Props = {
	id: string
	label: string | ReactNode
	classes: string
}

const Checkbox = ({ id, label, classes }: Props) => {
	return (
		<label className={`relative inline-flex cursor-pointer ${classes}`} htmlFor={id}>
			<input className={'absolute hidden peer'} type="checkbox" id={id} />
			<span
				className={'pl-8 text-xs text-[#949ba4] before:absolute before:content-[""] before:left-0 before:top-1/2 before:-translate-y-1/2 before:mr-2 before:inline-block before:rounded-md before:w-6 before:h-6 before:shrink-0 before:grow-0 before:border before:border-[#80848e] before:bg-no-repeat before:bg-center peer-checked:before:bg-[#5865f2] peer-checked:before:bg-[url("/public/img/checkbox.svg")]'}>
				{label}
			</span>
		</label>
	)
}

export default Checkbox