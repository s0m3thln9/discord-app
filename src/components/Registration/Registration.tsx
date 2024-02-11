import styled from 'styled-components'
import React, { FormEvent, useState } from 'react'
import { useAuth } from '../../providers/auth-provider/AuthProvider.tsx'
import Input from '../UI/Input/Input.tsx'
import { Link } from 'react-router-dom'
import Button from '../UI/Button/Button.tsx'
import Checkbox from '../UI/Checkbox/Checkbox.tsx'
import Select from '../UI/Select/Select.tsx'

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

        &:last-child {
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
					<Input required={true} value={data.email} label={'EMAIL'}
						   onChange={e => setData({ ...data, email: e.target.value })} id={'email'}
						   type={'email'} />
					<Input value={data.email} label={'DISPLAY NAME'}
						   onChange={e => setData({ ...data, email: e.target.value })} id={'email'}
						   type={'email'} />
					<Input required={true} value={data.email} label={'USERNAME'}
						   onChange={e => setData({ ...data, email: e.target.value })} id={'email'}
						   type={'email'} />
					<Input required={true} value={data.email} label={'PASSWORD'}
						   onChange={e => setData({ ...data, email: e.target.value })} id={'email'}
						   type={'email'} />
					<label className={'label'}>DATE OF BIRTH</label>
					<div className={'selects-container'}>
						<Select initialItem={'Month'}
								items={['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']} />
						<Select initialItem={'Day'}
								items={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']} />
						<Select initialItem={'Year'}
								items={['2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007', '2006', '2005', '2004', '2003', '2002', '2001', '2000', '1999', '1998', '1997', '1996', '1995', '1994', '1993', '1992', '1991', '1990']} />
					</div>
					<Checkbox
						label={'(Optional) It\'s okay to send me emails with Discord updates, tips, and special offers. You can opt out at any time.'} />
					<Button>Continue</Button>
					<p>By registering, you agree to Discord's <Link to={'/'}>Terms of Service</Link> and <Link to={'/'}>Privacy
						Policy</Link>.</p>
					<p><Link to={'/'}>Already have an account?</Link></p>
				</StyledForm>
			</main>
		</StyledBackground>
	)
}

export default Registration