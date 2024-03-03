import { useState } from 'react'
import MainPage from '../MainPage/MainPage.tsx'
import SettingsPage from '../SettingsPage/SettingsPage.tsx'

export const Main = () => {
	const [isSettingsOpen, openSettings] = useState(false)

	const toggleSettings = () => {
		openSettings(isSettingsOpenPrev => !isSettingsOpenPrev)
	}

	return (
		<main className={'text- h-[100svh] bg-[#313338] text-[#b5bac1]'}>
			<MainPage
				className={`${isSettingsOpen ? 'pointer-events-none scale-95 opacity-0 ' : ''}`}
				toggleSettings={toggleSettings}
			/>
			<SettingsPage
				toggleSettings={toggleSettings}
				className={`${!isSettingsOpen ? 'pointer-events-none scale-95 opacity-0 ' : ''}`}
			/>
		</main>
	)
}
