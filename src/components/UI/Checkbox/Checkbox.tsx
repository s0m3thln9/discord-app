import styled from 'styled-components'
import { ReactNode } from 'react'

const StyledCheckbox = styled.label`
    position: relative;
    display: inline-flex;
    margin-top: 1rem;
	cursor: pointer;
    input {
        position: absolute;
        display: none;

        & + span {
            padding-left: 2rem;
            font-size: 0.75rem;
            color: ${({ theme }) => theme.colors.subText};
        }

        & + span::before {
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            margin-right: 0.5rem;
            box-sizing: border-box;
            content: '';
            display: inline-block;
            width: 1.5rem;
            height: 1.5rem;
            flex-shrink: 0;
            flex-grow: 0;
            border: 1px solid #80848e;
            border-radius: 0.375rem;
            background-repeat: no-repeat;
            background-position: center center;
        }

        &:checked + span::before {
            background-color: #5865f2;
            background-image: url("/public/img/checkbox.svg");
        }
    }
`

type Props = {
	id: string
	label: string | ReactNode
}

const Checkbox = ({ id, label }: Props) => {
	return (
		<StyledCheckbox htmlFor={id}>
			<input type="checkbox" id={id} />
			<span>{label}</span>
		</StyledCheckbox>
	)
}

export default Checkbox