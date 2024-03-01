import TextButton from '../UI/Button/TextButton.tsx'
import HomeNavigation from '../sidebar/HomeNavigation/HomeNavigation.tsx'
import DirectMessages from '../sidebar/directMessages/DirectMessages.tsx'
import UserInfo from '../sidebar/UserInfo/UserInfo.tsx'
import FriendsSection from '../Friends/Friends.tsx'

const Content = () => {
	return (
		<>
			<aside className={'bg-sidebar'}>
				<section className={'border-b-[1px] border-[#202225] h-12 pt-2.5 p-2.5'}>
					<TextButton className={'h-7'} variant={'dark'}>
						Find or start a conversation
					</TextButton>
				</section>
				<div className={'h-[calc(100svh-6.25rem)] w-60 overflow-y-scroll overflow-x-hidden pb-2.5'}>
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
