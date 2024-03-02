import HomeNavigation from '../sidebar/HomeNavigation/HomeNavigation.tsx'
import DirectMessages from '../sidebar/directMessages/DirectMessages.tsx'
import UserInfo from '../sidebar/UserInfo/UserInfo.tsx'
import FriendsSection from '../Friends/Friends.tsx'
import FindDialog from '../sidebar/FindDialog/FindDialog.tsx'

const Content = () => {
	return (
		<>
			<aside className={'bg-sidebar'}>
				<FindDialog />
				<div className={'h-[calc(100svh-6.25rem)] w-60 overflow-x-hidden overflow-y-scroll pb-2.5'}>
					<HomeNavigation />
					<DirectMessages />
				</div>
				<UserInfo />
			</aside>
			<FriendsSection />
		</>
	)
}

export default Content
