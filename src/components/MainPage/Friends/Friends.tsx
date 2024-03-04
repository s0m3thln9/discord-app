import { Friends } from '../../../../public/svgs.tsx'
import TabBar from './TabBar/TabBar.tsx'
import ToolBar from './ToolBar/ToolBar.tsx'
import ActiveNow from './ActiveNow/ActiveNow.tsx'
import FriendsList from './FriendsList/FriendsList.tsx'

const FriendsSection = () => {
	return (
		<main className={'grow'}>
			<section className={'flex h-12 items-center justify-between border-b-[1px] border-[#202225] p-2.5 pt-2.5'}>
				<div className={'flex items-center'}>
					<div className={'flex items-center'}>
						<Friends fill={'#80848e'} className={'mx-2'} />
						<h2 className={'text-white cursor-default font-semibold'}>Friends</h2>
					</div>
					<TabBar />
				</div>
				<ToolBar />
			</section>
			<div className={'flex h-[calc(100svh-3rem)]'}>
				<FriendsList />
				<ActiveNow />
			</div>
		</main>
	)
}

export default FriendsSection
