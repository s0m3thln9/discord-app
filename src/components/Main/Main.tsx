import { lazy, useState } from 'react'
import MainPage from './MainPage/MainPage.tsx'

const SettingsPage = lazy(() => import('./SettingsPage/SettingsPage.tsx'))

const Main = () => {
	const [isSettingsOpen, setIsSettingsOpen] = useState(false)

	const toggleSettings = () => {
		setIsSettingsOpen(isSettingsOpenPrev => !isSettingsOpenPrev)
	}

	const closeSettings = () => {
		setIsSettingsOpen(false)
	}

	return (
		<main className={'relative h-[100svh] overflow-hidden bg-[#313338] text-[#b5bac1]'}>
			<MainPage
				className={`${isSettingsOpen ? 'pointer-events-none scale-90 opacity-0 ' : ''}`}
				toggleSettings={toggleSettings}
			/>
			<SettingsPage
				toggleSettings={toggleSettings}
				closeSettings={closeSettings}
				className={`${!isSettingsOpen ? 'pointer-events-none scale-110 opacity-0 ' : ''}`}
			/>
		</main>
	)
}

export default Main
