import React from 'react'
import SettingsSidebar from './Sidebar/SettingsSidebar.tsx'
import Content from './Content/Content.tsx'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	toggleSettings: () => void
}

export type SettingList = 'My Account' | 'Profiles'

const SettingsPage = ({ toggleSettings, className }: Props) => {
	const [currentSetting, setCurrentSetting] = React.useState<SettingList>('My Account')
	return (
		<div className={`absolute flex w-full transition duration-300 ${className}`}>
			<SettingsSidebar
				className={'flex-[1_0_auto]'}
				currentSetting={currentSetting}
				setCurrentSetting={setCurrentSetting}
			/>
			<Content
				toggleSettings={toggleSettings}
				currentSetting={currentSetting}
				setCurrentSetting={setCurrentSetting}
			/>
		</div>
	)
}

export default SettingsPage
