import UserPanel from './UserPanel/UserPanel.tsx'
import FindDialog from './FindDialog/FindDialog.tsx'
import DirectMessages from './DirectMessages/DirectMessages.tsx'
import HomeNavigation from './HomeNavigation/HomeNavigation.tsx'

type Props = {
	toggleSettings: () => void
}

const MainSidebar = ({ toggleSettings }: Props) => {
	return (
		<aside className={'bg-sidebar'}>
			<FindDialog />
			<div className={'h-[calc(100svh-6.25rem)] w-60 overflow-y-scroll pb-2.5'}>
				<HomeNavigation />
				<DirectMessages />
			</div>
			<UserPanel toggleSettings={toggleSettings} />
		</aside>
	)
}

export default MainSidebar
