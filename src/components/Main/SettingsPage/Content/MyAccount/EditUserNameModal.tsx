import Button from '../../../../UI/Button/Button.tsx'
import { Cross } from '../../../../../assets/svgs.tsx'
import Input from '../../../../UI/Input/Input.tsx'
import { updateUsernameD } from '../../../../../store/slices/authUserSlice.ts'
import Loader from '../../../../UI/Loader/Loader.tsx'
import Modal from '../../../../UI/DiallogPopover/Modal.tsx'
import { useEffect, useState } from 'react'
import { useUpdateUsernameMutation } from '../../../../../api/api.ts'
import { useAppDispatch, useAppSelector } from '../../../../../hooks/typedHooks.ts'

type Props = {
	showEditUsernameModal: boolean
	setShowEditUsernameModal: (showEditUsernameModal: boolean) => void
}
type Error = { message: string; type: string }

const EditUserNameModal = ({ showEditUsernameModal, setShowEditUsernameModal }: Props) => {
	const [changeUsername, setChangeUsername] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState<Error | undefined>(undefined)

	const [updateUsername, { isLoading }] = useUpdateUsernameMutation()

	const dispatch = useAppDispatch()

	const user = useAppSelector(state => state.auth.user)

	useEffect(() => {
		if (user?.username) {
			setChangeUsername(user.username)
		}
	}, [user])

	const updateUserNameHandler = async () => {
		if (!password) {
			setError({
				type: 'required',
				message: 'Password is required',
			})
			return
		}
		const response = await updateUsername({ username: changeUsername, password }).unwrap()
		console.log(response)
		if (response.success) {
			dispatch(updateUsernameD(changeUsername))
			setShowEditUsernameModal(false)
		} else {
			setError({
				type: 'required',
				message: 'Password is required',
			})
			setError({ message: response.message, type: 'required' })
		}
		setPassword('')
	}

	const handleClose = () => {
		setShowEditUsernameModal(false)
		setError(undefined)
	}

	return (
		<Modal isOpen={showEditUsernameModal} handleClose={handleClose}>
			<div className={'relative flex items-center justify-between'}>
				<div className={'flex grow flex-col items-center justify-center px-4 py-6 pb-0'}>
					<h2 className={'text-md text-center text-2xl font-bold text-[white]'}>Change your username</h2>
					<p>Enter a new username and your existing password.</p>
				</div>
				<Button
					variant={'icon'}
					className={'absolute right-2 top-2 m-2 bg-[transparent] hover:bg-[transparent]'}
					onClick={() => setShowEditUsernameModal(false)}
				>
					<Cross className="fill-white" />
				</Button>
			</div>
			<div className={'p-4'}>
				<Input
					id={'username'}
					label={'username'}
					type={'text'}
					value={changeUsername}
					onChange={e => {
						setChangeUsername(e.target.value)
						setError(undefined)
					}}
				/>
				<div className={'mt-3'}>
					<Input
						id={'password'}
						label={'current password'}
						type={'password'}
						value={password}
						required
						onChange={e => {
							setPassword(e.target.value)
							setError(undefined)
						}}
						className={'w-full'}
						error={error}
					/>
				</div>
			</div>
			<div className={'flex justify-end bg-sidebar p-4'}>
				<Button variant={'link'} onClick={handleClose}>
					Cancel
				</Button>
				<Button variant={'primary'} className={'w-fit px-6'} onClick={updateUserNameHandler}>
					{!isLoading ? 'Done' : <Loader />}
				</Button>
			</div>
		</Modal>
	)
}

export default EditUserNameModal
