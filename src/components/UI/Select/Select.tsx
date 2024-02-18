import styled from 'styled-components'
import React, { useEffect, useRef, useState } from 'react'
import { Arrow } from '../../../../public/svgs.tsx'

type StyledProps = {
	open: boolean
	ref: React.MutableRefObject<HTMLDivElement | null>
}


type Props = {
	initialValue: string
	items: string[]
	value: string | number
	onSelect: (value: string) => void
}

const Select = ({ initialValue, items, value, onSelect }: Props) => {

	const [isOpen, setIsOpen] = useState(false)

	const ref = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		const handleClickAway = (event: MouseEvent) => {
			if (!ref.current?.contains(event.target as Node)) {
				setIsOpen(false)
			}
		}

		document.addEventListener('mousedown', handleClickAway)

		return () => document.removeEventListener('mousedown', handleClickAway)
	}, [])

	const handleSelect = (e: React.MouseEvent<HTMLOptionElement, MouseEvent>) => {
		onSelect(e.currentTarget.value)
		setIsOpen(false)
	}

	return (
		<div className={'w-32 relative cursor-pointer'} open={isOpen} ref={ref}>
			<div className={'overflow-hidden rounded-sm h-10 flex items-center justify-between bg-[#1e1f22] text-[#949ba4] py-0.5 px-2'} onClick={() => setIsOpen(isOpen => !isOpen)} >
				<p>{value || initialValue}</p>
				<Arrow />
			</div>
			{isOpen && <div className={'overflow-y-scroll shadow-select border border-[#1e1f22] absolute h-56 rounded-[0.25rem] bg-[#2b2d31] w-full text-[#b5bac1] top-0 left-0 -translate-y-full scr'}>
				{items.map(item => (
					<option className={'w-full h-10 flex items-center py-0.5 px-2 cursor-pointer hover:bg-[#35373c] hover:text-[#dbdee1]'} key={item} value={item} onClick={handleSelect}>{item}</option>
				))}
			</div>}
		</div>
	)
}

export default Select