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
	className?: string
}

const Tooltip = ({ text, position, /*space, */ className }: Props) => {
	/*if (space?.horizontal && space?.horizontal[0] !== '-' && space?.horizontal[0] !== '+') {
		space.horizontal = `+${space?.horizontal}`
	}
	if (space?.vertical && space?.vertical[0] !== '-' && space?.vertical[0] !== '+') {
		space.vertical = `+${space?.vertical}`
	}*/

	/*const positionClasses = `absolute bg-[#1b1b1e] text-[#f2f3f5] z-10 w-fit rounded shadow-lg ${
		position.vertical === 'top'
			? `bottom-full translate-y-[${space.vertical}]`
			: position.vertical === 'center'
				? `top-1/2 -translate-y-[calc(50%+${space.vertical})]`
				: `top-full translate-y-[${space.vertical}]`
	} ${
		position.horizontal === 'left'
			? `right-full translate-x-[${space?.horizontal}]`
			: position.horizontal === 'center'
				? `left-1/2 translate-x-[calc(-50%+${space.horizontal})]`
				: `left-full translate-x-[${space?.horizontal}]`
	}`*/

	/*const positionClasses = `absolute bg-[#1b1b1e] text-[#f2f3f5] z-10 w-fit rounded shadow-lg ${
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
	}`*/

	return (
		<div
			className={`${className ? className + ' ' : ''}absolute bg-[#1b1b1e] text-[#f2f3f5] opacity-0 scale-75 z-10 w-fit rounded shadow-lg pointer-events-none group-hover/tooltip:opacity-100 group-hover/tooltip:scale-100 transition-all ${
				position.vertical === 'top'
					? `bottom-full -translate-y-[1rem]`
					: position.vertical === 'center'
						? `top-1/2 -translate-y-[50%]`
						: `top-full translate-y-[1rem]`
			} ${
				position.horizontal === 'left'
					? //? `right-${space?.horizontal?.substring(1) !== '0' ? `[calc(100%${space?.horizontal})]` : 'full'}`
						`right-full -translate-x-[1rem]`
					: position.horizontal === 'center'
						? `left-1/2 translate-x-[-50%]`
						: //: `left-${space?.horizontal?.substring(1) !== '0' ? `[calc(100%${space?.horizontal})]` : 'full'}`
							`left-full translate-x-[1rem]`
			}`}
			style={{ boxShadow: '0 1rem 1rem 0 rgba(0, 0, 0, 0.2)' }}
		>
			<div className={`py-2 px-3 relative before:absolute before:rotate-45 before:w-2 before:h-2`}>
				<p className={'text-sm font-medium whitespace-nowrap'}>{text}</p>
			</div>
		</div>
	)
}

export default Tooltip
