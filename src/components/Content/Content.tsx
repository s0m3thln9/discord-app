import HomeNavigation from '../sidebar/HomeNavigation/HomeNavigation.tsx'
import DirectMessages from '../sidebar/directMessages/DirectMessages.tsx'
import UserInfo from '../sidebar/UserInfo/UserInfo.tsx'
import FriendsSection from '../Friends/Friends.tsx'
import Button from '../UI/Button/Button.tsx'

const Content = () => {
	return (
		<>
			<aside className={'bg-sidebar'}>
				<section className={'h-12 border-b-[1px] border-[#202225] p-2.5 pt-2.5'}>
					<Button className={'h-7 justify-start bg-[#1e1f22] text-sm'} variant={'text'}>
						Find or start a conversation
					</Button>
				</section>
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
