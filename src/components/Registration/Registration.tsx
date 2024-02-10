import styled from 'styled-components'
import { FormEvent, useState } from 'react'
import { useAuth } from '../../providers/auth-provider/AuthProvider.tsx'
import Input from '../UI/Input/Input.tsx'
import { Link } from 'react-router-dom'
import Button from '../UI/Button/Button.tsx'
import Checkbox from '../UI/Checkbox/Checkbox.tsx'

const StyledBackground = styled.div`
    width: 100%;
    height: 100svh;
    background: url("/img/auth-background.jpg") no-repeat;
    background-size: cover;
    display: grid;
    place-content: center;
    main {
        width: 30rem;
        border-radius: 0.3125rem;
        box-shadow: 0 1.125rem 6.25rem 0 rgba(0, 0, 0, 0.2);
        background: ${({ theme }) => theme.colors.mainBackground};
        padding: 2rem;
        display: grid;
        justify-content: space-between;
       
		h2 {
            font-size: 1.5rem;
            line-height: 1.25;
            font-weight: 600;
            color: ${({ theme }) => theme.colors.title};
            text-align: center;
		}
    }
`


const StyledForm = styled.form`
    width: 100%;
    margin-top: 1.25rem;
    button {
        margin-top: 1.25rem;
    }
    p {
        margin-top: 0.5rem;
        font-size: 0.75rem;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.subText};
		&:last-child {
            font-size: 0.875rem;
            margin-top: 1.25rem;
		}
    }
`



const Registration = () => {

	const [data, setData] = useState({
		email: '',
		password: '',
	})

	const { login } = useAuth()

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()
		await login(data)
	}

	return (
		<StyledBackground>
			<main>
				<h2>Create an account</h2>
				<StyledForm>
					<Input value={data.email} label={'EMAIL'} onChange={e => setData({ ...data, email: e.target.value })} id={'email'}
							type={'email'} />
					<Input value={data.email} label={'DISPLAY NAME'} onChange={e => setData({ ...data, email: e.target.value })} id={'email'}
							type={'email'} />
					<Input value={data.email} label={'USERNAME'} onChange={e => setData({ ...data, email: e.target.value })} id={'email'}
							type={'email'} />
					<Input value={data.email} label={'PASSWORD'} onChange={e => setData({ ...data, email: e.target.value })} id={'email'}
							type={'email'} />
					<Input value={data.email} label={'DATE OF BIRTH'} onChange={e => setData({ ...data, email: e.target.value })} id={'email'}
							type={'email'} />
					<Checkbox label={'(Optional) It\'s okay to send me emails with Discord updates, tips, and special offers. You can opt out at any time.'}/>
					<Button>Continue</Button>
					<p>By registering, you agree to Discord's <Link to={'/'}>Terms of Service</Link> and <Link to={'/'}>Privacy Policy</Link>.</p>
					<p><Link to={'/'}>Already have an account?</Link></p>
				</StyledForm>
			</main>
		</StyledBackground>
	)
}

export default Registration