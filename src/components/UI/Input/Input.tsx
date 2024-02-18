import styled from 'styled-components'

const StyledInput = styled.input`

`

const Input = ({ id, type, onChange, onBlur, onFocus }) => {
	return (
		<StyledInput id={id} type={type} onChange={onChange} onBlur={onBlur} onFocus={onFocus}/>
	)
}

export default Input