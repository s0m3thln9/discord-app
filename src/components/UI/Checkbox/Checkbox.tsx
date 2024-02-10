import styled from 'styled-components'

const StyledCheckbox = styled.label`
    position: relative;
    display: inline-flex;
    margin-top: 0.5rem;
	
    input {
        position: absolute;
        opacity: 0;

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

const Checkbox = ({ label }) => {
	return (
		<StyledCheckbox htmlFor={'checkbox'}>
			<input type="checkbox" id={'checkbox'} />
			<span>{label}</span>
		</StyledCheckbox>
	)
}

export default Checkbox