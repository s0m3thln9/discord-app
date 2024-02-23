type Props = {
	text: string
	position: {
		vertical: 'top' | 'center' | 'bottom'
		horizontal: 'left' | 'center' | 'right'
	}
	space?: {
		vertical?: string
		horizontal?: string
	}
}

const Tooltip = ({
	text,
	position,
	space = {
		vertical: '0',
		horizontal: '0',
	},
}: Props) => {
	console.log(space)
	const positionClasses = `absolute bg-[#1b1b1e] text-[#f2f3f5] z-10 w-fit rounded shadow-lg ${
		position.vertical === 'top'
			? `bottom-full ${space?.vertical && space.vertical !== '0' ? `translate-y-[${space.vertical}]` : ''}`
			: position.vertical === 'center'
				? `top-1/2 ${space?.vertical && space.vertical !== '0' ? `-translate-y-[calc(50%+(${space.vertical}))]` : '-translate-y-1/2'}`
				: `top-full ${space?.vertical && space.vertical !== '0' ? `translate-y-[${space.vertical}]` : ''}`
	} ${
		position.horizontal === 'left'
			? `right-full translate-x-[${space?.horizontal || '0'}]`
			: position.horizontal === 'center'
				? `left-1/2 ${(space?.horizontal && space.horizontal) !== '0' ? `translate-x-[calc(-50%+(${space.horizontal}))]` : 'translate-x-1/2'}`
				: `left-full translate-x-[${space?.horizontal || '0'}]`
	}`

	return (
		<div className={positionClasses} style={{ boxShadow: '0 1rem 1rem 0 rgba(0, 0, 0, 0.2)' }}>
			<div className={`py-2 px-3 relative before:absolute before:rotate-45 before:w-2 before:h-2`}>
				<p className={'text-sm font-medium whitespace-nowrap'}>{text}</p>
			</div>
		</div>
	)
}

export default Tooltip
