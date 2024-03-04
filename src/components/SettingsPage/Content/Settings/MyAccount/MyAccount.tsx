import UserImage from '../../../../UI/UserImage/UserImage.tsx'
import Button from '../../../../UI/Button/Button.tsx'
import Headline from '../../../../UI/Headline/Headline.tsx'
import React from 'react'
import { useAppSelector } from '../../../../../hooks/typedHooks.ts'
import { getHiddenEmail, getHiddenPhoneNumber } from '../../../../../utils/hideUserData.ts'
import { SettingList } from '../../../SettingsPage.tsx'

type Props = {
	setCurrentSetting: (newSetting: SettingList) => void
}

const MyAccount = ({ setCurrentSetting }: Props) => {
	const user = useAppSelector(state => state.auth.user)

	const [showPhone, setShowPhone] = React.useState(false)
	const [showEmail, setShowEmail] = React.useState(false)

	if (!user) {
		return <p>Loading...</p>
	}

	const number = getHiddenPhoneNumber(user.phoneNumber)
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
					<h2 className={'text-white ml-4 mt-4 h-fit text-xl font-semibold'}>{user.displayName}</h2>
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
							<h2 className={'text-white font-regular'}>{user.displayName}</h2>
						</div>
						<Button
							variant={'text'}
							className={
								'text-white h-8 bg-[#4e5058] px-4 transition hover:bg-[#6d6f78] hover:text-[white]'
							}
							onClick={() => setCurrentSetting('Profiles')}
						>
							Edit
						</Button>
					</div>
					<div className={'mt-6 flex items-center justify-between'}>
						<div>
							<Headline>Username</Headline>
							<h2 className={'text-white font-regular'}>{user.username}</h2>
						</div>
						<Button
							variant={'text'}
							className={
								'text-white h-8 bg-[#4e5058] px-4 transition hover:bg-[#6d6f78] hover:text-[white]'
							}
							onClick={() => setCurrentSetting('Profiles')}
						>
							Edit
						</Button>
					</div>
					<div className={'mt-6 flex items-center justify-between'}>
						<div>
							<Headline>Email</Headline>
							<h2 className={'text-white font-regular'}>
								{!showEmail ? mail : user.email}
								<span
									className={'ml-1 text-sm text-[#00a8fc] hover:underline'}
									onClick={toggleShowEmail}
								>
									{!showEmail ? 'Reveal' : 'Hide'}
								</span>
							</h2>
						</div>
						<Button
							variant={'text'}
							className={
								'text-white h-8 bg-[#4e5058] px-4 transition hover:bg-[#6d6f78] hover:text-[white]'
							}
							onClick={() => setCurrentSetting('Profiles')}
						>
							Edit
						</Button>
					</div>
					<div className={'mt-6 flex items-center justify-between'}>
						<div>
							<Headline>Phone number</Headline>
							<h2 className={'text-white font-regular'}>
								{!showPhone ? number : `+${user.phoneNumber}`}
								<span
									className={'ml-1 text-sm text-[#00a8fc] hover:underline'}
									onClick={toggleShowPhone}
								>
									{!showPhone ? 'Reveal' : 'Hide'}
								</span>
							</h2>
						</div>
						<Button
							variant={'text'}
							className={
								'text-white h-8 bg-[#4e5058] px-4 transition hover:bg-[#6d6f78] hover:text-[white]'
							}
							onClick={() => setCurrentSetting('Profiles')}
						>
							Edit
						</Button>
					</div>
				</div>
			</div>
		</>
	)
}

export default MyAccount
