import styled from 'styled-components'
import { useEffect, useRef, useState } from 'react'

const StyledSelect = styled.div`
    width: 8rem;
    position: relative;

    .select-button {
        overflow: hidden;
        border-radius: 0.25rem;
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

        img {
            transform: ${({ $isContentShown }) => $isContentShown ? 'rotate(180deg)' : 'none'};
            width: 20px;
            cursor: pointer;
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

        .select-item {
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

const Select = ({ initialItem, items }) => {

	const [isContentShown, setIsContentShown] = useState(false)
	const [selectedItem, setSelectedItem] = useState(initialItem)

	const ref = useRef()

	useEffect(() => {
		const handleClickAway = (event) => {
			if (ref.current.contains(event.target)) return;
			setIsContentShown(false)
		}

		document.addEventListener('mousedown', handleClickAway)

		return () => document.removeEventListener('mousedown', handleClickAway)
	}, [])

	const handleItemClick = (event) => {
		setSelectedItem(event.target.innerText)
		setIsContentShown(false)
		event.target.parentNode.previousSibling.children[0].style.color = '#b5bac1'
	}

	const handleButtonClick = (event) => {
		setIsContentShown(prev => !prev)
	}

	return (
		<StyledSelect $isContentShown={isContentShown} ref={ref}>
			<div onClick={handleButtonClick} className={'select-button'}><p>{selectedItem}</p> <img
				src="/public/img/arrow.svg" alt="arrow" /></div>
			{isContentShown && <div className={'select-content'}>
				{items.map(item => (
					<div key={item} onClick={handleItemClick} className={'select-item'}>{item}</div>
				))}
			</div>}
		</StyledSelect>
	)
}

export default Select