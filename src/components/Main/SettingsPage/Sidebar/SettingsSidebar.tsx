import React, { useState } from 'react'
import Headline from '../../../UI/Headline/Headline.tsx'
import { SettingList } from '../SettingsPage.tsx'
import LogoutModal from './LogoutModal.tsx'

type Setting = {
	id: number
	page?: string
	title: string
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
	const [isLogoutPopoverOpen, setIsLogoutPopoverOpen] = useState(false)

	const openLogoutModal = () => {
		setIsLogoutPopoverOpen(true)
	}

	const userSettings: Menu = {
		title: 'User Settings',
		list: [
			{
				id: 1,
				page: 'My Account',
				title: 'My Account',
			},
			{
				id: 2,
				page: 'Profiles',
				title: 'Profiles',
			},
			{
				id: 3,
				page: 'Privacy & Safety',
				title: 'Privacy & Safety',
			},
			{
				id: 4,
				page: 'Family Center',
				title: 'Family Center',
			},
			{
				id: 5,
				page: 'Authorized Apps',
				title: 'Authorized Apps',
			},
			{
				id: 6,
				page: 'Devices',
				title: 'Devices',
			},
			{
				id: 7,
				page: 'Connections',
				title: 'Connections',
			},
			{
				id: 8,
				page: 'Clips',
				title: 'Clips',
			},
			{
				id: 9,
				page: 'Friend Requests',
				title: 'Friend Requests',
			},
		],
	}

	const billingSettings: Menu = {
		title: 'Billing Settings',
		list: [
			{
				id: 1,
				page: 'Nitro',
				title: 'Nitro',
			},
			{
				id: 2,
				page: 'Server Boost',
				title: 'Server Boost',
			},
			{
				id: 3,
				page: 'Subscriptions',
				title: 'Subscriptions',
			},
			{
				id: 4,
				page: 'Gift Inventory',
				title: 'Gift Inventory',
			},
			{
				id: 5,
				page: 'Billing',
				title: 'Billing',
			},
		],
	}

	const appSettings: Menu = {
		title: 'App Settings',
		list: [
			{
				id: 1,
				page: 'Appearance',
				title: 'Appearance',
			},
			{
				id: 2,
				page: 'Accessibility',
				title: 'Accessibility',
			},
			{
				id: 3,
				page: 'Voice & Video',
				title: 'Voice & Video',
			},
			{
				id: 4,
				page: 'Chat',
				title: 'Chat',
			},
			{
				id: 5,
				page: 'Notifications',
				title: 'Notifications',
			},
			{
				id: 6,
				page: 'Keybinds',
				title: 'Keybinds',
			},
			{
				id: 7,
				page: 'Language',
				title: 'Language',
			},
			{
				id: 8,
				page: 'Streamer Mode',
				title: 'Streamer Mode',
			},
			{
				id: 9,
				page: 'Advanced',
				title: 'Advanced',
			},
		],
	}

	const activitySettings: Menu = {
		title: 'Activity Settings',
		list: [
			{
				id: 1,
				page: 'Activity Privacy',
				title: 'Activity Privacy',
			},
		],
	}

	const alsoSettings: Menu = {
		list: [
			{
				id: 1,
				page: "What's new",
				title: "What's new?",
			},
			{
				id: 2,
				page: 'Merch',
				title: 'Merch',
			},
			{
				id: 3,
				page: 'HypeSquad',
				title: 'HypeSquad',
			},
		],
	}

	const logoutSettings: Menu = {
		list: [
			{
				id: 1,
				title: 'Log Out',
				onClick: openLogoutModal,
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
			<LogoutModal isLogoutPopoverOpen={isLogoutPopoverOpen} setIsLogoutPopoverOpen={setIsLogoutPopoverOpen} />
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
						className={`h-fit cursor-pointer rounded ${currentSetting === setting.page ? 'bg-hover' : ''}`}
						key={setting.id}
						onClick={() => {
							setting.page ? setCurrentSetting(setting.page as SettingList) : ''
						}}
					>
						<span
							className={`mb-0.5 block rounded px-2.5 py-1.5 text-[#b5bac1] hover:bg-hover hover:no-underline ${currentSetting === setting.page ? 'text-white' : ''}`}
							onClick={setting?.onClick}
						>
							{setting.title}
						</span>
					</li>
				))}
			</ul>
			<div className={'mx-2.5 my-2 h-[1px] w-[calc(100%-1.25rem)] bg-hover '}></div>
		</>
	)
}

export default SettingsSidebar
