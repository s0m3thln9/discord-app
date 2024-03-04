import Button from '../UI/Button/Button.tsx'
import React from 'react'
import SettingsSidebar from './Sidebar/SettingsSidebar.tsx'
import { Cross } from '../../../public/svgs.tsx'
import UserImage from '../UI/UserImage/UserImage.tsx'
import { useAppSelector } from '../../hooks/typedHooks.ts'
import Headline from '../UI/Headline/Headline.tsx'
import { getHiddenEmail, getHiddenPhoneNumber } from '../../utils/hideUserData.ts'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	toggleSettings: () => void
}

const SettingsPage = ({ toggleSettings, className }: Props) => {
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
		<div className={`absolute flex w-full transition duration-300 ${className}`}>
			<SettingsSidebar className={'flex-[1_0_auto]'} />
			<div className={'flex flex-[1_1_800px] pb-[5rem] pt-[3.75rem]'}>
				<div className={'w-[740px] px-10 '}>
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
							<Button variant={'primary'} className={'ml-auto mr-4 mt-4 h-8 w-fit px-4 leading-4'}>
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
								>
									Edit
								</Button>
							</div>
						</div>
					</div>
				</div>
				<Button
					variant={'text'}
					onClick={toggleSettings}
					className={'group mr-5 flex flex-col justify-center hover:bg-content'}
				>
					<div
						className={
							'border-gray-300 flex h-8 w-8 items-center justify-center rounded-full border-2 group-hover:fill-[#dbdee1]'
						}
					>
						<Cross className={'fill-[#b5bac1]'} />
					</div>
					<p className={'mt-2 text-xs font-bold'}>ESC</p>
				</Button>
			</div>
		</div>
	)
}

export default SettingsPage
