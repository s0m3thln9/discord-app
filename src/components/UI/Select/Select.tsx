import styled from 'styled-components'
import React, { useEffect, useRef, useState } from 'react'
import { Arrow } from '../../../../public/svgs.tsx'

type StyledProps = {
	open: boolean
	ref: React.MutableRefObject<HTMLDivElement | null>
}

const StyledSelect = styled.div<StyledProps>`
    width: 8rem;
    position: relative;
    cursor: pointer;
	.select-button {
        overflow: hidden;
        border-radius: 0.125rem;
        height: 2.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #1e1f22;
        color: #949ba4;
        padding: 0.125rem 0.5rem;

        p {
            color: #949ba4;
            font-size: 1rem;
            margin-top: 0;
        }

        svg {
            transform: ${({ open }) => open ? 'rotate(180deg)' : 'none'};
        }
    }

    .select-content {
        box-shadow: 0 0 1rem 0.25rem rgba(0, 0, 0, 0.2);
        overflow-y: scroll;
        border: 1px #1e1f22 solid;
        height: 14rem;
        position: absolute;
        border-radius: 0.25rem;
        color: #b5bac1;
        top: 0;
        transform: translateY(-100%);
        left: 0;
        background: #2b2d31;
        width: 100%;

        &::-webkit-scrollbar {
            width: .5rem;
        }
        &::-webkit-scrollbar-thumb {
            background: #1e1f22;
            border-radius: 99rem;
            border: .15rem solid #2b2c31;
        }
		
        option {
            width: 100%;
            height: 2.5rem;
            display: flex;
            align-items: center;
            padding: 0.125rem 0.5rem;
            cursor: pointer;

            &:hover {
                background: #35373c;
                color: #dbdee1;
            }
        }
    }
`


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
		console.log(e)
		setIsOpen(false)
	}

	return (
		<StyledSelect open={isOpen} ref={ref}>
			<div onClick={() => setIsOpen(isOpen => !isOpen)} className={'select-button'}>
				<p>{value || initialValue}</p>
				<Arrow />
			</div>
			{isOpen && <div className={'select-content'}>
				{items.map(item => (
					<option key={item} value={item} onClick={handleSelect}>{item}</option>
				))}
			</div>}
		</StyledSelect>
	)
}

export default Select