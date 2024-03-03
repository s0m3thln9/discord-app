import Button from '../UI/Button/Button.tsx'
import React from 'react'
import SettingsSidebar from './Sidebar/SettingsSidebar.tsx'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	toggleSettings: () => void
}

const SettingsPage = ({ toggleSettings, className }: Props) => {
	return (
		<div className={`absolute flex w-full transition duration-300 ${className}`}>
			<SettingsSidebar className={'flex-[1_0_auto]'} />
			<main className={'flex-[1_1_800px]'}>
				<Button variant={'text'} onClick={toggleSettings}>
					Close
				</Button>
			</main>
		</div>
	)
}

export default SettingsPage
