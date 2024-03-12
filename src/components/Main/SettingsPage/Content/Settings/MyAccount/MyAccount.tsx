import UserImage from '../../../../../UI/UserImage/UserImage.tsx'
import Button from '../../../../../UI/Button/Button.tsx'
import Headline from '../../../../../UI/Headline/Headline.tsx'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../../../hooks/typedHooks.ts'
import { getHiddenEmail, getHiddenPhoneNumber } from '../../../../../../utils/hideUserData.ts'
import { SettingList } from '../../../SettingsPage.tsx'
import DialogPopover from '../../../../../UI/DiallogPopover/DialogPopover.tsx'
import { Cross } from '../../../../../../../public/svgs.tsx'
import Input from '../../../../../UI/Input/Input.tsx'
import { useUpdateUsernameMutation } from '../../../../../../api/api.ts'
import { updateUsernameD } from '../../../../../../store/slices/authUserSlice.ts'
import Loader from '../../../../../UI/Loader/Loader.tsx'
import { UpdateUsernameResponse } from '../../../../../../types/user.ts'

type Props = {
	setCurrentSetting: (newSetting: SettingList) => void
}

const MyAccount = ({ setCurrentSetting }: Props) => {
	const user = useAppSelector(state => state.auth.user)

	const [showPhone, setShowPhone] = useState(false)
	const [showEmail, setShowEmail] = useState(false)
	const [showEditUsernamePopover, setShowEditUsernamePopover] = useState(false)
	const [changeUsername, setChangeUsername] = useState('')
	const [password, setPassword] = useState('')
	const [updateUsername, { isLoading }] = useUpdateUsernameMutation()
	const dispatch = useAppDispatch()
	const [updateUsernameServerResponse, setUpdateUsernameServerResponse] = useState<UpdateUsernameResponse | null>(
		null,
	)

	useEffect(() => {
		if (user?.username) {
			setChangeUsername(user.username)
		}
	}, [user])

	if (!user) {
		return <p>Loading...</p>
	}

	let number = ''
	if (user.phoneNumber) {
		number = getHiddenPhoneNumber(user.phoneNumber)
	}
	const mail = getHiddenEmail(user.email)

	const toggleShowPhone = () => {
		setShowPhone(currentShowPhone => !currentShowPhone)
	}

	const toggleShowEmail = () => {
		setShowEmail(currentShowEmail => !currentShowEmail)
	}
	return (
		<>
			<h2 className={'text-xl font-semibold text-[white]'}>My Account</h2>
			<div className={'mt-5 w-full rounded-lg bg-[#1e1f22] pb-4'}>
				<div className={'h-[6.25rem] rounded-tl-lg rounded-tr-lg bg-[#130a1e]'}></div>
				<div className={'flex h-20'}>
					<UserImage
						image={user?.userImage || ''}
						color={user?.color}
						onlineStatus={user?.onlineStatus}
						bgColor={'profile-bg'}
						size={'lg'}
						border={'profile'}
						className={'ml-4 -translate-y-[2rem]'}
					/>
					<h2 className={'ml-4 mt-4 h-fit text-xl font-semibold text-white'}>{user.displayName}</h2>
					<Button
						variant={'primary'}
						className={'ml-auto mr-4 mt-4 h-8 w-fit px-4 leading-4'}
						onClick={() => setCurrentSetting('Profiles')}
					>
						Edit User Profile
					</Button>
				</div>
				<div className={'mx-4 rounded-lg bg-sidebar p-4'}>
					<div className={'flex items-center justify-between'}>
						<div>
							<Headline>Display name</Headline>
							<h2 className={'font-regular text-white'}>{user.displayName}</h2>
						</div>
						<EditBtn
							onClick={() => {
								setCurrentSetting('Profiles')
							}}
						/>
					</div>
					<div className={'mt-6 flex items-center justify-between'}>
						<div>
							<Headline>Username</Headline>
							<h2 className={'font-regular text-white'}>{user.username}</h2>
						</div>
						<EditBtn
							onClick={() => {
								setShowEditUsernamePopover(true)
							}}
						/>
					</div>
					<div className={'mt-6 flex items-center justify-between'}>
						<div>
							<Headline>Email</Headline>
							<h2 className={'font-regular text-white'}>
								{!showEmail ? mail : user.email}
								<span
									className={'ml-1 text-sm text-[#00a8fc] hover:underline'}
									onClick={toggleShowEmail}
								>
									{!showEmail ? 'Reveal' : 'Hide'}
								</span>
							</h2>
						</div>
						<EditBtn
							onClick={() => {
								setCurrentSetting('Profiles')
							}}
						/>
					</div>
					{user.phoneNumber && (
						<div className={'mt-6 flex items-center justify-between'}>
							<div>
								<Headline>Phone number</Headline>
								<h2 className={'font-regular text-white'}>
									{!showPhone ? number : `+${user.phoneNumber}`}
									<span
										className={'ml-1 text-sm text-[#00a8fc] hover:underline'}
										onClick={toggleShowPhone}
									>
										{!showPhone ? 'Reveal' : 'Hide'}
									</span>
								</h2>
							</div>
							<EditBtn
								onClick={() => {
									setCurrentSetting('Profiles')
								}}
							/>
						</div>
					)}
				</div>
				<DialogPopover isOpen={showEditUsernamePopover} setIsOpen={setShowEditUsernamePopover}>
					<div className={'relative flex items-center justify-between'}>
						<div className={'flex grow flex-col items-center justify-center px-4 py-6 pb-0'}>
							<h2 className={'text-md text-center text-2xl font-bold text-[white]'}>
								Change your username
							</h2>
							<p>Enter a new username and your existing password.</p>
						</div>
						<Button
							variant={'icon'}
							className={'absolute right-2 top-2 m-2 bg-[transparent] hover:bg-[transparent]'}
							onClick={() => setShowEditUsernamePopover(false)}
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
								setUpdateUsernameServerResponse(null)
							}}
						/>
						<div className={'mt-3'}>
							<Input
								id={'password'}
								label={'current password'}
								type={'password'}
								value={password}
								onChange={e => {
									setPassword(e.target.value)
									setUpdateUsernameServerResponse(null)
								}}
							/>
							<p>{!updateUsernameServerResponse?.success && updateUsernameServerResponse?.message}</p>
						</div>
					</div>
					<div className={'flex justify-end bg-sidebar p-4'}>
						<Button variant={'link'} onClick={() => setShowEditUsernamePopover(false)}>
							Cancel
						</Button>
						<Button
							variant={'primary'}
							className={'w-fit px-6'}
							onClick={async () => {
								if (!password) {
									setUpdateUsernameServerResponse({
										success: false,
										message: 'Password is required',
									})
									return
								}
								const response = await updateUsername({ username: changeUsername, password }).unwrap()
								console.log(response)
								if (response.success) {
									dispatch(updateUsernameD(changeUsername))
									setShowEditUsernamePopover(false)
								} else {
									setUpdateUsernameServerResponse(response)
								}
								setPassword('')
							}}
						>
							{!isLoading ? 'Done' : <Loader />}
							{/*<Loader />*/}
						</Button>
					</div>
				</DialogPopover>
			</div>
		</>
	)
}

type EditBtnProps = {
	onClick: () => void
}

const EditBtn = ({ onClick }: EditBtnProps) => {
	return (
		<Button
			variant={'text'}
			className={'h-8 bg-[#4e5058] px-4 text-white transition hover:bg-[#6d6f78] hover:text-[white]'}
			onClick={onClick}
		>
			Edit
		</Button>
	)
}

export default MyAccount
