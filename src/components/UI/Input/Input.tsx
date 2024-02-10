import styled from 'styled-components'
import React from 'react'


const StyledInputContainer = styled.div`
    &:not(:first-child) {
        margin-top: 1.25rem;
    }

    label {
        font-size: 0.75rem;
        line-height: 1.3;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: .02em;
        color: ${({ theme }) => theme.colors.text};

        &::after {
            content: ' *';
            color: #f23f42;
        }
    }

    input {
        margin-top: 0.5rem;
        width: 100%;
        height: 2.5rem;
        padding: 0.625rem;
        font-weight: 500;
        border-radius: 0.1875rem;
        background: ${({ theme }) => theme.colors.inputBackground};
        color: ${({ theme }) => theme.colors.inputColor};
    }
`


type Props = {
	id: string
	type: 'email' | 'password'
	value: string,
	label: string,
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}


const Input = ({ id, type, value, label, onChange }: Props) => {
	return (
		<StyledInputContainer>
			<label htmlFor={id}>{label}</label>
			<input required id={id} type={type} value={value} onChange={onChange} />
		</StyledInputContainer>
	)
}

export default Input