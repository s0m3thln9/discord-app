import React, { useState } from 'react'
import DialogPopover from '../../UI/DiallogPopover/DialogPopover.tsx'
import { useAuth } from '../../../providers/authProvider/AuthProvider.tsx'
import Headline from '../../UI/Headline/Headline.tsx'
import { SettingList } from '../SettingsPage.tsx'

type Setting = {
	id: number
	name: string
	onClick?: () => void
}

type Menu = {
	title?: string
	list: Setting[]
}

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	currentSetting: SettingList
	setCurrentSetting: (newSetting: SettingList) => void
}

const SettingsSidebar = ({ className, currentSetting, setCurrentSetting }: Props) => {
	const { logout } = useAuth()

	const [isLogoutPopoverOpen, openLogoutPopover] = useState(false)

	const openLogoutPopoverHandler = () => {
		openLogoutPopover(true)
	}

	const userSettings: Menu = {
		title: 'User Settings',
		list: [
			{
				id: 1,
				name: 'My Account',
			},
			{
				id: 2,
				name: 'Profiles',
			},
			{
				id: 3,
				name: 'Privacy & Safety',
			},
			{
				id: 4,
				name: 'Family Center',
			},
			{
				id: 5,
				name: 'Authorized Apps',
			},
			{
				id: 6,
				name: 'Devices',
			},
			{
				id: 7,
				name: 'Connections',
			},
			{
				id: 8,
				name: 'Clips',
			},
			{
				id: 9,
				name: 'Friend Requests',
			},
		],
	}

	const billingSettings: Menu = {
		title: 'Billing Settings',
		list: [
			{
				id: 1,
				name: 'Nitro',
			},
			{
				id: 2,
				name: 'Server Boost',
			},
			{
				id: 3,
				name: 'Subscriptions',
			},
			{
				id: 4,
				name: 'Gift Inventory',
			},
			{
				id: 5,
				name: 'Billing',
			},
		],
	}

	const appSettings: Menu = {
		title: 'App Settings',
		list: [
			{
				id: 1,
				name: 'Appearance',
			},
			{
				id: 2,
				name: 'Accessibility',
			},
			{
				id: 3,
				name: 'Voice & Video',
			},
			{
				id: 4,
				name: 'Chat',
			},
			{
				id: 5,
				name: 'Notifications',
			},
			{
				id: 6,
				name: 'Keybinds',
			},
			{
				id: 7,
				name: 'Language',
			},
			{
				id: 8,
				name: 'Streamer Mode',
			},
			{
				id: 9,
				name: 'Advanced',
			},
		],
	}

	const activitySettings: Menu = {
		title: 'Activity Settings',
		list: [
			{
				id: 1,
				name: 'Activity Privacy',
			},
		],
	}

	const alsoSettings: Menu = {
		list: [
			{
				id: 1,
				name: "What's new",
			},
			{
				id: 2,
				name: 'Merch',
			},
			{
				id: 3,
				name: 'HypeSquad',
			},
		],
	}

	const logoutSettings: Menu = {
		list: [
			{
				id: 1,
				name: 'Log Out',
				onClick: openLogoutPopoverHandler,
			},
		],
	}

	return (
		<aside className={`bg-sidebar ${className}`}>
			<div className={'flex h-svh w-full justify-end overflow-y-scroll pl-5 pr-1.5'}>
				<div className={'h-fit w-[13.625rem] py-[3.75rem]'}>
					<PrintMenu
						menu={userSettings}
						currentSetting={currentSetting}
						setCurrentSetting={setCurrentSetting}
					/>
					<PrintMenu
						menu={billingSettings}
						currentSetting={currentSetting}
						setCurrentSetting={setCurrentSetting}
					/>
					<PrintMenu
						menu={appSettings}
						currentSetting={currentSetting}
						setCurrentSetting={setCurrentSetting}
					/>
					<PrintMenu
						menu={activitySettings}
						currentSetting={currentSetting}
						setCurrentSetting={setCurrentSetting}
					/>
					<PrintMenu
						menu={alsoSettings}
						currentSetting={currentSetting}
						setCurrentSetting={setCurrentSetting}
					/>
					<PrintMenu
						menu={logoutSettings}
						currentSetting={currentSetting}
						setCurrentSetting={setCurrentSetting}
					/>
				</div>
			</div>
			<DialogPopover
				title={'Log Out'}
				content={'Are you sure you want to logout?'}
				isOpen={isLogoutPopoverOpen}
				setIsOpen={openLogoutPopover}
				dangerAction={logout}
			/>
		</aside>
	)
}

type MenuProps = {
	menu: Menu
	currentSetting: SettingList
	setCurrentSetting: (newSetting: SettingList) => void
}

const PrintMenu = ({ menu, currentSetting, setCurrentSetting }: MenuProps) => {
	return (
		<>
			{menu.title && <Headline className={'px-2.5 pb-1.5'}>{menu.title}</Headline>}
			<ul>
				{menu.list.map(setting => (
					<li
						className={`h-fit cursor-pointer rounded ${currentSetting === setting.name ? 'bg-hover' : ''}`}
						key={setting.id}
						onClick={() => setCurrentSetting(setting.name as SettingList)}
					>
						<span
							className={`mb-0.5 block rounded px-2.5 py-1.5 text-[#b5bac1] hover:bg-hover hover:no-underline ${currentSetting === setting.name ? 'text-white' : ''}`}
							onClick={setting?.onClick}
						>
							{setting.name}
						</span>
					</li>
				))}
			</ul>
			<div className={'mx-2.5 my-2 h-[1px] w-[calc(100%-1.25rem)] bg-hover '}></div>
		</>
	)
}

export default SettingsSidebar
