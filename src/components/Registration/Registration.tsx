import styled from 'styled-components'
import { FormEvent, useState } from 'react'
import { useAuth } from '../../providers/auth-provider/AuthProvider.tsx'
import Input from '../UI/Input/Input.tsx'
import { Link } from 'react-router-dom'
import Button from '../UI/Button/Button.tsx'
import Checkbox from '../UI/Checkbox/Checkbox.tsx'
import Select from '../UI/Select/Select.tsx'
import { RegisterUserData } from '../../types/AuthProvider.ts'
import { days, months, years } from './data.ts'

const StyledBackground = styled.div`
    user-select: none;
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

        &.have-acc {
            font-size: 0.875rem;
            margin-top: 1.25rem;
        }
    }

    .label {
        display: block;
        margin-top: 1.25rem;
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

    .selects-container {
        display: flex;
        margin-top: 0.5rem;
        justify-content: space-between;
    }
`


const Registration = () => {

	const [data, setData] = useState<RegisterUserData>({
		email: '',
		showname: '',
		username: '',
		password: '',
		birthdayYear: 0,
		birthdayMonth: '',
		birthdayDay: 0,
	})

	const { register } = useAuth()

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()
		await register(data)
	}

	return (
		<StyledBackground>
			<main>
				<h2>Create an account</h2>
				<StyledForm onSubmit={handleSubmit}>
					<Input required={true} value={data.email} label={'EMAIL'}
						   onChange={e => setData({ ...data, email: e.target.value })} id={'email'}
						   type={'email'} />
					<Input required={true} value={data.showname} label={'DISPLAY NAME'}
						   onChange={e => setData({ ...data, showname: e.target.value })} id={'showname'}
						   type={'text'} />
					<Input required={true} value={data.username} label={'USERNAME'}
						   onChange={e => setData({ ...data, username: e.target.value })} id={'username'}
						   type={'text'} />
					<Input required={true} value={data.password} label={'PASSWORD'}
						   onChange={e => setData({ ...data, password: e.target.value })} id={'password'}
						   type={'password'} />
					<label className={'label'}>DATE OF BIRTH</label>
					<div className={'selects-container'}>
						<Select initialValue={'Month'} onSelect={value => {
							setData({ ...data, birthdayMonth: value })
						}}
								items={months} value={data.birthdayMonth} />
						<Select initialValue={'Day'} onSelect={value => {
							setData({ ...data, birthdayDay: parseInt(value) })
						}}
								items={days} value={data.birthdayDay} />
						<Select initialValue={'Year'} onSelect={value => {
							setData({ ...data, birthdayYear: parseInt(value) })
						}}
								items={years} value={data.birthdayYear} />
					</div>
					<Checkbox id={'offers'}
							  label={'(Optional) It\'s okay to send me emails with Discord updates, tips, and special offers. You can opt out at any time.'} />
					<Button>Continue</Button>
					<Checkbox id={'terms'}
							  label={
									<p>By registering, you agree to Discord's <Link to={'/'}>Terms of
								  Service</Link> and <Link to={'/'}>Privacy
								  Policy</Link>.</p>
								} />
					<p className={'have-acc'}><Link to={'/login'}>Already have an account?</Link></p>
				</StyledForm>
			</main>
		</StyledBackground>
	)
}

export default Registration