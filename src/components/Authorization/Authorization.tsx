import styled from 'styled-components'
import { FormEvent, useState } from 'react'
import { useAuth } from '../../providers/auth-provider/AuthProvider.tsx'
import Input from '../UI/Input/Input.tsx'
import { Link } from 'react-router-dom'
import Button from '../UI/Button/Button.tsx'

const StyledBackground = styled.div`
    width: 100%;
    height: 100svh;
    background: url("/img/auth-background.jpg") no-repeat;
    background-size: cover;
    display: grid;
    place-content: center;

    main {
        width: 49rem;
        border-radius: 0.3125rem;
        box-shadow: 0 1.125rem 6.25rem 0 rgba(0, 0, 0, 0.2);
        background: ${({ theme }) => theme.colors.mainBackground};
        padding: 2rem;
        display: grid;
        grid-template-columns: 1.725fr 1fr;
        justify-content: space-between;
        @media (max-width: 830px) {
            grid-template-columns: 100%;
            width: 30rem;
        }
        @media (max-width: 485px) {
            padding: 1.25rem 1rem;
            width: 100vw;
            height: 100svh;
            border-radius: 0;
        }
    }
`

const StyledWelcomeBlock = styled.div`
    display: grid;
    justify-items: center;
    @media (max-width: 485px) {
        align-content: start;
        width: auto;
        height: 100%;
    }

    & > img {
        display: none;
        margin-bottom: 1rem;
        @media (max-width: 485px) {
            display: block;
        }
    }

    & > h2 {
        font-size: 1.5rem;
        line-height: 1.25;
        font-weight: 600;
        color: ${({ theme }) => theme.colors.title};
        text-align: center;
    }

    & > p {
        margin-top: 0.5rem;
        line-height: 1.25;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.text};
        text-align: center;
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
        font-size: 0.875rem;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.subText};
    }
`

const StyledQRBlock = styled.div`
    margin-left: 4.125rem;
    display: grid;
    justify-items: center;
    @media (max-width: 830px) {
        display: none;
    }

    p {
        margin-top: 0.5rem;
        line-height: 1.25;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.text};
        text-align: center;
    }

    h2 {
        margin-top: 2rem;
        font-size: 1.5rem;
        line-height: 1.25;
        font-weight: 600;
        color: ${({ theme }) => theme.colors.title};
        text-align: center;
    }
`


const Authorization = () => {

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
				<StyledWelcomeBlock>
					<img src="/public/img/discord-logo.svg" alt="" />
					<h2>Welcome back!</h2>
					<p>We're so excited to see you again!</p>
					<StyledForm onSubmit={handleSubmit}>
						<Input value={data.email} label={'EMAIL'}
								onChange={e => setData({ ...data, email: e.target.value })} id={'email'}
								type={'email'} />
						<Input value={data.password} label={'PASSWORD'}
								onChange={e => setData({ ...data, password: e.target.value })} id={'password'}
								type={'password'} />
						<p><Link to="/">Forgot your password?</Link></p>
						<Button>Login</Button>
						<p>Need an account? <Link
							to="">Register</Link></p>
					</StyledForm>
				</StyledWelcomeBlock>
				<StyledQRBlock>
					<img src="/public/img/qr-code.png" alt="" />
					<h2>Log in with QR Code</h2>
					<p>Scan this with the <strong>Discord mobile app</strong> to log in
						instantly.</p>
				</StyledQRBlock>
			</main>
		</StyledBackground>
	)
}

export default Authorization