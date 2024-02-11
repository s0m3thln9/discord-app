import styled from 'styled-components'

type StyledProps = {
	$transformOrigin: string
	$transform: string
	$arrowTransform: string
	$position: {
		vertical: 'top' | 'center' | 'bottom'
		horizontal: 'left' | 'center' | 'right'
	}
}

const ToolTip = styled.div<StyledProps>`
	position: absolute;
	background: ${({ theme }) => theme.colors.tooltipBg};
	color: ${({ theme }) => theme.colors.title};
	top: ${({ $position }) => ($position.vertical === 'center' ? '50%' : $position.vertical === 'top' ? '0' : '100%')};
	left: ${({ $position }) =>
		$position.horizontal === 'center' ? '50%' : $position.horizontal === 'left' ? '0' : '100%'};
	transform: ${({ $transform }) => $transform};
	border-radius: 0.25rem;
	z-index: -1;
	transform-origin: ${({ $transformOrigin }) => $transformOrigin};
	box-shadow: 0 1rem 1rem 0 rgba(0, 0, 0, 0.2);
	width: fit-content;

	& > div {
		position: relative;
		padding: 0.5rem 0.75rem;

		&::before {
			content: '';
			background: ${({ theme }) => theme.colors.tooltipBg};
			width: 0.5rem;
			height: 0.5rem;
			position: absolute;
			${({ $position }) => ($position.horizontal === 'right' ? 'left: 0' : '')};
			${({ $position }) => ($position.horizontal === 'left' ? 'right: 0' : '')};
			${({ $position }) => ($position.horizontal === 'center' ? 'left: 50%' : '')};
			${({ $position }) => ($position.vertical === 'top' ? 'top: 100%' : '')};
			${({ $position }) => ($position.vertical === 'center' ? 'top: 50%' : '')};
			${({ $position }) => ($position.vertical === 'bottom' ? 'top: 0' : '')};

			transform: ${({ $arrowTransform }) => $arrowTransform};
		}
	}

	p {
		font-size: 0.875rem;
		font-weight: 500;
		white-space: nowrap;
	}
`

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
		vertical: '1rem',
		horizontal: '1rem',
	},
}: Props) => {
	let transformOrigin = ''
	let transform = ''
	let arrowTransform = ''

	switch (position?.horizontal) {
		case 'left':
			transformOrigin += 'right'
			if (parseInt(space?.horizontal || '0')) {
				transform += `translateX(calc(-100% + (${space?.horizontal})))`
			} else {
				transform += `translateX(-100%)`
			}
			arrowTransform += ' translateX(0.25rem)'
			break
		case 'center':
			transformOrigin += 'center'
			if (parseInt(space?.horizontal || '0')) {
				transform += `translateX(calc(-50% + (${space?.horizontal})))`
			} else {
				transform += `translateX(-50%)`
			}
			arrowTransform += ' translateX(-50%)'
			break
		case 'right':
			transformOrigin += 'left'
			if (parseInt(space?.horizontal || '0')) {
				transform += `translateX(${space?.horizontal})`
			} else {
				transform += `translateX(0)`
			}
			arrowTransform += ' translateX(-0.25rem)'
			break
	}

	switch (position?.vertical) {
		case 'top':
			transformOrigin += ' bottom'
			if (parseInt(space?.vertical || '0')) {
				transform += ` translateY(calc(-100% + (${space?.vertical})))`
			} else {
				transform += ` translateY(100%)`
			}
			arrowTransform += ' translateY(-0.25rem)'
			break
		case 'center':
			transformOrigin += ' center'
			if (parseInt(space?.vertical || '0')) {
				transform += ` translateY(calc(-50% + (${space?.vertical})))`
			} else {
				transform += ` translateY(-50%)`
			}
			arrowTransform += ' translateY(-50%)'
			break
		case 'bottom':
			transformOrigin += ' top'
			if (parseInt(space?.vertical || '0')) {
				transform += ` translateY(${space?.vertical})`
			} else {
				transform += ` translateY(0)`
			}
			arrowTransform += ' translateY(-0.25rem)'
			break
	}
	arrowTransform += ' rotate(45deg)'

	return (
		<ToolTip
			className={'tooltip'}
			$position={position}
			$transform={transform}
			$transformOrigin={transformOrigin}
			$arrowTransform={arrowTransform}
		>
			<div>
				<p>{text}</p>
			</div>
		</ToolTip>
	)
}

export default Tooltip
